import * as React from "react"
// import copyClipBoard from "./utils/copyClipBoard"
import { useStateMachine } from "little-state-machine"
// import generic from "./FormBuilder/data/generic"
import Prism from "prismjs"
import * as styles from "./CodeArea.module.css"
import PropTypes from "prop-types";

export function CodeSandBoxLink({
  url,
  isJS,
  style,
  isExpo,
}) {
  return (
      <a
          className={`${styles.button} ${styles.linkToSandBox}`}
          href={url}
          rel="noopener noreferrer"
          style={style}
          target="_blank"
      >
          {!isExpo && (
          <svg viewBox="0 0 256 296">
              <g>
                  <path
                      d="M115.497674,261.08837 L115.497674,154.478845 L23.8139535,101.729261 L23.8139535,162.501763 L65.8104558,186.8486 L65.8104558,232.549219 L115.497674,261.08837 Z M139.311628,261.714907 L189.916577,232.563707 L189.916577,185.779949 L232.186047,161.285235 L232.186047,101.27387 L139.311628,154.895035 L139.311628,261.714907 Z M219.971965,80.8276886 L171.155386,52.5391067 L128.292316,77.4106841 L85.1040206,52.5141067 L35.8521355,81.1812296 L127.765737,134.063073 L219.971965,80.8276886 Z M0,222.211907 L0,74.4948807 L127.986799,0 L256,74.1820085 L256,221.978632 L127.983954,295.72283 L0,222.211907 Z"
                      fill="currentColor"
                  />
              </g>
          </svg>
    )}

          {" "}

          {isExpo ? "Expo" : "CodeSandbox"}

          {" "}

          {typeof isJS === "boolean" && (
          <sup
              style={{
          marginLeft: 5,
          fontSize: 10,
        }}
          >
              {isJS ? "JS" : "TS"}
          </sup>
    )}
      </a>)
}

const ToggleTypes = {
  js: "JS",
  ts: "TS",
  types: "TYPES",
}

// eslint-disable-next-line react/no-multi-comp
export default function CodeArea({
  rawData,
  tsRawData,
  rawTypes,
  url,
  tsUrl,
                                   // eslint-disable-next-line no-unused-vars
  withOutCopy,
  isExpo,
  style,
}) {
  const {
    state: { language },
  } = useStateMachine()
  const [currentType, setType] = React.useState(
    (rawData && ToggleTypes.js) ||
      (tsRawData && ToggleTypes.ts) ||
      ToggleTypes.types
  )
  const codeAreaRef = React.useRef<HTMLDivElement | null>(null)

  // eslint-disable-next-line no-unused-vars
  const getData = () => {
    switch (currentType) {
      case ToggleTypes.js:
        return rawData
      case ToggleTypes.ts:
        return tsRawData
      default:
        return rawTypes
    }
  }

  const { currentLanguage } =
    language && language.currentLanguage ? language : { currentLanguage: "en" }

  React.useEffect(() => {
    const highlight = async () => {
      if (codeAreaRef.current) {
        Prism.highlightAllUnder(codeAreaRef.current)
      }
    }
    highlight()
  }, [])

  return (
      <section
          style={{
        position: "relative",
      }}
      >
          <div className={styles.buttonWrapper}>
              {((rawData && tsRawData) || (rawData && rawTypes)) && (
              <button
                  className={`${styles.button} ${styles.codeLink} ${
              currentType === ToggleTypes.js ? styles.active : ""
            }`}
                  onClick={() => setType(ToggleTypes.js)}
                  type="button"
              >
                  JS
              </button>
        )}

              {((tsRawData && rawData) || (tsRawData && rawTypes)) && (
              <button
                  className={`${styles.button} ${styles.codeLink} ${
              currentType === ToggleTypes.ts ? styles.active : ""
            }`}
                  onClick={() => setType(ToggleTypes.ts)}
                  type="button"
              >
                  TS
              </button>
        )}

              {((rawTypes && rawData) || (rawTypes && tsRawData)) && (
              <button
                  className={`${styles.button} ${styles.codeLink} ${
              currentType === ToggleTypes.types ? styles.active : ""
            }`}
                  onClick={() => setType(ToggleTypes.types)}
                  type="button"
              >
                  Types
              </button>
        )}

              {/* {!withOutCopy && (
          <button
            className={`${styles.button} ${styles.copyButton}`}
            onClick={() => {
              copyClipBoard(getData())
              alert(generic.copied[currentLanguage])
            }}
            aria-label={generic.copied[currentLanguage]}
          >
            {generic.copy[currentLanguage]}
          </button>
        )} */}

              {((url && currentType === ToggleTypes.js) ||
          (tsUrl && currentType === ToggleTypes.ts) ||
          (tsUrl && currentType === ToggleTypes.types)) && (
          <CodeSandBoxLink
              isExpo={isExpo}
              isJS={url && currentType === ToggleTypes.js && url && tsUrl}
              url={currentType === ToggleTypes.js ? url : tsUrl}
          />
        )}
          </div>

          <div
              className={styles.wrapper}
              ref={codeAreaRef}
          >
              <pre
                  className="raw-code"
                  style={style}
              >
                  <code
                      className={`language-javascript ${
              currentType === ToggleTypes.js ? styles.showCode : ""
            }`}
                  >
                      {rawData}
                  </code>

                  <code
                      className={`language-javascript ${
              currentType === ToggleTypes.ts ? styles.showCode : ""
            }`}
                  >
                      {tsRawData}
                  </code>

                  <code
                      className={`language-javascript ${
              currentType === ToggleTypes.types ? styles.showCode : ""
            }`}
                  >
                      {rawTypes}
                  </code>
              </pre>
          </div>
      </section>
  )
}

CodeSandBoxLink.propTypes = {
  isExpo: PropTypes.bool.isRequired,
  isJS: PropTypes.bool.isRequired,
  style: PropTypes.objectOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
}

CodeArea.propTypes = {
  isExpo: PropTypes.bool.isRequired,
  rawData: PropTypes.string.isRequired,
  rawTypes: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.string).isRequired,
  tsRawData: PropTypes.string.isRequired,
  tsUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  withOutCopy: PropTypes.bool.isRequired,
}
