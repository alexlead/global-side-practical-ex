package com.glob_side.practice_ex.domain.interfaces;
import java.time.LocalDateTime;

public interface MessageInterface {

    Integer getId();

    LocalDateTime getCreatedAt();

    String getTitle();
    void setTitle(String title);

    String getContent();
    void setContent(String content);

}
