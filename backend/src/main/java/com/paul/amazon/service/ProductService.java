package com.paul.amazon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paul.amazon.entity.Product;
import com.paul.amazon.repository.ProductRepository;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(String productId) {
        return productRepository.findByProductId(productId);
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }
}
