import React from "react";
import {useField} from "formik";
import PropTypes from "prop-types";

export default function TextInput ({label, ...props}){
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <label
                className="fw-bold pb-2"
                htmlFor={props.id || props.name}
            >
                {label}
            </label>

            <br />

            <textarea
                className="text-input w-100 bg-secondary text-white border-secondary"
                {...field}
                {...props}
            />

            {meta.touched && meta.error ? (
                <div className="error">
                    {meta.error}
                </div>
            ) : null}
        </>
    );
}

TextInput.defaultProps = {
    label: "",
    placeholder: "",
};

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};
