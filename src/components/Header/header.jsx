

function MyHeader(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-secondary d-flex justify-content-center align-items-center">
            <div className="container-fluid">
                <div className="collapse navbar-collapse d-flex justify-content-center align-items-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active d-flex text-white" aria-current="page" href="#">MyAgenda</a>
                            </li>  
                        </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default MyHeader;