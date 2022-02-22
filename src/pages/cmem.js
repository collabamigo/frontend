import React from "react";
import Axios from "utilities/axios.js";
import { Modal, Table } from "react-bootstrap";

function CMem() {
    const [mem, setMem] = React.useState([]);
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const memmail = [];

    const [show2, setShow2] = React.useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    // const [show3, setShow3] = React.useState(false);
    // const handleClose3 = () => setShow3(false);
    // const handleShow3 = () => setShow3(true);

    // const [val, setVal] = React.useState("");
    const [val2, setVal2] = React.useState("");
    // const [val3, setVal3] = React.useState("");

    // const handleChange = (e) => {
    //     setVal(e.target.value);
    // };

    const handleChange2 = (e) => {
        setVal2(e.target.value);
    };

    // const handleChange3 = (e) => {
    //     setVal3(e.target.value);
    // };

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

    //axios patch to update the member
    const handleUpdate = () => {
        console.log(val2);
        Axios.patch(
            `/club/club/byld/`,
            { "members": memmail },
        )
            .then((res) => {
                console.log(res);
                handleClose2();
                handleClose();
            }
        )
            .catch((err) => {
                console.log(err);
            }
        );
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            email: val2,
        };
        setMem([...mem, data]);
        mem.forEach((element) => {
            console.log(element.email);
            memmail.push(element.email);
        });
        handleClose2();
        handleUpdate();
    }

    return (
        <div>
            {mem.map((member) => (
                <p key={member.id}>
                    {member.name}
                </p>
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
                                    Email
                                </th>

                                <th />
                            </tr>
                        </thead>

                        <tbody>
                            {mem.map((member) => (
                                <tr key={member.id}>
                                    <td>
                                        {member.email}
                                    </td>

                                    <td>
                                        <button
                                            onClick={() => {
                                                setMem(mem => mem.filter( m => m !== member));
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
                                Email:
                            </label>

                            <input
                                name="email"
                                onChange={handleChange2}
                                placeholder="Email"
                                type="email"
                                value={val2}
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
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