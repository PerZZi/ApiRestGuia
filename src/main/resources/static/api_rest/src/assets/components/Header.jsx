
const Header = () => {

    return(
        <header className="flex justify-between content-center bg-green-700 p-3">
            <div>
            <h1 className="text-2xl">ApiRest</h1>
            </div>
        <nav className="flex justify-center gap-6 text-xl">
            <a href="">Products</a>
            <a href="">Profile</a>
            <a href="">Log out</a>
        </nav>
        </header>
    )
}
export default Header;