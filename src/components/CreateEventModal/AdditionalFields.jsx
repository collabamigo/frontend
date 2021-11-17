import React from 'react';
import {Field, useFormikContext} from "formik";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

export default function AdditionalFields() {

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

                    <Field
                        className="form-control w-auto text-input bg-secondary text-white border-secondary"
                        id="registrationStartDate"
                        name="registrationStartDate"
                        placeholder="yyyy-mm-dd"
                        required
                        type="date"
                    />
                </div>

                <div className="mb-3 align-middle">
                    <label
                        className="me-2 fs-5"
                        htmlFor="registrationDeadlineDate"
                    >
                        Registration deadline
                    </label>

                    <Field
                        className="form-control w-auto text-input bg-secondary text-white border-secondary"
                        id="registrationDeadlineDate"
                        name="registrationDeadlineDate"
                        placeholder="yyyy-mm-dd"
                        required
                        type="date"
                    />
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
