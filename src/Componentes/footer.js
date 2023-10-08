import { Link } from "react-router-dom";
const Footer = () => {
    return(
        <footer className="bg-dark text-light">
<div className="container text-center text-md-start">
<div className="row text-center text-md-start">
    <div className="col-md-2 col-lg-3 col-xl-2 mx-auto mt-3">
        <img className='logo2 img-fluid' src={"https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/52640/optimized_large_thumb_stage.jpg"} alt='logo'/>
    </div>

    <div className="col-md-2 col-lg-3 col-xl-2 mx-auto mt-3">
        <h5>Contacto</h5>
        <hr className="mb-4"/>
        <p>
            +506 89 09 06 49
        </p>
        
        <p>
            maurenjimenezr@gmail.com
        </p>
        
    </div>

    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5>Acerca del sitio</h5>
        <hr className="mb-4"/>
        <p>Creado para que los artistas tengan un espacio para mostrar sus obras al mundo.</p>
    </div>
    
    <hr className="mb-4"/>
    <div>
        <div className="redes">
            <Link className="red" to={"https://www.linkedin.com/in/maureenjimenezr-full-stack-developer/"}>
                <h4 className="linkedin">in</h4>
            </Link>
            <Link className="red" to={"https://github.com/MaureenJR"}>
                
            </Link>
        </div>
        <div className="text-center mb-2">
            <p className="derechos">2023 © ChiaraC | MaureenJR | MonicaA | MarieA | CristhelPB | JennyRC Todos los derechos reservados</p>
        </div>
    </div>
</div>
</div>
</footer>
);
} 

export default Footer;