import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import { Animate } from "react-simple-animate";
import { useForm } from "react-hook-form";
import SortableContainer from "./SortableContainer";
import colors from "styles/colors";
import generateCode from "./GenerateCode";
import builder from "./data/builder";
import generic from "./data/generic"
import * as containerStyles from "styles/container.module.css"
import * as typographyStyles from "styles/typography.module.css";
import * as styles from "./BuildForm.module.css";
import {LivePreview, LiveProvider} from "react-live";
// import CodeArea from "./CodeArea";


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

export default function FormBuilder({
    showBuilder,
    isStatic,
    state,
    setState
}) {

    const isV7 = false;

    const updateFormData = (payload) => {
        setState({
            1:payload,
            2:state[2]}
        )
    }
    const formData = state[1];

    const editFormData = state[2];
    const setFormData = (payload) => {
        setState({
            1: state[1],
            2: payload
        })
    }
    const {
        register,
        handleSubmit,
        errors = {},
        watch,
        setValue,
        reset,
    } = useForm();
    const [editIndex, setEditIndex] = useState(-1);
    const [isValidationEnabled, setIsValidationEnabled] = useState(false);
    const copyFormData = useRef([]);
    const closeButton = useRef(null);
    // const [showValidation, toggleValidation] = useState(false);
    const [duplicationError, setDuplicationError] = useState(false);

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
        const result = (
            !Object.values(copyFormData.current).find(
                (data) => data.name === value
            ) || editIndexRef.current !== -1
        );
        if (!result) {
            setDuplicationError(true);
        } else {
            setDuplicationError(false);
        }
        return result;
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
                className={typographyStyles.headingWithTopMargin + " fw-bold"}
                id="main"
            >
                {builder.builder["en"].title}
            </h1>

            <p className={typographyStyles.subHeading + " text-warning"}>
                {builder.builder["en"].description}
            </p>

            <div className={styles.pageWrapper}>
                <section>
                    <h2 className={typographyStyles.title}>
                        {builder.layout["en"].title}
                    </h2>

                    <p style={{ fontSize: 14 }}>

                        {builder.layout["en"].message}
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
                        }}
                        currentLanguage="en"
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
                        {builder.inputCreator["en"].title}
                    </h2>

                    <p style={{fontSize: 14}}>
                        {/*<Popup iconOnly />*/}

                        {builder.inputCreator["en"].description}
                    </p>

                    <label>
                        {generic.name["en"]}
                        :

                        {' '}
                    </label>

                    <input
                        aria-invalid={errors["name"] ? "true" : "false"}
                        aria-label="name"
                        autoComplete="off"
                        className={"form-control " + (duplicationError? "is-invalid" : "")}
                        defaultValue={editFormData.name}
                        {...register('name', {
                            required: true,
                            validate,
                        })}
                        style={{
                            ...(errors["name"] ? errorStyle : null),
                        }}
                    />

                    {duplicationError && (
                        <div className="invalid-feedback">
                            Duplicate field names not allowed
                        </div>
                    )}

                    <Animate
                        duration={0.6}
                        end={{maxHeight: 20}}
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
                        {generic.type["en"]}
                        :

                        {' '}
                    </label>

                    <select
                        aria-label="Select type"
                        defaultValue={editFormData.type}
                        {...register('type')}
                    >
                        <option value="text">
                            Text
                        </option>

                        <option value="select">
                            Dropdown
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

                        {/*<option value="range">
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
                        </option>*/}

                        <option value="time">
                            Time
                        </option>

                        {/*<option value="datetime">
                            datetime
                        </option>*/}

                        <option value="datetime-local">
                            datetime-local
                        </option>

                        <option value="date">
                            Date
                        </option>

                        <option value="file">
                            File Upload
                        </option>

                        {/*<option value="week">
                            week
                        </option>

                        <option value="month">
                            month
                        </option>*/}

                        {/*<option
                            disabled
                            value="validate"
                        >
                            validate
                        </option>*/}

                    </select>

                    {(type === "select" ||
                        type === "radio" ||
                        type === "checkbox" ||
                        editFormData.type === "select" ||
                        editFormData.type === "radio" ||
                        editFormData.type === "checkbox"
                    ) && (
                        <>
                            <label>
                                {builder.inputCreator["en"].options}
                                :
                            </label>

                            <input
                                defaultValue={editFormData.options}
                                key={editFormData.name}
                                {...register('options')}
                                placeholder="Enter options separate by ;"
                                type="text"
                            />
                        </>
                    )}

                    <label
                        style={{
                            marginTop: 0,
                        }}
                    >
                        <input
                            {...register('required')}
                            type="checkbox"
                        />
                        Required
                    </label>

                    {(type === "checkbox" ||
                        editFormData.type === "checkbox") &&
                        <label
                            style={{
                            marginTop: 0,
                        }}
                        >                            
                            <input
                                {...register('enable-validation')}
                                onChange={() => setIsValidationEnabled(prev=>!prev)}
                                type="checkbox"
                            />
                            Enable Validation
                        </label>}
                    
                    { isValidationEnabled &&
                        <> 
                            <label>
                                {builder.inputCreator["en"].min}
                                :
                            </label>

                            <input
                                defaultValue={0}
                                {...register('min')}
                                placeholder="Minimum"
                                type="number"
                            />

                            <label>
                                {builder.inputCreator["en"].max}
                                :
                            </label>

                            <input
                                defaultValue={0}
                                {...register('max')}
                                placeholder="Maximum"
                                type="number"
                            />
                        </>}

                    {/*<Animate
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
                    </Animate>*/}

                    <button
                        className="btn btn-warning align-self-center"
                        type="submit"
                    >
                        {editIndex >= 0
                            ? generic.update["en"]
                            : generic.create["en"]}
                    </button>
                </form>

                <section
                    style={{
                        paddingRight: "20px",
                        position: "relative",
                    }}
                >
                    <h2 className={typographyStyles.title}>
                        {builder.code["en"].title}
                    </h2>

                    <p style={{ fontSize: 14 }}>
                        {/*<Popup iconOnly />*/}

                        {builder.code["en"].description}
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
                  alert(generic.copied["en"])
                }}
                aria-label={generic.copied["en"]}
              >
                {generic.copy["en"]}
              </button>
            </div> */}



                        <LiveProvider code={generateCode(formData, isV7)}>
                            <LivePreview />
                        </LiveProvider>

                        {/*<CodeArea rawData={generateCode(formData, isV7)} />*/}
                    </section>
                </section>
            </div>

            {/* <div style={{ margin: "0 20px" }}>
        <LearnMore "en"={"en"} />

        <Footer "en"={"en"} />
      </div> */}
        </div>
    );

    if (isStatic) return child;

    if (!showBuilder) return <div />;
    return (
        <div
            id="builder"
        >
            {child}
        </div>
    );
}

FormBuilder.defaultProps = {
    defaultLang: "en",
    isStatic: false,
    showBuilder: true,
    toggleBuilder: () => {},
};

FormBuilder.propTypes = {
    defaultLang: PropTypes.string,
    isStatic: PropTypes.bool,
    setState: PropTypes.func.isRequired,
    showBuilder: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    state: PropTypes.object.isRequired,
    toggleBuilder: PropTypes.func,

};

