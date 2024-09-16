package com.paul.amazon.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.paul.amazon.entity.Order;
import com.paul.amazon.entity.User;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUser(User user);
}
