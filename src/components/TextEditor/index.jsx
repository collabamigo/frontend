// import 'remirror/styles/all.css';
// import './styles.css';
import { cx, htmlToProsemirrorNode } from "remirror";
import React from "react";
import {
  BlockquoteExtension,
  BoldExtension,
  CodeBlockExtension,
  CodeExtension,
  ColumnAttributes,
  ColumnsExtension,
  FontFamilyExtension,
  FontSizeExtension,
  HardBreakExtension,
  HeadingExtension,
  HorizontalRuleExtension,
  ItalicExtension,
  LinkExtension,
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
import {
  Remirror,
  ThemeProvider,
  useActive,
  useCommands,
  useRemirror,
} from "@remirror/react";

export default function TextEditor() {
  const extensions = [
    new BlockquoteExtension(),
    new BoldExtension(),
    new CodeBlockExtension({
      // supportedLanguages: [javascript, typescript, 'html', css, markdown, json],
      // supportedLanguages: [css],
    }),
    new CodeExtension(),
    new ColumnsExtension(),
    // new ColumnAttributes(),
    new FontFamilyExtension(),
    new FontSizeExtension(),
    new HardBreakExtension(),
    new HeadingExtension(),
    new HorizontalRuleExtension(),
    new ItalicExtension(),
    new LinkExtension({
      autoLink: true,
    }),
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
        className="btn-icon-editor"
      >
        <span class="material-icons-outlined icons-editor">
          format_quote
        </span>
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
        className="btn-icon-editor"
      >
        <span class="material-icons-outlined icons-editor">
          format_bold
        </span>
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
        className="btn-icon-editor"
      >
        <span class="material-icons-outlined icons-editor">
          code
        </span>
      </button>
    );
  };

  const TWO_COLUMNS = {
    count: 2,
    fill: "balance",
    ruleColor: "darkred",
    ruleStyle: "dashed",
    ruleWidth: "thick",
    gap: "5em",
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
          2 col
        </button>
        <button
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => commands.toggleColumns(THREE_COLUMNS)}
        >
          3 col
        </button>
      </>
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
            className="btn-icon-editor"
          >
            H{level}
          </button>
        ))}
      </>
    );
  };

  const HorizontalRuleButton = () => {
    const commands = useCommands();
    return (
      <button onClick={() => commands.insertHorizontalRule()} className="btn-icon-editor">
        <span class="material-icons-outlined icons-editor">
          horizontal_rule
        </span>
      </button>
    );
  };

  const ItalicButton = () => {
    const commands = useCommands();
    const active = useActive(true);
    return (
      <button
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => commands.toggleItalic()}
        className="btn-icon-editor"
      >
        <span class="material-icons-outlined icons-editor">
          format_italic
        </span>
      </button>
    );
  };

  const SubButton = () => {
    const commands = useCommands();
    return (
      <button
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => commands.toggleSubscript()}
        className="btn-icon-editor"
      >
        <span class="material-icons-outlined icons-editor">
          subscript
        </span>
      </button>
    );
  };

  const SupButton = () => {
    const commands = useCommands();
    return (
      <button
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => commands.toggleSuperscript()}
        className="btn-icon-editor"
      >
        <span class="material-icons-outlined icons-editor">
          superscript
        </span>
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
        className="btn-icon-editor"
      >
        <span class="material-icons-outlined icons-editor">
          format_underlined
        </span>
      </button>
    );
  };

  const { manager, state, onChange } = useRemirror({
    extensions: extensions,
    content: "Content here ...",
    stringHandler: htmlToProsemirrorNode,
  });

  return (
    <ThemeProvider>
      <Remirror
        manager={manager}
        autoFocus
        onChange={onChange}
        initialContent={state}
        autoRender="end"
      >
        <BoldButton />
        <ItalicButton />
        <UnderlineButton />
        {/* <BlockquoteButton /> */}
        <CodeButton />
        <HeadingButtons />
        <HorizontalRuleButton />
        <SubButton />
        <SupButton />
        {/* <ColumnsButton /> */}
      </Remirror>
    </ThemeProvider>
  );
}
