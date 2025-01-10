
function MyFooter() {
    const MyStyle = {
        position: 'fixed',
        width: '100',
        bottom: '0'
    }
   
    return (
        <>
            <div className="container-fluid bg-secondary m-auto d-flex justify-content-center align-items-center fs-6 gap-3 p-2" style={MyStyle}>
                <h6><a className="text-white text-decoration-none" href="https://www.linkedin.com/in/natandspereira">Meu Linkedin</a></h6>
                <h6 className="text-white">Desenvolvido por Natan Pereira</h6>
                <h6><a className="text-white text-decoration-none" href="https://github.com/natandspereira">Meu Github</a></h6>
            </div>
        </>
    )
}

export default MyFooter;