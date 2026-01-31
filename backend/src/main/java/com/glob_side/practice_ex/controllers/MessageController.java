package com.glob_side.practice_ex.controllers;

import com.glob_side.practice_ex.domain.Message;
import com.glob_side.practice_ex.services.MessageService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/message")
public class MessageController {

    private MessageService service;

    public MessageController(MessageService service) {
        this.service = service;
    }

    @GetMapping
    public List<Message> getAll() {
        return service.getAllMessages();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Message> getById(@PathVariable Integer id) {
        return service.getMessageById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    @PostMapping
    public Message save(@Valid @RequestBody Message message) {
        return service.saveMessage(message);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMessageById(@PathVariable Integer id) {
        service.deleteMessageById(id);
        return ResponseEntity.noContent().build();
    }
}
