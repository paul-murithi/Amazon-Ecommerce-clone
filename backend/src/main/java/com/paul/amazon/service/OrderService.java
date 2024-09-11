package com.paul.amazon.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paul.amazon.DTOs.OrderRequestDTO;
import com.paul.amazon.entity.Order;
import com.paul.amazon.entity.OrderItem;
import com.paul.amazon.repository.OrderItemRepository;
import com.paul.amazon.repository.OrderRepository;

import jakarta.transaction.Transactional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Transactional
    public Order placeOrder(OrderRequestDTO orderRequest) {
        Order order = new Order();
        order.setOrderDate(orderRequest.getOrderDate());
        order.setTotalCost(orderRequest.getTotalCost());
        order.setShipping(orderRequest.getShipping());
        order.setTax(orderRequest.getTax());

        List<OrderItem> orderItems = orderRequest.getItems().stream().map(itemDto -> {
            OrderItem orderItem = new OrderItem();
            orderItem.setProductId(itemDto.getProductId());
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
