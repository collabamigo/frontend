// import 'remirror/styles/all.css';
// import './styles.css';
import { cx, htmlToProsemirrorNode } from 'remirror';
import React from "react";
import {
    BlockquoteExtension,
    BoldExtension,
    // CodeBlockExtension,
    CodeExtension,
    ColumnAttributes,
    ColumnsExtension,
    FontFamilyExtension,
    FontSizeExtension,
    HardBreakExtension,
    HeadingExtension,
    HorizontalRuleExtension,
    ItalicExtension,
    // LinkExtension,
    // ListExtension,
    // MarkdownExtension,
    // MarkdownOptions,
    // MentionExtension,
    // TableExtension,
    // ShortcutsExtension,
    // StrikeExtension,
    SubExtension,
    SupExtension,
    // TextCaseExtension,
    UnderlineExtension,
} from "remirror/extensions";
// import css from 'refractor/lang/css';
// import javascript from 'refractor/lang/javascript';
// import html from 'refractor/lang/html';
// import json from 'refractor/lang/json';
// import markdown from 'refractor/lang/markdown';
// import typescript from 'refractor/lang/typescript';
import { Remirror, ThemeProvider, useActive, useCommands, useRemirror } from "@remirror/react";


export default function TextEditor() {
    const extensions = [
        new BlockquoteExtension(),
        new BoldExtension(),
        // new CodeBlockExtension({
        //     supportedLanguages: [javascript, typescript, html, css, markdown, json],
        // }),
        new CodeExtension(),
        new ColumnsExtension(),
        // new ColumnAttributes(),
        new FontFamilyExtension(),
        new FontSizeExtension(),
        new HardBreakExtension(),
        new HeadingExtension(),
        new HorizontalRuleExtension(),
        new ItalicExtension(),
        new SubExtension(),
        new SupExtension(),
        new UnderlineExtension(),
    ];

    const BlockquoteButton = () => {
        const commands = useCommands();
        const active = useActive(true);
        return (
            <button
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => commands.toggleBlockquote()}
                className={cx(active.blockquote() && 'active')}
            >
                Blockquote
            </button>
        );
    };

    const BoldButton = () => {
        const commands = useCommands();
        const active = useActive(true);
        return (
            <button
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => commands.toggleBold()}
                className={cx(active.bold() && 'active')}
            >
                Bold
            </button>
        );
    };

    const CodeButton = () => {
        const commands = useCommands();
        const active = useActive(true);
        return (
            <button
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => commands.toggleCode()}
                className={cx(active.code() && 'active')}
            >
                Code
            </button>
        );
    };

    const TWO_COLUMNS = {
        count: 2,
        fill: 'balance',
        ruleColor: 'darkred',
        ruleStyle: 'dashed',
        ruleWidth: 'thick',
        gap: '5em',
    };
    const THREE_COLUMNS = {
        count: 3,
    };

    const ColumnsButton = () => {
        const commands = useCommands();
        return (
            <>
                <button
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => commands.toggleColumns(TWO_COLUMNS)}
                >
                    2 columns
                </button>
                <button
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => commands.toggleColumns(THREE_COLUMNS)}
                >
                    3 columns
                </button>
            </>
        );
    };

    const FontFamilyButtons = () => {
        const commands = useCommands();
        return (
          <>
            <button
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => commands.setFontFamily('serif')}
            >
              Serif
            </button>
            <button
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => commands.setFontFamily('sans-serif')}
            >
              Sans serif
            </button>
          </>
        );
    };
    
    const FontSizeButtons = () => {
        const commands = useCommands();
        return (
          <>
            <button
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => commands.setFontSize(8)}
            >
              Small
            </button>
            <button
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => commands.setFontSize(24)}
            >
              Large
            </button>
          </>
        );
    };
    
    const HardBreakButton = () => {
        const commands = useCommands();
        return (
          <button
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => commands.insertHardBreak()}
          >
            Insert
          </button>
        );
    };
    
    const HeadingButtons = () => {
        const commands = useCommands();
        const active = useActive(true);
        return (
          <>
            {[1, 2, 3, 4, 5, 6].map((level) => (
              <button
                key={level}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => commands.toggleHeading({ level })}
                className={cx(active.heading({ level }) && 'active')}
              >
                H{level}
              </button>
            ))}
          </>
        );
    };
    
    const HorizontalRuleButton = () => {
        const commands = useCommands();
        return <button onClick={() => commands.insertHorizontalRule()}>Insert</button>;
    };
    
    const ItalicButton = () => {
        const commands = useCommands();
        const active = useActive(true);
        return (
          <button
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => commands.toggleItalic()}
            className={cx(active.italic() && 'active')}
          >
            Italic
          </button>
        );
    };
    
    const SubButton = () => {
        const commands = useCommands();
        return (
          <button
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => commands.toggleSubscript()}
          >
            Toggle Subscript
          </button>
        );
    };
    
    const SupButton = () => {
        const commands = useCommands();
        return (
          <button
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => commands.toggleSuperscript()}
          >
            Toggle Superscript
          </button>
        );
    };
    
    const UnderlineButton = () => {
        const commands = useCommands();
        const active = useActive(true);
        return (
          <button
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => commands.toggleUnderline()}
            className={cx(active.underline() && 'active')}
          >
            Underline
          </button>
        );
      };

    const { manager, state, onChange } = useRemirror({
        extensions: extensions,
        content: 'Content here ...',
        stringHandler: htmlToProsemirrorNode,
    });

    return (
        <ThemeProvider>
            <Remirror
                manager={manager}
                autoFocus
                onChange={onChange}
                initialContent={state}
                autoRender='end'
            >
                <BoldButton />
                <BlockquoteButton />
                <CodeButton />
                <ColumnsButton />
                <FontFamilyButtons />
                <FontSizeButtons />
                <HardBreakButton />
                <HeadingButtons />
                <HorizontalRuleButton />
                <ItalicButton />
                <SubButton />
                <SupButton />
                <UnderlineButton />
            </Remirror>
        </ThemeProvider>
    );
};