package com.paul.amazon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paul.amazon.DTOs.ProductDto;
import com.paul.amazon.entity.Product;
import com.paul.amazon.repository.ProductRepository;

import java.util.List;
import java.util.stream.Collectors;

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

    public List<ProductDto> searchProducts(String query) {
        if (query == null || query.isEmpty()) {
            return productRepository.findAll().stream()
                    .map(this::convertToDto)
                    .collect(Collectors.toList());
        }

        return productRepository.findByNameContainingIgnoreCaseOrKeywordsContainingIgnoreCase(query, query).stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    private ProductDto convertToDto(Product product) {
        ProductDto dto = new ProductDto(product);
        dto.setProductId(product.getProductId());
        dto.setImage(product.getImage());
        dto.setName(product.getName());
        dto.setRatingStars(product.getRatingStars());
        dto.setRatingCount(product.getRatingCount());
        dto.setPriceCents(product.getPriceCents());
        dto.setKeywords(product.getKeywords());
        dto.setType(product.getType());
        dto.setSizeChartLink(product.getSizeChartLink());
        return dto;
    }
}
