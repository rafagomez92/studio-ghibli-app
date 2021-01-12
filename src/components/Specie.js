import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { EndpointsContext } from '../context/EndpointsContext';
import Images from '../data/film';

const Specie = ({ id }) => {

    const [ specie, setSpecie ] = useState({});
    const [ images, setImages ] = useState('');        
    const { url } = useContext(EndpointsContext);    

    const URLID = `${url}species/${id}`;    

    useEffect(() => {
        const getAPI = async () => {
            const res = await fetch(URLID);
            const data = await res.json();
            setSpecie(data);
            setImages(Images.filter((item) => item.id === id).map(({image}) => image));
        }
        getAPI();
    }, [url, id, URLID]); 
        
    const { 
        classification, 
        name,
        eye_colors,
        hair_colors
    } = specie;
    
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
                        <p className="lead mt-4">Classification: <span className="font-weight-bold">{classification}</span></p>
                        <hr className="my-4" />
                        <p className="lead">eye colors: {eye_colors}</p>
                        <p className="lead">hair colors: {hair_colors}</p>
                        <hr className="my-4" />   
                        <Link to="/species" className="btn btn-primary btn-large">
                            Back
                        </Link>                     
                    </div>
                </div>
            </div>
        </div>
        </>
            
    );
}
 
export default Specie;