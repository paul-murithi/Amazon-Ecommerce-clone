package com.paul.amazon.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/products")
                .allowedOrigins("http://localhost:5173") // Replace with your frontend's origin
                .allowedMethods("GET", "POST", "PUT", "DELETE"); // Allowed HTTP methods
        // .allowedHeaders("*");
    }
}
