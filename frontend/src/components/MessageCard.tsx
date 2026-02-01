import React from 'react';
import { Link } from 'react-router-dom';
import type { Message } from '../types/message';

interface IMessageCardProps {
    message: Message;
}

const MessageCard: React.FunctionComponent<IMessageCardProps> = ({ message }) => {

    const formattedDate = new Date(message.createdAt).toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })

    return (
        <div className="card mb-3 shadow-sm hover-shadow transition">
            <Link to={`/message/${message.id}`} className="text-decoration-none text-reset">
                <div className="row g-0 align-items-center">
                    <div className="col-auto bg-light border-end d-flex flex-column align-items-center justify-content-center px-4 py-3 text-center" style={{ minWidth: '100px' }}>
                        <span className="h4 mb-0 fw-bold">{formattedDate}</span>
                    </div>

                    <div className="col">
                        <div className="card-body py-2">
                            <h5 className="card-title mb-1 text-truncate" style={{ maxWidth: '400px' }}>
                                {message.title}
                            </h5>
                        </div>
                    </div>

                </div>
            </Link>
        </div>
    );
};
export default MessageCard;