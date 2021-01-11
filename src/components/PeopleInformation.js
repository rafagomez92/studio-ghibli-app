import { useEffect, useContext, useState } from 'react';
import { EndpointsContext } from '../context/EndpointsContext';
import Character from '../data/people';


const PeopleInformation = ({ id }) => {

    const [ character, setCharacter ] = useState({});
    const [ images, setImages ] = useState('');        
    const { url } = useContext(EndpointsContext);    
    
    const URLID = `${url}people/${id}`;

    useEffect(() => {
        const getAPI = async () => {
            const res = await fetch(URLID);
            const data = await res.json();
            setCharacter(data);
            setImages(Character.filter((item) => item.id === id).map(({image}) => image));
        }
        getAPI();
    }, [url, id, URLID]);            

    const { 
        name,
        gender,
        age,
        eye_color,
        hair_color        
    } = character;
    
    return (
        <>
        <div className="container">
            <div className="jumbotron">
                {/* <div className="row"> */}
                    {/* <div className="col-md-4">
                        <img src={images[0]} alt={name} width="100%" />                
                </div>         */}
                    <div className="col">        
                        <h1 className="display-3">{name}</h1>                        
                        <p className="lead">Gender: {gender}</p>
                        <p className="lead">Age: {age}</p>                        
                        <p className="lead">Eye color: {eye_color}</p>                        
                        <p className="lead">Hair color: {hair_color}</p>                        
                        <hr className="my-4" />                                                                        
                    </div>
                </div>
            </div>
        {/* </div> */}
        </>
            
    );
}


export default PeopleInformation;