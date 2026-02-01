package com.glob_side.practice_ex.services;

import com.glob_side.practice_ex.domain.Message;
import com.glob_side.practice_ex.repositories.MessageRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Service Class Implements methods DB/domain Message
 */
@Service
public class MessageService {

    private MessageRepository repository;

    public MessageService(MessageRepository repository) {
        this.repository = repository;
    }

    /**
     * Save new Message to DB
     * @param message
     * @return
     */
    @Transactional
    public Message saveMessage(Message message) {
        return repository.save(message);
    }

    /**
     * Get All Messages from DB
     * @return
     */
    public List<Message> getAllMessages() {
        return repository.findAll();
    }

    /**
     * Get a Message from DB by Id
     * @param id
     * @return
     */
    public Optional<Message> getMessageById (Integer id ) {
        return repository.findById(id);
    }

    /**
     * Delete a Message by Id
     * @param id
     */
    @Transactional
    public void deleteMessageById (Integer id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        }
    }
}
