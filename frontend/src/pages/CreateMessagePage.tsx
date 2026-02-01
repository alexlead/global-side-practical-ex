import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { messageApi } from '../api/apiClient';
import type { CreateMessageInput } from '../types/message';



const MessageSchema = Yup.object().shape({
    title: Yup.string()
        .min(3, 'Title too short')
        .max(40, 'Title too long')
        .required('Title is required'),
    content: Yup.string()
        .min(3, 'Content too short')
        .required('Content is required'),
});

const CreateMessagePage: React.FunctionComponent = () => {
    const navigate = useNavigate();

    const initialValues: CreateMessageInput = {
        title: '',
        content: '',
    };

    const handleSubmit = async (values: CreateMessageInput, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            await messageApi.create(values);
            alert('The message has been created successfully');
            navigate('/');
        } catch (error) {
            console.error('Saving error:', error);
            alert('There was an error creating the message.');
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="container">
            <h2 className="mb-4">Create New Message</h2>

            <Formik
                initialValues={initialValues}
                validationSchema={MessageSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Subject</label>
                            <Field
                                name="title"
                                type="text"
                                maxLength={40}
                                className={`form-control ${errors.title && touched.title ? 'is-invalid' : ''}`}
                                placeholder="Enter title..."
                            />
                            <ErrorMessage name="title" component="div" className="invalid-feedback" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">Text</label>
                            <Field
                                as="textarea"
                                name="content"
                                rows={5}
                                maxLength={1000}
                                className={`form-control ${errors.content && touched.content ? 'is-invalid' : ''}`}
                                placeholder="Enter message..."
                            />
                            <ErrorMessage name="content" component="div" className="invalid-feedback" />
                        </div>
                        <div className="d-flex gap-2">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Saving...' : 'Send'}
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() => navigate('/')}
                            >
                                Cancel
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
export default CreateMessagePage;