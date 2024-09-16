package com.paul.amazon.DTOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemDTO {

    private String productExternalId;
    private String name;
    private int quantity;
    private int priceCents;
    private String deliveryDate;
    private String image;

    public OrderItemDTO(String productExternalId, String name, int quantity, int priceCents, String image) {
        this.productExternalId = productExternalId;
        this.name = name;
        this.quantity = quantity;
        this.priceCents = priceCents;
        this.image = image;
    }
}
