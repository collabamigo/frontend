/* eslint-disable react/no-multi-comp,react/no-unstable-nested-components */

import { prosemirrorNodeToHtml } from "remirror";
import React, {useCallback} from "react";
import {
    BlockquoteExtension,
    BoldExtension,
    CodeBlockExtension,
    CodeExtension,
    ColumnsExtension,
    FontFamilyExtension,
    FontSizeExtension,
    HardBreakExtension,
    HeadingExtension,
    HorizontalRuleExtension,
    ItalicExtension,
    LinkExtension,
    // ListExtension,
    MarkdownExtension,
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
    useCommands,
    useRemirror,
    useHelpers,
    useKeymap,
} from "@remirror/react";
import { node } from "prop-types";

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
        new MarkdownExtension(),
        new SubExtension(),
        new SupExtension(),
        new UnderlineExtension(),
    ];

    function BoldButton() {
        const commands = useCommands();
        return (
            <button
                className="btn-icon-editor"
                onClick={() => commands.toggleBold()}
                onMouseDown={(event) => event.preventDefault()}
                type="button"
            >
                <span className="material-icons-outlined icons-editor">
                    format_bold
                </span>
            </button>
        );
    }

    function CodeButton() {
        const commands = useCommands();
        return (
            <button
                className="btn-icon-editor"
                onClick={() => commands.toggleCode()}
                onMouseDown={(event) => event.preventDefault()}
                type="button"
            >
                <span className="material-icons-outlined icons-editor">
                    code
                </span>
            </button>
        );
    }

    function HeadingButtons() {
        const commands = useCommands();
        return (
            <>
                {[1, 2, 3, 4, 5, 6].map((level) => (
                    <button
                        className="btn-icon-editor"
                        key={level}
                        onClick={() => commands.toggleHeading({ level })}
                        onMouseDown={(event) => event.preventDefault()}
                        type="button"
                    >
                        H
                        {level}
                    </button>
                ))}
            </>
        );
    }

    function HorizontalRuleButton() {
        const commands = useCommands();
        return (
            <button
                className="btn-icon-editor"
                onClick={() => commands.insertHorizontalRule()}
                type="button"
            >
                <span className="material-icons-outlined icons-editor">
                    horizontal_rule
                </span>
            </button>
        );
    }

    function ItalicButton() {
        const commands = useCommands();
        return (
            <button
                className="btn-icon-editor"
                onClick={() => commands.toggleItalic()}
                onMouseDown={(event) => event.preventDefault()}
                type="button"
            >
                <span className="material-icons-outlined icons-editor">
                    format_italic
                </span>
            </button>
        );
    }

    function SubButton() {
        const commands = useCommands();
        return (
            <button
                className="btn-icon-editor"
                onClick={() => commands.toggleSubscript()}
                onMouseDown={(event) => event.preventDefault()}
                type="button"
            >
                <span className="material-icons-outlined icons-editor">
                    subscript
                </span>
            </button>
        );
    }

    function SupButton() {
        const commands = useCommands();
        return (
            <button
                className="btn-icon-editor"
                onClick={() => commands.toggleSuperscript()}
                onMouseDown={(event) => event.preventDefault()}
                type="button"
            >
                <span className="material-icons-outlined icons-editor">
                    superscript
                </span>
            </button>
        );
    }

    function UnderlineButton() {
        const commands = useCommands();
        return (
            <button
                className="btn-icon-editor"
                onClick={() => commands.toggleUnderline()}
                onMouseDown={(event) => event.preventDefault()}
                type="button"
            >
                <span className="material-icons-outlined icons-editor">
                    format_underlined
                </span>
            </button>
        );
    }

    const hooks = [
        () => {
            const { getMarkdown } = useHelpers();
            console.log("content -" + getMarkdown(state));
            // const handleSaveShortcut = useCallback(
            //     ({ state }) => {
            //         console.log(`Save to backend: ${getMarkdown(state)}`);
            //         return true;
            //     },
            //     [getMarkdown],
            // );
            // useKeymap('Mod-S', handleSaveShortcut);
        },
    ];

    const { manager, state, onChange } = useRemirror({
        extensions: extensions,
        content: "Content here ...",
        stringHandler: "markdown",
    });
    // const { getMarkdown } = useHelpers();
    // console.log("content -" + getMarkdown(state));

    return (
        <ThemeProvider>
            <Remirror
                autoFocus
                autoRender="end"
                hooks={hooks}
                initialContent={state}
                manager={manager}
                onChange={onChange}
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
