package com.paul.amazon.DTOs;

import com.paul.amazon.entity.Tracking;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TrackingDto {
    private Long orderId;
    private String status;
    private String estimatedDeliveryDate;
    private String productInfo;
    private String image;
    private int quantity;

    public TrackingDto(Tracking tracking) {
        this.orderId = tracking.getOrder().getId();
        this.status = tracking.getStatus();
        this.estimatedDeliveryDate = tracking.getEstimatedDeliveryDate();
        this.productInfo = tracking.getProductInfo();
        this.image = tracking.getImage();
        this.quantity = tracking.getQuantity();
    }

    // Getters and setters
}
