import axios from "axios";
import type { CreateMessageInput, Message } from "../types/message";


const apiClient = axios.create({
    baseURL: '/api', // Относительный путь! 
    headers: {
        'Content-Type': 'application/json',
    }
});

export const messageApi = {
    getAll: () => apiClient.get<Message[]>('/message'),

    getById: (id: number) => apiClient.get<Message>(`/message/${id}`),

    create: (data: CreateMessageInput) => apiClient.post<Message>('/message', data),

    delete: (id: number) => apiClient.delete<void>(`/message/${id}`),
};