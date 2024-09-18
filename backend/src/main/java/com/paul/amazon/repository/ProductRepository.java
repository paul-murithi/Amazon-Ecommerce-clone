package com.paul.amazon.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paul.amazon.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Product findByProductId(String productId);

    Product productId(String productId);
}
