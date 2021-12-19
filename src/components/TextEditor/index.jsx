/* eslint-disable react/no-multi-comp,react/no-unstable-nested-components */

// import { MarkdownExtension } from "remirror";
import React from "react";
import {
    BlockquoteExtension,
    BoldExtension,
    CodeBlockExtension,
    CodeExtension,
    HeadingExtension,
    HorizontalRuleExtension,
    ItalicExtension,
    LinkExtension,
    BulletListExtension,
    OrderedListExtension,
    // ListExtension,
    MarkdownExtension,
    // MarkdownOptions,
} from "remirror/extensions";
// import css from 'refractor/lang/css';
// import javascript from 'refractor/lang/javascript';
// import html from 'refractor/lang/html';
// import json from 'refractor/lang/json';
// import markdown from 'refractor/lang/markdown';
// import typescript from 'refractor/lang/typescript';
import {
    // EditorComponent,
    Remirror,
    ThemeProvider,
    useCommands,
    useRemirror,
    useHelpers,
    // useKeymap,
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
        new HeadingExtension(),
        new HorizontalRuleExtension(),
        new ItalicExtension(),
        new LinkExtension({
            autoLink: true,
        }),
        new MarkdownExtension(),
        new BulletListExtension(),
        new OrderedListExtension(),
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

    function ListButton() {
        const commands = useCommands();
        return (
            <>
                <button
                    className="btn-icon-editor"
                    onClick={() => commands.toggleBulletList()}
                    onMouseDown={(event) => event.preventDefault()}
                    type="button"
                >
                    <svg
                        className="bi bi-list-ul"
                        fill="currentColor"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                            fillRule="evenodd"
                        />
                    </svg>
                </button>

                <button
                    className="btn-icon-editor"
                    onClick={() => commands.toggleOrderedList()}
                    onMouseDown={(event) => event.preventDefault()}
                    type="button"
                >
                    <svg
                        className="bi bi-list-ol"
                        fill="currentColor"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"
                            fillRule="evenodd"
                        />

                        <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z" />
                    </svg>
                </button>
            </>
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

                {/*<UnderlineButton />*/}

                {/* <BlockquoteButton /> */}

                <CodeButton />

                <HeadingButtons />

                <HorizontalRuleButton />

                <ListButton />

                {/*<SubButton />*/}

                {/*<SupButton />*/}

                {/* <ColumnsButton /> */}
            </Remirror>
        </ThemeProvider>
    );
}
