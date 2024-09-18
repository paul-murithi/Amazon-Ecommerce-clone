package com.paul.amazon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import java.util.stream.Collectors;

import static org.springframework.http.HttpStatus.OK;

import com.paul.amazon.DTOs.OrderDTO;
import com.paul.amazon.DTOs.OrderItemDTO;
import com.paul.amazon.DTOs.OrderRequestDTO;
import com.paul.amazon.entity.Order;
import com.paul.amazon.entity.OrderItem;
import com.paul.amazon.entity.User;
import com.paul.amazon.service.CustomUserDetails;
import com.paul.amazon.service.CustomUserDetailsService;
import com.paul.amazon.service.OrderService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

        @Autowired
        private OrderService orderService;

        // Existing place order API
        @PostMapping
        public ResponseEntity<Order> placeOrder(
                        @RequestBody OrderRequestDTO orderRequestDTO,
                        @AuthenticationPrincipal CustomUserDetails userDetails) {

                User user = userDetails.getUser();
                Order order = orderService.placeOrder(orderRequestDTO, user);

                return new ResponseEntity<>(order, HttpStatus.CREATED);
        }

        // New API to get user's orders
        @GetMapping
        public ResponseEntity<List<OrderDTO>> getUserOrders(@AuthenticationPrincipal CustomUserDetails userDetails) {
                User user = userDetails.getUser();
                List<Order> orders = orderService.getOrdersByUser(user);

                // Convert to DTOs
                List<OrderDTO> orderDTOs = orders.stream()
                                .map(order -> new OrderDTO(order.getId(), order.getOrderDate(), order.getTotalCost(),
                                                convertToOrderItemDTOs(order.getItems())))
                                .collect(Collectors.toList());

                return new ResponseEntity<>(orderDTOs, HttpStatus.OK);
        }

        private List<OrderItemDTO> convertToOrderItemDTOs(List<OrderItem> items) {
                return items.stream()
                                .map(item -> new OrderItemDTO(
                                                item.getProductExternalId(),
                                                item.getName(),
                                                item.getQuantity(),
                                                item.getPriceCents(),
                                                item.getDeliveryDate(),
                                                item.getProduct() != null ? item.getProduct().getImage() : null))
                                .collect(Collectors.toList());
        }

}
