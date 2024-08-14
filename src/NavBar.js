

function NavBar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container d-flex justify-content-left">
                <a className="navbar-brand fs-4 text-center text-primary" href="/">
                        <img src="https://cdn-icons-png.flaticon.com/128/188/188987.png"
                            alt="Logo"
                            width="40"
                            height="40"
                        className="d-inline-block align-text-bottom" />
                    Pokemon
                </a>
                <div className="navbar-nav">
                    <a className="nav-link active text-primary" aria-current="page" href="https://www.pokemon.com/us">Pokemon Website</a>
                </div>
            </div>
    </nav>
    )
    
}


export default NavBar;