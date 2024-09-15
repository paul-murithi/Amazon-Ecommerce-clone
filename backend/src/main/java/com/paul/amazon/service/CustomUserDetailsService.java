package com.paul.amazon.service;

import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.paul.amazon.entity.User;
import com.paul.amazon.repository.UserRepository;

@Service
@AllArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

        private final UserRepository userRepository;

        @Override
        public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {

                User user = userRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail)
                                .orElseThrow(() -> new UsernameNotFoundException(
                                                "User not exists by Username or Email"));

                return new CustomUserDetails(user);
        }
}

// @Service
// @AllArgsConstructor
// public class CustomUserDetailsService implements UserDetailsService {

// private UserRepository userRepository;

// @Override
// public UserDetails loadUserByUsername(String usernameOrEmail) throws
// UsernameNotFoundException {

// User user = userRepository.findByUsernameOrEmail(usernameOrEmail,
// usernameOrEmail)
// .orElseThrow(() -> new UsernameNotFoundException(
// "User not exists by Username or Email"));

// Set<GrantedAuthority> authorities = user.getRoles().stream()
// .map((role) -> new SimpleGrantedAuthority(role.getName()))
// .collect(Collectors.toSet());

// return new org.springframework.security.core.userdetails.User(
// usernameOrEmail,
// user.getPassword(),
// authorities);
// }
// }
