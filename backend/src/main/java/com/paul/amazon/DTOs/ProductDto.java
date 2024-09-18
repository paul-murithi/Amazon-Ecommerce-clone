package com.paul.amazon.DTOs;

import java.util.List;
import com.paul.amazon.entity.Product;

public class ProductDto {

    private String productId;
    private String image;
    private String name;
    private double ratingStars;
    private int ratingCount;
    private int priceCents;
    private List<String> keywords;
    private String type;
    private String sizeChartLink;

    // Constructor to convert Product to ProductDto
    public ProductDto(Product product) {
        this.productId = product.getProductId();
        this.image = product.getImage();
        this.name = product.getName();
        this.ratingStars = product.getRatingStars();
        this.ratingCount = product.getRatingCount();
        this.priceCents = product.getPriceCents();
        this.keywords = product.getKeywords();
        this.type = product.getType();
        this.sizeChartLink = product.getSizeChartLink();
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getRatingStars() {
        return ratingStars;
    }

    public void setRatingStars(double ratingStars) {
        this.ratingStars = ratingStars;
    }

    public int getRatingCount() {
        return ratingCount;
    }

    public void setRatingCount(int ratingCount) {
        this.ratingCount = ratingCount;
    }

    public int getPriceCents() {
        return priceCents;
    }

    public void setPriceCents(int priceCents) {
        this.priceCents = priceCents;
    }

    public List<String> getKeywords() {
        return keywords;
    }

    public void setKeywords(List<String> keywords) {
        this.keywords = keywords;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSizeChartLink() {
        return sizeChartLink;
    }

    public void setSizeChartLink(String sizeChartLink) {
        this.sizeChartLink = sizeChartLink;
    }
}
