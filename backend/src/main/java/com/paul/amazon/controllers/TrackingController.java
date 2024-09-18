package com.paul.amazon.controllers;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paul.amazon.DTOs.TrackingDto;
import com.paul.amazon.entity.Order;
import com.paul.amazon.entity.Tracking;
import com.paul.amazon.repository.OrderRepository;
import com.paul.amazon.repository.TrackingRepository;

@RestController
@RequestMapping("/api")
public class TrackingController {

    @Autowired
    private TrackingRepository trackingRepository;

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/tracking/{orderId}")
    public ResponseEntity<TrackingDto> getTrackingInfo(@PathVariable Long orderId) {
        Optional<Order> orderOptional = orderRepository.findById(orderId);
        if (!orderOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        Order order = orderOptional.get();
        Optional<Tracking> trackingOptional = trackingRepository.findByOrder(order);

        if (!trackingOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        Tracking tracking = trackingOptional.get();
        TrackingDto trackingDto = new TrackingDto(tracking);
        return ResponseEntity.ok(trackingDto);
    }
}
