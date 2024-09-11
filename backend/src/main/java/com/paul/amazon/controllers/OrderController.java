package com.paul.amazon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paul.amazon.DTOs.OrderRequestDTO;
import com.paul.amazon.entity.Order;
import com.paul.amazon.service.OrderService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping
    public ResponseEntity<Order> placeOrder(@RequestBody OrderRequestDTO orderRequestDTO) {
        Order order = orderService.placeOrder(orderRequestDTO);

        return new ResponseEntity<Order>(order, HttpStatus.CREATED);
    }

}
