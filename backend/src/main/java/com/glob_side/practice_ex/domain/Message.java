package com.glob_side.practice_ex.domain;

import com.glob_side.practice_ex.domain.interfaces.MessageInterface;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table(name = "message")
@EntityListeners(AuditingEntityListener.class)
@Schema(description = "Entity class representing an message")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Message implements MessageInterface {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false, length = 150)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

}
