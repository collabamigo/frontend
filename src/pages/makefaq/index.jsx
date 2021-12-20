import { Form } from 'formik';
import React from 'react';
import { Modal } from 'react-bootstrap';

export default function Faq () {
  return (
      <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={() => { }}
          show
          size="lg"
      >
          <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                  FAQ
              </Modal.Title>
          </Modal.Header>

          <Modal.Body>
              <Form
                  initialValues={{
                      question: 'Question Here...',
                      answer: 'Answer Here...',
                  }}
                //   onSubmit={() => { }}
              >
                  <div className="form-group">
                      <label htmlFor="question">
                          Question
                      </label>

                      <input
                          className="form-control"
                          id="question"
                          placeholder="Question"
                          type="text"
                      />
                  </div>

                  <div className="form-group">
                      <label htmlFor="answer">
                          Answer
                      </label>

                      <input
                          className="form-control"
                          id="answer"
                          placeholder="Answer"
                          type="text"
                      />
                  </div>

                  <button
                      className="btn btn-primary"
                      type="submit"
                  >
                      Submit
                  </button>
              </Form>
          </Modal.Body>
      </Modal>
  );
}