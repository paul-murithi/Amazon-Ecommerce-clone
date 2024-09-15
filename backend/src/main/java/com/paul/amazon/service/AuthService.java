package com.paul.amazon.service;

import com.paul.amazon.DTOs.LoginDto;
import com.paul.amazon.DTOs.SignUpDto;

public interface AuthService {
    String login(LoginDto loginDto);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);

    void registerUser(SignUpDto signUpDto);
}
