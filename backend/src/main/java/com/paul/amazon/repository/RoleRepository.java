package com.paul.amazon.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paul.amazon.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String name);

    boolean existsByName(String name);
}
