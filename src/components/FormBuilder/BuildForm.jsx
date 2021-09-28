import * as React from "react";
import PropTypes from "prop-types";
import { Animate } from "react-simple-animate";
import { useForm } from "react-hook-form";
import SortableContainer from "./SortableContainer";
import { useStateMachine } from "little-state-machine";
// import { navigate } from "@reach/router"
import colors from "../../styles/colors";
import generateCode from "../LogicFormBuilder/GenerateCode";
// import copyClipBoard from "./utils/copyClipBoard"
// import Footer from "./Footer"
import Popup from "./Popup";
// import LearnMore from "./learnMore"
// import goToBuilder from "./utils/goToBuilder"
import builder from "./data/builder";
import generic from "./data/generic"
// import translateLink from "../LogicFormBuilder/translateLink"
import * as buttonStyles from "../../styles/button.module.css"
import * as containerStyles from "../../styles/container.module.css"
import * as typographyStyles from "../../styles/typography.module.css";
import * as styles from "./BuildForm.module.css";
import CodeArea from "./CodeArea";

const { useState, useRef, useEffect } = React;

const updateStore = (state, payload) => {
    return {
        ...state,
        formData: [...payload],
    };
};

const errorStyle = {
  border: `1px solid ${colors.secondary}`,
  background: colors.errorPink,
}

const defaultValue = {
    max: undefined,
    min: undefined,
    pattern: undefined,
    maxLength: undefined,
    minLength: undefined,
    required: undefined,
    name: "",
    type: "",
    options: [],
};

