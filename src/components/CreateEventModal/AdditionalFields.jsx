import PropTypes from "prop-types";
import React from 'react';
import {useFormikContext} from "formik";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {DatePickerField} from "common/DatePickerField";

export default function AdditionalFields({errors, touched}) {

    const {
        values
    } = useFormikContext();
    if (values.isFormConnected)
        return (
            <div>
                <div className="mb-3 align-middle">
                    <label
                        className="me-2 fs-5"
                        htmlFor="registrationStartDate"
                    >
                        Registration opens on
                    </label>

                    <DatePickerField
                        className={"form-control w-auto text-input bg-secondary " +
                            "text-white border-secondary" +
                            ((touched.registrationStartDate && errors.registrationStartDate) ? " is-invalid" : "")}
                        id="registrationStartDate"
                        name="registrationStartDate"
                        required
                        showTimeSelect
                    />

                    {touched.registrationStartDate && errors.registrationStartDate &&
                        <div className="invalid-feedback">
                            {errors.registrationStartDate}
                        </div>}
                </div>

                <div className="mb-3 align-middle">
                    <label
                        className="me-2 fs-5"
                        htmlFor="registrationDeadlineDate"
                    >
                        Registration deadline
                    </label>

                    <DatePickerField
                        className={"form-control w-auto text-input bg-secondary " +
                            "text-white border-secondary" +
                            ((touched.registrationDeadlineDate && errors.registrationDeadlineDate) ? " is-invalid" : "")}
                        id="registrationDeadlineDate"
                        name="registrationDeadlineDate"
                        required
                        showTimeSelect
                    />

                    {touched.registrationDeadlineDate && errors.registrationDeadlineDate &&
                        <div className="invalid-feedback">
                            {errors.registrationDeadlineDate}
                        </div>}
                </div>

                <div className="w-100 text-end mt-4 pt-4">
                    <Button
                        className=" fs-5"
                        type="submit"
                        variant="primary"
                    >
                        Create registration form
                        {' '}

                        <FontAwesomeIcon icon={faChevronRight} />
                    </Button>
                </div>
            </div>
        )
    else
        return (
            <div className="w-100 text-end mt-4 pt-4">
                <Button
                    className=" fs-5"
                    type="submit"
                    variant="primary"
                >
                    Create event
                </Button>
            </div>
        );
}

AdditionalFields.propTypes = {
    errors: PropTypes.objectOf(PropTypes.string).isRequired,
    touched: PropTypes.objectOf(PropTypes.bool).isRequired,
};
