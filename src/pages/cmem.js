import React from "react";
import Axios from "utilities/axios.js";
import { Modal, Table } from "react-bootstrap";

function CMem() {
    const [mem, setMem] = React.useState([]);
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = React.useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [val, setVal] = React.useState("");
    const [val2, setVal2] = React.useState("");

    const handleChange = (e) => {
        setVal(e.target.value);
        setVal2(e.target.value);
    };

    // const [show, setShow] = React.useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // axios call to get all the members
    React.useEffect(() => {
        Axios.get("/club/club/byld")
            .then((res) => {
                console.log(res.data.members_detail);
                setMem(res.data.members_detail);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            {mem.map((member) => (
                <>
                    <p>
                        {member.name}
                    </p>

                    <p>
                        {member.email}
                    </p>
                </>
            ))}

            <button
                onClick={handleShow}
                type="button"
            >
                Edit
            </button>

            <Modal
                onHide={handleClose}
                show={show}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Modal heading
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Table
                        bordered
                        hover
                        striped
                    >
                        <thead>
                            <tr>
                                <th>
                                    Name
                                </th>

                                <th>
                                    Email
                                </th>

                                <th />
                            </tr>
                        </thead>

                        <tbody>
                            {mem.map((member) => (
                                <tr key={member.id}>
                                    <td>
                                        {member.name}
                                    </td>

                                    <td>
                                        {member.email}
                                    </td>

                                    <td>
                                        <button
                                            onClick={() => {
                                                Axios.delete(
                                                    `/club/club/byld/${member.id}`
                                                )
                                                    .then((res) => {
                                                        console.log(res);
                                                    })
                                                    .catch((err) => {
                                                        console.log(err);
                                                    });
                                            }}
                                            type="button"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <button
                        onClick={handleShow2}
                        type="button"
                    >
                        Add Member
                    </button>
                </Modal.Body>

                <Modal.Footer>
                    <button
                        onClick={handleClose}
                        type="button"
                    >
                        Close
                    </button>
                </Modal.Footer>
            </Modal>

            <Modal
                onHide={handleClose2}
                show={show2}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        New Member
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
                                value={val}
                            />

                            <label>
                                Email:
                            </label>

                            <input
                                name="email"
                                placeholder="Email"
                                type="email"
                                value={val2}
                            />
                        </div>

                        <button
                            onChange={handleChange}
                            type="submit"
                        >
                            Add
                        </button>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <button
                        onClick={handleClose2}
                        type="button"
                    >
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CMem;