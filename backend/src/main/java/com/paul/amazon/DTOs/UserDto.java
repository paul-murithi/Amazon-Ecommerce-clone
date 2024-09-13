package com.paul.amazon.DTOs;

import java.util.Set;

import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String name;
    private String username;
    private String email;
    private Set<String> roles;

}
