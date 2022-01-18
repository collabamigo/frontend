import PropTypes from "prop-types";
import React, {useEffect} from "react";
import {useField, useFormikContext} from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function DatePickerField({...props}) {
    const {setFieldValue, setFieldTouched} = useFormikContext();
    const [field] = useField(props);
    let externalClassName = "";
    if (props.className.includes("is-invalid")) {
        externalClassName += "is-invalid ";
    }
    useEffect(() =>{
        setFieldTouched(field.name, false, false);
    }, [1]);

    return (
        <span className={externalClassName}>
            <DatePicker
                {...field}
                {...props}
                dateFormat="MMMM d, yyyy h:mm aa"
                onChange={val => {
                setFieldValue(field.name, val);
                setFieldTouched(field.name, true, true);
            }}
                onChangeRaw={() => {
                setFieldTouched(field.name, true, true);
            }}
                selected={(field.value && new Date(field.value)) || null}
            />
        </span>
    );
}

DatePickerField.defaultProps = {
    className: "",
};

DatePickerField.propTypes = {
    className: PropTypes.string,
};

