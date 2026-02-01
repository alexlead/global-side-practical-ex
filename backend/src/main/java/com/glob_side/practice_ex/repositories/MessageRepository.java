package com.glob_side.practice_ex.repositories;

import com.glob_side.practice_ex.domain.Message;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Jpa interface for Message table
 */
public interface MessageRepository extends JpaRepository<Message, Integer> {

}
