import axios from "axios";
import Header from "./Header"
import { useState, useEffect } from "react";

const Products = () => {


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const endPointLista = "http://localhost:8080/product/list";

    const listProducts = async () => {

        setLoading(true);
        setError(null);

        const token = localStorage.getItem("token");

        if (!token) {
            console.error("Token no encontrado");
            setError("Token no encontrado. Por favor, inicia sesión.");
            setLoading(false);
            return;
        }

        try {

            const response = await axios.get(endPointLista, {
                headers: {
                    Authorization: `Bearer ${token}`
                } // Agregar encabezado de autorización
            });

            console.log(response.data)
            setProducts(response.data)

        } catch (error) {
            console.error("Error al obtener productos:", error.response?.data || error.message);
            setError(error.response?.data?.message || "Error al obtener productos. Inténtalo de nuevo.");
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        listProducts();
    }, [])

    return (

        <section>

            <Header />
            <div className="flex flex-col items-center mt-10 gap-4 ">

                <button className="flex p-2 bg-blue-700 " onClick={listProducts}>Recargar Lista Productos</button>

                {/* Muestra un mensaje de carga */}
                {loading && <p>Cargando productos...</p>}

                {/* Muestra un mensaje de error si ocurre */}
                {error && <p style={{ color: "red" }}>{error}</p>}

                {/* Contenedor de las tarjetas de productos */}
                <div className="product-container flex flex-wrap justify-center gap-6 my-4 test">
                    {products.map((product) => (
                        <section className="product-card flex flex-col flex-wrap items-center rounded-xl bg-white w-[300px] " key={product.id}>
                            <img src={product.imageUrl} alt={product.name} className="w-full h-[300px] object-cover rounded-xl" />
                            <h2 className="text-black">{product.name}</h2>
                            <p className="text-center text-black">{product.description}</p>
                            <p className="text-black">Precio: ${product.price}</p>
                            <p className="text-black">Stock disponible: {product.stock}</p>
                            <div className="flex justify-between  w-full">
                            <button className="bg-green-700 w-full p-2 hover:bg-green-600">Comprar</button>
                            <button className="bg-red-800 w-full p-2 hover:bg-red-700">Eliminar</button>
                            </div>
                        </section>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Products