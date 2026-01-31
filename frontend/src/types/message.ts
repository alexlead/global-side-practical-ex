export interface Message {
    id: number;
    title: string;
    content: string;
    createdAt: string;
}

export type CreateMessageInput = Omit<Message, 'id' | 'createdAt'>;
