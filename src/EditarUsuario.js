import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const EditarUsuario= () => {
    const {id} = useParams();

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [foto, setFoto] = useState("");

    const navigate = useNavigate();


    useEffect(() =>{
        axios.get("http://localhost:8000/api/miObra/"+ id,{withCredentials:true})
            .then(res=>{
                
                setNombre(res.data.nombre);
                setApellido(res.data.apellido);
                setEmail(res.data.email);
                setPassword(res.data.password);
                setFoto(res.data.foto);
                
            })
            .catch(err=> console.log(err));
    }, [id])

    const editarUsuario = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/miObra/" +id, {
            nombre,
            apellido,
            email,
            password,
            foto,
        },{withCredentials:true})
            .then(res => navigate("/"))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h3>Edital Perfil</h3>
            <form onSubmit={editarUsuario}>
                <div >
                    <label>Nombre:</label>
                    <input type="text" name="nombre" value={nombre}  onChange={e=> setNombre(e.target.value)} />
                </div>
                <div>
                <label>Apellido</label>
                    <input type="text" name="apellido" value={apellido} onChange={e=> setApellido(e.target.value)} />
                </div>
                
                <div>
                    <label>Email </label>
                    <textarea name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password </label>
                    <textarea name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label>Foto </label>
                    <textarea name="foto" value={foto} onChange={e => setFoto(e.target.value)}/>
                </div>
                    
                <input type="submit"  className="btn btn-success mt-3 " value="Edit Pet"  />
            </form>
        </div>
    )

}

export default EditarUsuario;