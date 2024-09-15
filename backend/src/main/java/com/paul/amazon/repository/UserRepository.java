package com.paul.amazon.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paul.amazon.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    public Optional<User> findByUsernameOrEmail(String usernameOrEmail, String usernameOrEmail2);

    // Methods to check if a username or email already exists
    public boolean existsByUsername(String username);

    public boolean existsByEmail(String email);

}
