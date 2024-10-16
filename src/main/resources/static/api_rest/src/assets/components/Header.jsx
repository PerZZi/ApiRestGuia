
const Header = () => {

    return(
        <header className="flex justify-between content-center bg-red-800 p-3">
            <div>
            <h1 className="text-3xl">Titulo</h1>
            </div>
        <nav className="flex justify-center gap-6 text-2xl">
            <a href="">Home</a>
            <a href="">Products</a>
            <a href="">Profile</a>
            <a href="">Log out</a>
        </nav>
        </header>
    )
}
export default Header;