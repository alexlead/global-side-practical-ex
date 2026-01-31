package com.glob_side.practice_ex;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class PracticeExApplication {

	public static void main(String[] args) {
		SpringApplication.run(PracticeExApplication.class, args);
	}

}
