package com.paul.amazon.service;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import java.util.stream.Collectors;

import com.paul.amazon.entity.User;

public class CustomUserDetails extends org.springframework.security.core.userdetails.User {

    private User user;

    public CustomUserDetails(User user) {
        super(user.getUsername(), user.getPassword(), user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName()))
                .collect(Collectors.toList()));
        this.user = user;
    }

    public User getUser() {
        return user;
    }
}
