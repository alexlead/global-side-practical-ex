import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { messageApi } from '../api/apiClient';
import type { Message } from '../types/message';


interface IMessageDetailsPageProps {
}

const MessageDetailsPage: React.FunctionComponent<IMessageDetailsPageProps> = () => {

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [message, setMessage] = useState<Message | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (id) {
            messageApi.getById(Number(id))
                .then(response => {
                    setMessage(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Loading error:", error);
                    navigate('/');
                });
        }
    }, [id, navigate]);

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this message?")) {
            try {
                await messageApi.delete(Number(id));
                alert("Message deleted successfully");
                navigate('/');
            } catch (error) {
                console.error("Error deleting message:", error);
                alert("Failed to delete the message.");
            }
        }
    };

    if (loading) return <div className="text-center mt-5">Loading...</div>;
    if (!message) return null;

    return (
        <div className="container mt-4">
            <div className="border-bottom mb-4">
                <h1 className="display-5">{message.title}</h1>
                <p className="text-muted">
                    <strong>Created at:</strong> {new Date(message.createdAt).toLocaleString()}
                </p>
            </div>

            <div className="mb-5" style={{ whiteSpace: 'pre-wrap' }}>
                {message.content}
            </div>

            <div className="d-flex gap-3">
                <button
                    onClick={() => navigate('/')}
                    className="btn btn-outline-secondary px-4"
                >
                    &lt;&lt; Back
                </button>
                <button
                    onClick={handleDelete}
                    className="btn btn-danger px-4 text-white"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
export default MessageDetailsPage;