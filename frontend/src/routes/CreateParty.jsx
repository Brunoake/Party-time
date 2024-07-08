import partyFetch from '../axios/config'

import { useState, useEffect } from 'react'

import {useNavigate} from "react-router-dom"

import "./Form.css"

const CreateParty = () => {
  const [services, setServices] = useState([])
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [descprition, setDescription] = useState("")
  const [budget, setBudget] = useState(0)
  const [image, setImage] = useState("")
  const [partyService, setPartyService] = useState([])

  // Load services
  useEffect(() => {

    const loadServices = async () => {
      const res = await partyFetch.get("/services")

      
      setServices(res.data)
    
    }

    loadServices()

  }, [])

  // add ou remove
  const handleServices = (e) => {
    const checked = e.target.checked
    const value = e.target.value

    const filteredService = services.filter((s) => s._id === value)

    console.log(filteredService)

    
    if(checked) {
      setPartyService((services) => [...services, filteredService[0]])
    }else {
      setPartyService((services) => services.filter((s) => s._id !== value))
    }

    console.log(partyService)
  }

  // Criando nova party
  const createParty = (e) => {
    e.preventDefault();
    
    const party = {
      title,
      author,
      descprition,
      budget,
      image,
      services: partyService,
    }

   
  }


  return (
    <div className='form-page'>
      <h2>Crie seua próxima festa</h2>
      <p>Defina o seu orçamento e escolha os serviços</p>
      <form onSubmit={(e) => createParty(e)}>
        <label >
          <span>Nome da festa:</span>
          <input 
          type="text"
          placeholder='Seja criativo...'
          required 
          onChange={(e) => setTitle(e.target.value)}
          value={title}/>
        </label>
        <label >
          <span>Anfitrião:</span>
          <input 
          type="text"
          placeholder='Quem está dando a festa?'
          required 
          onChange={(e) => setAuthor(e.target.value)}
          value={author}/>
        </label>
        <label >
          <span>Descrição:</span>
          <textarea
          placeholder='Conte mais sobre a festa...'
          required
          onChange={(e) => setDescription(e.target.value)}
          value={descprition}
          >
           </textarea>
        </label>
        <label >
          <span>Orçamento:</span>
          <input 
          type="number"
          placeholder='Quanto você pretendi investir'
          required 
          onChange={(e) => setBudget(e.target.value)}
          value={budget}/>
        </label>
        <label >
          <span>Image</span>
          <input 
          type="text"
          placeholder='Insira a URL de uma imagem'
          required 
          onChange={(e) => setImage(e.target.value)}
          value={image}/>
        </label>
        <div>
          <h2>Escolha os serviços</h2>
          <div className="services-container">
         
           {services.length > 0 && services.map((service) => (
            <div className="service" key={service._id}>
              <img src={service.image} alt={service.name} />
              <p className="serivce-name">{service.name}</p>
              <p className="service-price">R${service.price}</p>
              <div className="checkbox-container">
                <input type="checkbox" value={service._id} onChange={(e) => handleServices(e)}/>
                <p>Marque para solicitar</p>
              </div>
            </div>
           ))}
          </div>
        </div>
        <input type="submit" value="Criar festa" className='btn'/>
      </form>
    </div>
  )
}

export default CreateParty