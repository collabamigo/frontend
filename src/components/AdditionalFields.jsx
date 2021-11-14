import React from 'react';
import {Field, useFormikContext} from "formik";
import Button from "react-bootstrap/Button";
import {IconContext} from "react-icons";
import {MdNavigateNext} from "react-icons/md";

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

                        <IconContext.Provider
                            // eslint-disable-next-line react/jsx-no-constructed-context-values
                            value={{
                                color: "rgb(26,32,44)",
                                "vertical-align": "middle",
                                size: "1.7em"
                            }}
                        >
                            <MdNavigateNext />
                        </IconContext.Provider>
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
