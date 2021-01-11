import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { EndpointsContext } from '../context/EndpointsContext';
import Images from '../data/film';
const Vehicle = ({ id }) => {

    const [ vehicle, setVehicle ] = useState({});
    const [ images, setImages ] = useState('');        
    const { url } = useContext(EndpointsContext); 
    
    const [ piloto, setPiloto ] = useState({});
    const [ film, setFilm ] = useState({});

    const URLID = `${url}vehicles/${id}`;

    useEffect(() => {
        const getAPI = async () => {
            const res = await fetch(URLID);
            const data = await res.json();
            setVehicle(data);
            setImages(Images.filter((item) => item.id === id).map(({image}) => image));
        }
        getAPI();
    }, [url, id, URLID]);            

    const { 
        name,
        description,
        vehicle_class,
        length,        
        pilot,
        films
    } = vehicle;

    useEffect(() => {
        const getAPI = async () => {
            const res = await fetch(pilot);
            const data = await res.json();
            setPiloto(data);            
        }
        getAPI();
    }, [pilot]);


    useEffect(() => {
        const getAPI = async () => {
            const res = await fetch(films);
            const data = await res.json();
            setFilm(data);            
        }
        getAPI();
    }, [films]);

    const { gender, age } = piloto;
    const { title, director } = film;
    
    return (
        <>
        <div className="container">
            <div className="jumbotron">
                <div className="row">
                    {/* <div className="col-md-4">
                        <img src={images[0]} alt={name} width="100%" />                                        
                    </div>         */}
                    <div className="col">        
                        <h1 className="display-3">{name}</h1>
                        <p className="lead mt-4">{description}</p>
                        <hr className="my-4" />
                        <p className="lead">Class: {vehicle_class}</p>
                        <p className="lead">Length: {length}</p>                        
                        <hr className="my-4" /> 
                        <p className="lead">
                            Pilot: {piloto.name}
                        </p>
                        <p>
                            Age: {age}                           
                        </p>
                        <p>                            
                            Gender: {gender}
                        </p>
                        <hr className="my-4" /> 
                        <p className="lead">
                            Films:{title}
                        </p>  
                        <p>
                            Director: {director}
                        </p>
                        <hr className="my-4" />   
                        <Link to="/Vehicles" className="btn btn-primary btn-large">
                            Back
                        </Link>                     
                    </div>
                </div>
            </div>
        </div>
        </>
            
    );
}
 
export default Vehicle;