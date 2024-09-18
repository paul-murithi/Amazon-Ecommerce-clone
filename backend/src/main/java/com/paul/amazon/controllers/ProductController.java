package com.paul.amazon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.paul.amazon.DTOs.ProductDto;
import com.paul.amazon.entity.Product;
import com.paul.amazon.repository.ProductRepository;
import com.paul.amazon.service.ProductService;

import java.util.List;

@RestController
@RequestMapping("api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{productId}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable String productId) {
        Product product = productRepository.findByProductId(productId);
        if (product == null) {
            return ResponseEntity.notFound().build();
        }
        ProductDto productDto = new ProductDto(product);
        return ResponseEntity.ok(productDto);
    }

    @GetMapping("/search")
    public List<ProductDto> searchProducts(@RequestParam(required = false) String query) {
        return productService.searchProducts(query);
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }
}
