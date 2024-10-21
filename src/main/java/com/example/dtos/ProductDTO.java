package com.example.dtos;

import com.example.models.Product;
import com.example.models.enums.ProductState;
import lombok.Getter;

@Getter
public class ProductDTO {

    private Long id;
    private String name;
    private String description;
    private String imageUrl;
    private double price;
    private int stock;
    private ProductState productState;

    public ProductDTO(Product product) {
        id = product.getId();
        name = product.getName();
        description = product.getDescription();
        imageUrl = product.getImageUrl();
        price = product.getPrice();
        stock = product.getStock();
        productState = product.getProductState();
    }
}
