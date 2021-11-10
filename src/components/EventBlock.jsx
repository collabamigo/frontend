import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import React from "react";
export default function EventBlock() {
    return (
        <div>
            <div className="d-flex align-content-center m-auto justify-content-center ">
                <div className="row w-75 border p-2">

                    <div className="col-6">
                        <div className="d-flex align-content-center justify-content-center">
                            <Image
                                fluid
                                src="https://d33wubrfki0l68.cloudfront.net/79fa191cfa464a4e5c6ca10ddfc68499b313c8c2/8eec2/img/svg/developer.svg"
                            />
                        </div>
                    </div>

                    <div className="col-6 align-middle">
                        <div className="d-table align-content-center justify-content-center h-100 align-middle w-100">
                            <div className="d-table-cell align-middle w-100">
                                <h1 className="display-2 fw-bold">
                                    Magic Hackathon
                                </h1>

                                <h1 className="text-primary text-end ">
                                    by Byld
                                </h1>

                                <div
                                    className="d-flex justify-content-around w-100 my-5"
                                >
                                    <div className={" "}>
                                        <Button
                                            size="lg"
                                        >
                                            some
                                        </Button>
                                    </div>


                                    <div className="">
                                        <Button
                                            size="lg"
                                            variant="outline-primary"
                                        >
                                            button
                                        </Button>
                                    </div>
                                </div>

                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