function BuildForm({
    showBuilder,
    isStatic,
    defaultLang,
}) {
    const {
        state: { formData = [], language, setting = {} },
        actions: { updateFormData },
    } = useStateMachine({ updateFormData: updateStore });
    const isV7 = setting.version === 7;
    const { currentLanguage } =
        language && language.currentLanguage
            ? language
            : { currentLanguage: defaultLang };
    const [editFormData, setFormData] = useState(defaultValue);
    const {
        register,
        handleSubmit,
        errors = {},
        watch,
        setValue,
        reset,
    } = useForm();
    console.log("bigtest",register,
        handleSubmit,
        errors,
        watch,
        setValue,
        reset,)
    const [editIndex, setEditIndex] = useState(-1);
    const copyFormData = useRef([]);
    const closeButton = useRef(null);
    const [showValidation, toggleValidation] = useState(false);
    const onSubmit = (data) => {
        if (editIndex >= 0) {
            formData[editIndex] = data;
            updateFormData([...formData]);
            setFormData(defaultValue);
            setEditIndex(-1);
        } else {
            updateFormData([...formData, ...[data]]);
        }
        reset();
    };
    const form = useRef(null);
    const type = watch("type");
    const shouldToggleOn =
        editFormData.max ||
        editFormData.min ||
        editFormData.pattern ||
        editFormData.maxLength ||
        editFormData.minLength ||
        editFormData.required;
    copyFormData.current = formData;
    const editIndexRef = useRef(null);
    editIndexRef.current = editIndex;

    const validate = (value) => {
        return (
            !Object.values(copyFormData.current).find(
                (data) => data.name === value
            ) || editIndexRef.current !== -1
        );
    };

    useEffect(() => {
        if (showBuilder && closeButton.current) {
            closeButton.current.focus();
        }
    }, [showBuilder]);

    useEffect(() => {
        setValue("toggle", shouldToggleOn);
    }, [shouldToggleOn]);

    useEffect(() => {
        if (editFormData.type) setValue("type", editFormData.type);
    }, [editFormData.type]);

    useEffect(() => {
        setValue("required", editFormData.required);
    }, [editIndex]);

    const child = (
        <div className={containerStyles.container}>
            <h1
                className={typographyStyles.headingWithTopMargin}
                id="main"
            >
                {builder.builder[currentLanguage].title}
            </h1>

            <p className={typographyStyles.subHeading}>
                {builder.builder[currentLanguage].description}
            </p>

            <div className={styles.pageWrapper}>
                <section>
                    <h2 className={typographyStyles.title}>
                        {builder.layout[currentLanguage].title}
                    </h2>

                    <p style={{ fontSize: 14 }}>
                        <Popup iconOnly />

                        {builder.layout[currentLanguage].message}
                    </p>

                    <SortableContainer
                        {...{
                            updateFormData,
                            formData,
                            editIndex,
                            setEditIndex,
                            setFormData,
                            editFormData,
                            reset,
                            currentLanguage,
                        }}
                    />
                </section>

                <form
                    className={styles.form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h2
                        className={typographyStyles.title}
                        ref={form}
                    >
                        {builder.inputCreator[currentLanguage].title}
                    </h2>

                    <p style={{ fontSize: 14 }}>
                        <Popup iconOnly />

                        {builder.inputCreator[currentLanguage].description}
                    </p>

                    <label>
                        {generic.name[currentLanguage]}
                        :

                        {' '}
                    </label>

                    <input
                        aria-invalid={errors["name"] ? "true" : "false"}
                        aria-label="name"
                        autoComplete="off"
                        defaultValue={editFormData.name}
                        name="name"
                        ref={register({
                            required: true,
                            validate,
                        })}
                        style={{
                            ...(errors["name"] ? errorStyle : null),
                        }}
                    />

                    <Animate
                        duration={0.6}
                        end={{ maxHeight: 20 }}
                        play={!!errors["name"]}
                        start={{
                            maxHeight: 0,
                        }}
                    >
                        {errors.name && errors.name["type"] === "required" && (
                            <p className={typographyStyles.error}>
                                This is required.
                            </p>
                        )}

                        {errors.name && errors.name["type"] === "validate" && (
                            <p className={typographyStyles.error}>
                                Name required to be unique.
                            </p>
                        )}
                    </Animate>

                    <label>
                        {generic.type[currentLanguage]}
                        :

                        {' '}
                    </label>

                    <select
                        aria-label="Select type"
                        defaultValue={editFormData.type}
                        name="type"
                        ref={register}
                    >
                        <option value="text">
                            Text
                        </option>

                        <option value="select">
                            Select
                        </option>

                        <option value="checkbox">
                            Checkbox
                        </option>

                        <option value="radio">
                            Radio
                        </option>

                        <option value="number">
                            Number
                        </option>

                        <option value="textarea">
                            Textarea
                        </option>

                        <option value="email">
                            Email
                        </option>

                        <option value="range">
                            Range
                        </option>

                        <option value="search">
                            Search
                        </option>

                        <option value="tel">
                            Tel
                        </option>

                        <option value="url">
                            url
                        </option>

                        <option value="time">
                            Time
                        </option>

                        <option value="datetime">
                            datetime
                        </option>

                        <option value="datetime-local">
                            datetime-local
                        </option>

                        <option value="week">
                            week
                        </option>

                        <option value="month">
                            month
                        </option>

                        <option
                            disabled
                            value="validate"
                        >
                            validate
                        </option>
                    </select>

                    {(type === "select" ||
                        type === "radio" ||
                        editFormData.type === "select" ||
                        editFormData.type === "radio") && (
                        <>
                            <label>
                                {builder.inputCreator[currentLanguage].options}
                                :
                            </label>

                            <input
                                defaultValue={editFormData.options}
                                key={editFormData.name}
                                name="options"
                                placeholder="Enter options separate by ;"
                                ref={register}
                                type="text"
                            />
                        </>
                    )}

                    <label>
                        <input
                            name="toggle"
                            onClick={() => toggleValidation(!showValidation)}
                            ref={register}
                            type="checkbox"
                        />

                        {builder.inputCreator[currentLanguage].validation}
                    </label>

                    <Animate
                        end={{
                            maxHeight: 800,
                            overflow: "hidden",
                            marginBottom: 20,
                        }}
                        play={shouldToggleOn || showValidation}
                        start={{
                            maxHeight: 0,
                            overflow: "hidden",
                        }}
                    >
                        <fieldset>
                            <label
                                style={{
                                    marginTop: 0,
                                }}
                            >
                                <input
                                    name="required"
                                    ref={register}
                                    type="checkbox"
                                />
                                Required
                            </label>

                            <label htmlFor="max">
                                Max
                            </label>

                            <input
                                aria-label="max"
                                autoComplete="false"
                                defaultValue={editFormData.max}
                                name="max"
                                ref={register}
                                type="number"
                            />

                            <label htmlFor="min">
                                Min
                            </label>

                            <input
                                aria-label="min"
                                autoComplete="false"
                                defaultValue={editFormData.min}
                                name="min"
                                ref={register}
                                type="number"
                            />

                            <label htmlFor="maxLength">
                                MaxLength
                            </label>

                            <input
                                aria-label="max length"
                                autoComplete="false"
                                defaultValue={editFormData.maxLength}
                                name="maxLength"
                                ref={register}
                                type="number"
                            />

                            <label htmlFor="pattern">
                                Pattern
                            </label>

                            <input
                                aria-label="pattern"
                                autoComplete="false"
                                defaultValue={editFormData.pattern}
                                name="pattern"
                                ref={register}
                                style={{
                                    marginBottom: "20px",
                                }}
                                type="text"
                            />
                        </fieldset>
                    </Animate>

                    <button
                        className={buttonStyles.pinkButton}
                        onClick={() => {
                            form.current.scrollIntoView({ behavior: "smooth" });
                        }}
                        type="button"
                    >
                        {editIndex >= 0
                            ? generic.update[currentLanguage]
                            : generic.create[currentLanguage]}
                    </button>

                    {formData.length > 0 && (
                        <h2
                            className={typographyStyles.title}
                            style={{
                                fontSize: 14,
                                maxWidth: "80%",
                                margin: "0 auto 0",
                            }}
                        >
                            or
                        </h2>
                    )}

                    <Animate
                        end={{
                            opacity: 1,
                            pointerEvents: "auto",
                        }}
                        play={(formData || []).length > 0}
                        start={{
                            opacity: 0,
                            pointerEvents: "none",
                        }}
                    />
                </form>

                <section
                    style={{
                        paddingRight: "20px",
                        position: "relative",
                    }}
                >
                    <h2 className={typographyStyles.title}>
                        {builder.code[currentLanguage].title}
                    </h2>

                    <p style={{ fontSize: 14 }}>
                        <Popup iconOnly />

                        {builder.code[currentLanguage].description}
                    </p>

                    <section
                        style={{
                            position: "relative",
                        }}
                    >
                        {/* <div className={styles.buttonWrapper}>
              <button
                className={`${styles.button} ${styles.copyButton}`}
                onClick={() => {
                  copyClipBoard(generateCode(formData, isV7))
                  alert(generic.copied[currentLanguage])
                }}
                aria-label={generic.copied[currentLanguage]}
              >
                {generic.copy[currentLanguage]}
              </button>
            </div> */}

                        <CodeArea rawData={generateCode(formData, isV7)} />
                    </section>
                </section>
            </div>

            {/* <div style={{ margin: "0 20px" }}>
        <LearnMore currentLanguage={currentLanguage} />

        <Footer currentLanguage={currentLanguage} />
      </div> */}
        </div>
    );

    if (isStatic) return child;

    return (
        <Animate
            duration={0.5}
            easeType="ease-in"
            end={{
                transform: "translateY(0)",
            }}
            play={showBuilder || isStatic}
            render={({ style }) => (
                <main
                    className={styles.root}
                    style={style}
                >
                    <div
                        id="builder"
                        style={{
                            overflow: "auto",
                            height: "100vh",
                            background: colors.primary,
                        }}
                    >
                        {/* <button
              className={styles.closeButton}
              aria-label="close builder"
              ref={closeButton}
              onClick={() => {
                toggleBuilder(false)
                goToBuilder(false)
              }}
            >
              &#10005;
            </button> */}

                        {child}
                    </div>
                </main>
            )}
            start={{
                transform: "translateY(100vh)",
            }}
        />
    );
}

BuildForm.defaultProps = {
    defaultLang: "en",
    isStatic: false,
    showBuilder: false,
    toggleBuilder: () => {},
};

BuildForm.propTypes = {
    defaultLang: PropTypes.string,
    isStatic: PropTypes.bool,
    showBuilder: PropTypes.bool,
    toggleBuilder: PropTypes.func,
};

export default React.memo(BuildForm);
