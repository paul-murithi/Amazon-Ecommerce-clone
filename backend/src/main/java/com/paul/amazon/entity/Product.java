package com.paul.amazon.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "products")
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String productId;
    private String image;
    private String name;
    private double ratingStars;
    private int ratingCount;
    private int priceCents;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> keywords;

    private String type;
    private String sizeChartLink;
}
