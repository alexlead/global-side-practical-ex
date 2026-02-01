import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { messageApi } from '../api/apiClient';
import MessageCard from '../components/MessageCard';
import type { Message } from '../types/message';


const MessageListPage: React.FunctionComponent = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await messageApi.getAll();
                const sortedMessages = response.data.sort(
                    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                );
                setMessages(sortedMessages);
            } catch (err) {
                console.error('Loading messages error:', err);
                setError('There was an error loading messages.');
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center my-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="alert alert-danger my-4">{error}</div>;
    }

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold text-dark">Messages</h2>
            </div>

            {messages.length === 0 ? (
                <div className="text-center py-5 border rounded bg-light shadow-sm">
                    <div className="mb-3">
                        <i className="bi bi-chat-dots" style={{ fontSize: '3rem', color: '#dee2e6' }}></i>
                    </div>
                    <h4 className="text-muted">There is no message.</h4>
                    <Link to="/create" className="btn btn-primary px-4 py-2">
                        Create new one
                    </Link>
                </div>
            ) : (
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        {messages.map((msg) => (
                            <MessageCard key={msg.id} message={msg} />
                        ))}
                    </div>
                    <div className="col-12 col-lg-10 mx-auto text-end mt-5">
                        <Link to="/create" className="btn btn-primary px-4 py-2">
                            Create new one
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
export default MessageListPage;