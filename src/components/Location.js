import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { EndpointsContext } from '../context/EndpointsContext';
import Images from '../data/film';


const Location = ({ id }) => {
    const [ location, setLocation ] = useState({});
    const [ images, setImages ] = useState('');        
    const { url } = useContext(EndpointsContext);    

    const URLID = `${url}locations/${id}`;
    
    useEffect(() => {
        const getAPI = async () => {
            const res = await fetch(URLID);
            const data = await res.json();
            setLocation(data);
            setImages(Images.filter((item) => item.id === id).map(({image}) => image));
        }
        getAPI();
    }, [url, id, URLID]);    
    
    const { 
        name,
        climate,
        terrain,
        surface_water
    } = location;

    return (
        <>
        <div className="container">
            <div className="jumbotron">
                <div className="row">
                    {/* <div className="col-md-4">
                        <img src={images[0]} alt={title} width="100%" />                
                    </div>         */}
                    <div className="col">        
                        <h1 className="display-3">{name}</h1>
                        <p className="lead mt-4"> climate: {climate}</p>
                        <hr className="my-4" />
                        <p className="lead">Terrain: {terrain}</p>
                        <p className="lead">Surface: {surface_water}</p>                        
                        
                        <hr className="my-4" />                        
                    </div>
                </div>
                <Link to="/locations" className="btn btn-primary btn-large">
                    Back
                </Link>
            </div>
        </div>
        </>
            
    );
}
 
export default Location;






    
    

 