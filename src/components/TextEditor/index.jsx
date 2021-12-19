import { htmlToProsemirrorNode } from "remirror";
import React from "react";
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
    new MarkdownExtension(),
  ];

  const BoldButton = () => {
    const commands = useCommands();
    const active = useActive(true);
    return (
      <button
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => commands.toggleBold()}
        className="btn-icon-editor"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-type-bold"
          viewBox="0 0 16 16"
        >
          <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z" />
        </svg>
      </button>
    );
  };

  function BoldButton() {
    const commands = useCommands();
    return (
      <button
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => commands.toggleCode()}
        className="btn-icon-editor"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-code-slash"
          viewBox="0 0 16 16"
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
        onClick={() => commands.insertHorizontalRule()}
        className="btn-icon-editor"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          ariaHidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <g transform="translate(0 24) scale(1 -1)">
            <path
              d="M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1z"
              fillRule="evenodd"
              fill="currentColor"
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
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => commands.toggleItalic()}
        className="btn-icon-editor"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-type-italic"
          viewBox="0 0 16 16"
        >
          <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" />
        </svg>
      </button>
    );
  }

  const { manager, state, onChange } = useRemirror({
    extensions: extensions,
    content: "Content here ...",
    stringHandler: "markdown",
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
        <div className="d-flex flex-row">
          <div className="icon-group">
            <BoldButton />
            <ItalicButton />
            <UnderlineButton />
          </div>
          <div className="icon-group">
            <HeadingButtons />
          </div>
          <div className="icon-group">
            <CodeButton />
            <HorizontalRuleButton />
            <SubButton />
            <SupButton />
          </div>
        </div>
      </Remirror>
    </ThemeProvider>
  );
}
