import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { EndpointsContext } from '../context/EndpointsContext';
import ListLocations from './ListLocations';

const SectionLocation = () => {
    
    const [ location, setLocation ] = useState([]);
    
    const { url } = useContext(EndpointsContext); 
    console.log()
    
    useEffect(() => {
        const getAPI = async () => {
            const res = await fetch(`${url}locations`);
            const data = await res.json();
            setLocation(data);
        }
        getAPI();        
    }, [url]); 
    

    const showLocations = 
        location.map((item) => 
            <ListLocations 
                key={item.id} 
                name={item.name}
                climate={item.climate}                                  
                terrain={item.terrain}                 
                surface={item.surface_water}
                id={item.id}        
            />
        );

    return (        
        <>
            <div className="container">
                <div className="row">
                    {showLocations}                                        
                </div>
                <Link to="/" className=" m-5 btn btn-primary">Back</Link>
            </div>
        </>
        );    
}
 
export default SectionLocation;






    



