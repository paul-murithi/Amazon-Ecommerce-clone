package com.paul.amazon.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paul.amazon.entity.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}