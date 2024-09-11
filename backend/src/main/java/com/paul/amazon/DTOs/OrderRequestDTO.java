package com.paul.amazon.DTOs;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class OrderRequestDTO {

    private List<OrderItemDTO> items;
    private LocalDateTime orderDate;
    private BigDecimal totalCost;
    private BigDecimal shipping;
    private BigDecimal tax;
}
