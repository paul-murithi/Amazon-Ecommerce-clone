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

    private String productId;
    private String name;
    private int quantity;
    private int priceCents;
    private String deliveryDate;
}
