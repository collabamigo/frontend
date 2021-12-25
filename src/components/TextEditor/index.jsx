/* eslint-disable react/no-multi-comp,react/no-unstable-nested-components */

import PropTypes from "prop-types";
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

export default function TextEditor({description, handleSetDescription}) {
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
                <svg
                    className="bi bi-type-bold"
                    fill="currentColor"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z" />
                </svg>
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
                <svg
                    className="bi bi-code-slash"
                    fill="currentColor"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                </svg>
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
                <svg
                    ariaHidden="true"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    role="img"
                    viewBox="0 0 24 24"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <g transform="translate(0 24) scale(1 -1)">
                        <path
                            d="M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1z"
                            fill="currentColor"
                            fillRule="evenodd"
                        />
                    </g>
                </svg>
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
                <svg
                    className="bi bi-type-italic"
                    fill="currentColor"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" />
                </svg>
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






            if (getMarkdown(state) !== description)
                handleSetDescription(getMarkdown(state));
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
                <div className="d-flex flex-row">
                    <div className="icon-group">
                        <BoldButton />

                        <ItalicButton />
                    </div>

                    <div className="icon-group">
                        <HeadingButtons />
                    </div>

                    <div className="icon-group">
                        <CodeButton />

                        <HorizontalRuleButton />
                    </div>

                    <div className="icon-group">
                        <ListButton />
                    </div>
                </div>
            </Remirror>
        </ThemeProvider>
    );
}

TextEditor.propTypes = {
    description: PropTypes.string.isRequired,
    handleSetDescription: PropTypes.func.isRequired,
};
