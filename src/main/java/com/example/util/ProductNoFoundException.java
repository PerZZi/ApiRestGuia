package com.example.util;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FOUND)
public class ProductNoFoundException extends RuntimeException{

    public ProductNoFoundException(String message){
        super(message);
    }
}
