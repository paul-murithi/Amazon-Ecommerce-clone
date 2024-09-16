package com.paul.amazon.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.paul.amazon.DTOs.OrderRequestDTO;
import com.paul.amazon.entity.Order;
import com.paul.amazon.entity.OrderItem;
import com.paul.amazon.entity.User;
import com.paul.amazon.repository.OrderItemRepository;
import com.paul.amazon.repository.OrderRepository;
import com.paul.amazon.repository.UserRepository;
import com.paul.amazon.security.JwtTokenProvider;
import java.time.ZoneId;
import java.time.ZonedDateTime;

import jakarta.transaction.Transactional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    // New method to fetch orders for the authenticated user
    public List<Order> getOrdersByUser(User user) {
        return orderRepository.findByUser(user);
    }

    @Transactional
    public Order placeOrder(OrderRequestDTO orderRequest, User user) {
        Order order = new Order();
        // convert to Kenya time
        LocalDateTime orderDateUTC = orderRequest.getOrderDate();
        ZonedDateTime kenyaTime = orderDateUTC.atZone(ZoneId.of("UTC"))
                .withZoneSameInstant(ZoneId.of("Africa/Nairobi"));

        order.setOrderDate(kenyaTime.toLocalDateTime());
        order.setTotalCost(orderRequest.getTotalCost());
        order.setShipping(orderRequest.getShipping());
        order.setTax(orderRequest.getTax());

        // Associate the order with the authenticated user
        order.setUser(user);

        List<OrderItem> orderItems = orderRequest.getItems().stream().map(itemDto -> {
            OrderItem orderItem = new OrderItem();
            orderItem.setProductExternalId(itemDto.getProductExternalId());
            orderItem.setName(itemDto.getName());
            orderItem.setQuantity(itemDto.getQuantity());
            orderItem.setPriceCents(itemDto.getPriceCents());
            orderItem.setDeliveryDate(itemDto.getDeliveryDate());
            orderItem.setOrder(order);
            return orderItem;
        }).collect(Collectors.toList());

        order.setItems(orderItems);

        return orderRepository.save(order);
    }
}
