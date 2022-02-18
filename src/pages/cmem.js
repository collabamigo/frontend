import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function CMem() {
    const [show, setShow] = React.useState(false);
    const [mem, setMem] = React.useState([]);

    return (
        <>
            <div>
                <h1>
                    Members
                </h1>

                <button
                    className="btn btn-primary"
                    onClick={() => setShow(true)}
                    type="button"
                >
                    Add Member
                </button>

                {mem.map((m) => (
                    <div key={m.id}>
                        <h2>
                            {m}
                        </h2>
                    </div>
                ))}
            </div>

            <Modal
                show={show}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Member
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <div>
                            <label>
                                Name:
                            </label>

                            <input
                                name="name"
                                placeholder="Name"
                                type="text"
                            />
                        </div>

                        <button
                            onClick={() => {
                                setMem([...mem, "New Member"]);
                            }}
                            type="submit"
                        >
                            Add
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}
