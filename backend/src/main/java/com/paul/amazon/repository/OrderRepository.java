package com.paul.amazon.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paul.amazon.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
