import partyFetch from "../axios/config"
import { useState, useEffect } from "react"

import { useParams, Link, useNavigate } from "react-router-dom"

import useToast from '../Hook/useToast'

// CSS
import './party.css';

const Party = () => {
    const {id} = useParams()

    const [party, setParty] = useState(null);

    const navigate = useNavigate();

    // Load Party
    useEffect(() => {
        const loadParty = async() => {
            const res = await partyFetch.get(`/parties/${id}`)

            console.log(res.data)

            setParty(res.data)
        }
        loadParty()
    }, []);

    // Delete
    const handleDelete = async () => {

        const res = await partyFetch.delete(`/parties/${id}`)

        if(res.status === 200) {
            navigate("/");
            useToast(res.data.msg);
        }
    }

    if(!party) return <p>Carregando...</p>

  return (
    <div className="party">
        <h1>{party.title}</h1>
        <div className="actions-container">
            <Link className="btn">Editar</Link>
            <button onClick={handleDelete} className="btn-seconder">Excluir</button>
        </div>
        <p>Orçamento: R${party.budget}</p>
        <h3>Serviços contratados: </h3>
        <div className="services-container">
            {party.services.map((service) => (
                <div className="service"key={service._id}>
                    <img src={service.image} alt={service.name} />
                    <p>{service.name}</p>
                </div>
            )) }
        </div>
    </div>
  )
}

export default Party