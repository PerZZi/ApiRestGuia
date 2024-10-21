package com.example;

import com.example.models.Product;
import com.example.repository.ProductRepository;
import com.example.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class GuiaSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(GuiaSpringApplication.class, args);

	}

	@Bean
	public CommandLineRunner initData(UserRepository userRepository, ProductRepository productRepository){
		return args -> {

			Product product1 = new Product("PS5", "Next-gen gaming console with ultra-fast SSD and 4K support", "/src/imagenes/ps5.png", 499.99, 100);
			Product product2 = new Product("PC Gamer XYZ", "High-performance gaming PC with NVIDIA RTX 3080", "/src/imagenes/pcgamer.png", 1599.99, 30);
			Product product3 = new Product("Sillón Reclinable", "Comfortable recliner chair with leather finish", "/src/imagenes/sillon.png", 299.99, 80);
			Product product4 = new Product("Smart TV 75 pulgadas", "75-inch 4K UHD Smart TV with HDR support", "/src/imagenes/smart.png", 1099.99, 45);
			Product product5 = new Product("Consola Nintendo Switch", "Portable gaming console with detachable Joy-Con controllers", "/src/imagenes/nintendo.png", 299.99, 200);
			Product product6 = new Product("Silla Gamer ABC", "Ergonomic gaming chair with adjustable armrests", "/src/imagenes/sillagamer.png", 189.99, 150);
			Product product7 = new Product("Auriculares Inalámbricos DEF", "Noise-cancelling wireless headphones with Bluetooth 5.0", "/src/imagenes/auriculares.png", 129.99, 90);
			Product product8 = new Product("Bicicleta Eléctrica GHI", "Electric bike with 500W motor and 25-mile range", "/src/imagenes/bici.png", 999.99, 25);
			Product product9 = new Product("Smartphone JKL", "High-end smartphone with 120Hz display and 5G support", "/src/imagenes/smartphone.png", 899.99, 120);
			Product product10 = new Product("Monitor Curvo 32''", "32-inch curved gaming monitor with 144Hz refresh rate", "/src/imagenes/monitor.png", 399.99, 60);

			productRepository.save(product1);
			productRepository.save(product2);
			productRepository.save(product3);
			productRepository.save(product4);
			productRepository.save(product5);
			productRepository.save(product6);
			productRepository.save(product7);
			productRepository.save(product8);
			productRepository.save(product9);
			productRepository.save(product10);
		};
	}
}
