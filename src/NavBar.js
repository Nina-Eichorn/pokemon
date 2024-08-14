

function NavBar() {
    return (
        <nav className="navbar bg-primary-subtle">
            <div className="container">
                <a className="navbar-brand fs-4 text-primary" href="/">
                        <img src="https://cdn-icons-png.flaticon.com/128/188/188987.png"
                            alt="Logo"
                            width="40"
                            height="40"
                        className="d-inline-block align-text-bottom" />
                    Pokemon
                </a>
                <a className="navbar-brand active text-primary align-text-bottom" aria-current="page" href="https://www.pokemon.com/us">Pokemon Website</a>
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
    </nav>
    )
    
}


export default NavBar;