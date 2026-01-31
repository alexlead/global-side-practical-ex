package com.glob_side.practice_ex.domain.interfaces;

import java.time.LocalDateTime;
import java.util.Date;

public interface MessageInterface {

    int getId();

    LocalDateTime getCreatedAt();

    String getTitle();
    void setTitle(String title);

    String getContent();
    void setContent(String content);

}
