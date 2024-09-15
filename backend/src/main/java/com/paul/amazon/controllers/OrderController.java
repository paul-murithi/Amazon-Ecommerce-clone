package com.paul.amazon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paul.amazon.DTOs.OrderRequestDTO;
import com.paul.amazon.entity.Order;
import com.paul.amazon.entity.User;
import com.paul.amazon.service.CustomUserDetails;
import com.paul.amazon.service.CustomUserDetailsService;
import com.paul.amazon.service.OrderService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping
    public ResponseEntity<Order> placeOrder(
            @RequestBody OrderRequestDTO orderRequestDTO,
            @AuthenticationPrincipal CustomUserDetails userDetails) {

        // Extract the user from the authentication context
        User user = userDetails.getUser();

        // Pass the user to the service
        Order order = orderService.placeOrder(orderRequestDTO, user);

        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }
}
