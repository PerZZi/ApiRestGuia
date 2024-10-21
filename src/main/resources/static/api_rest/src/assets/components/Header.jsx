import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Header = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        // Eliminar el token de autenticación almacenado en localStorage
        localStorage.removeItem("token");

        //Mostrar un mensaje de confirmación usando alert o alguna librería como SweetAlert
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Logout",
                text: "Your session was closed.",
                icon: "success"
              });
            }
          });

        // Redirigir al usuario a la página de inicio de sesión o a otra página
        navigate("/"); // Cambia la ruta según sea necesario
    };

    return (
        <header className="flex justify-between content-center bg-green-700 p-3">
            <div>
                <h1 className="text-2xl">Api Rest</h1>
            </div>
            <nav className="flex justify-center items-center gap-6 text-xl">
                <Link to="/product">ListaProductos</Link>
                <Link to="/create">Crear Producto</Link>
                <Link to="/profile">Perfil</Link>
                <button onClick={handleLogout} className="">
                    Cerrar Sesión
                </button>
            </nav>
        </header>
    )
}
export default Header;