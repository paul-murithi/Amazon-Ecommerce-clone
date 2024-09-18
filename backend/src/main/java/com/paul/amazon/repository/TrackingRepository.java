package com.paul.amazon.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

import com.paul.amazon.entity.Order;
import com.paul.amazon.entity.Tracking;

public interface TrackingRepository extends JpaRepository<Tracking, Long> {
    Optional<Tracking> findByOrder(Order order);
}
