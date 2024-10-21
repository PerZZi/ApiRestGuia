import { useEffect, useState } from "react"
import axios from "axios";
import Header from "./Header";

const Profile = () => {

    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const url = "http://localhost:8080/user/profile"

    const userProfile = async () => {

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

            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log(response.data)
            setProfile(response.data)

        } catch (error) {

            console.error("Error al cargar el perfil:", error.response?.data || error.message);
            setError(error.response?.data?.message || "Error al cargar perfil Inténtalo de nuevo.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        userProfile();
    }, [])

    return (

        <div>

            <Header />

            {loading && <p>Cargando perfil...</p>} {/* Mostrar mensaje mientras carga */}
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar mensaje de error si hay */}

            {/* Verificar si el perfil está disponible antes de mostrar los datos */}
            {profile ? (
                <section className="flex flex-col justify-center items-center mt-10  h-[500px] w-full">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2 border-green-500">Sesion Perfil</h2>
                    <p className="text-xl font-bold text-gray-800">Esta es una sesion de detalles del cliente</p>
                <div className="flex flex-col items-center bg-white mt-10 w-[700px] rounded-lg shadow-lg p-6">
                    <h1 className="text-2xl text-center font-bold text-green-700 mb-4 border-b pb-2 border-green-500 w-[300px]">Perfil de Cliente</h1>
                    <p className="text-lg text-gray-800 mb-2 border-2 border-green-600 p-2 bg-green-600 w-[300px]"><strong>Nombre:</strong> {profile.name}</p>
                    <p className="text-lg text-gray-800 mb-2 border-2 border-green-600 p-2 bg-green-600 w-[300px]"><strong>Apellido:</strong> {profile.lastName}</p>
                    <p className="text-lg text-gray-800 mb-2 border-2 border-green-600 p-2 bg-green-600 w-[300px]"><strong>Email:</strong> {profile.email}</p>
                    <p className="text-lg text-gray-800 mb-2 border-2 border-green-600 p-2 bg-green-600 w-[300px]"><strong>Rol:</strong> {profile.rol}</p>
                    {/* Agregar más campos según los datos que recibas */}
                </div>
                </section>
            ) : (
                !loading && !error && <p>No se ha podido cargar el perfil del usuario.</p>
            )}

        </div>
    )
}
export default Profile