package com.glob_side.practice_ex.services;

import com.glob_side.practice_ex.domain.Message;
import com.glob_side.practice_ex.repositories.MessageRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService {

    private MessageRepository repository;

    public MessageService(MessageRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public Message saveMessage(Message message) {
        return repository.save(message);
    }

    public List<Message> getAllMessages() {
        return null;
    }
    public Optional<Message> getMessageById (Integer id ) {
        return repository.findById(id);
    }

    @Transactional
    public void deleteMessageById (Integer id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        }
    }
}
