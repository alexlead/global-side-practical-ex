package com.glob_side.practice_ex.controllers;

import com.glob_side.practice_ex.domain.Message;
import com.glob_side.practice_ex.services.MessageService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for Messages
 * create APIs for messages
 */
@RestController
@RequestMapping("/message")
public class MessageController {

    private final MessageService service;

    /**
     * Controller constructor
     * @param service
     */
    public MessageController(MessageService service) {
        this.service = service;
    }

    /**
     * Get All Created Messages
     * @return
     */
    @GetMapping
    public List<Message> getAll() {
        return service.getAllMessages();
    }

    /**
     * Get a Message by Id
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    public ResponseEntity<Message> getById(@PathVariable Integer id) {
        return service.getMessageById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Create new Message
     * @param message
     * @return
     */
    @PostMapping
    public Message save(@Valid @RequestBody Message message) {
        return service.saveMessage(message);
    }

    /**
     * Delete a Message by Id
     * @param id
     * @return
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMessageById(@PathVariable Integer id) {
        service.deleteMessageById(id);
        return ResponseEntity.noContent().build();
    }
}
