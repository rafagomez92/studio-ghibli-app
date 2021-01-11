import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { EndpointsContext } from '../context/EndpointsContext';
import ListVehicle from './ListVehicle';

const SectionVehicle = () => {
    const [ vehicle, setVehicle ] = useState([]);
    const { url } = useContext(EndpointsContext); 
    
    useEffect(() => {
        const getAPI = async () => {
            const res = await fetch(`${url}vehicles`);
            const data = await res.json();
            setVehicle(data);
        }
        getAPI();        
    }, [url]); 



    const showVehicle = 
        vehicle.map((item) => 
            <ListVehicle
                key={item.id} 
                name={item.name}
                description={item.description}                                                  
                id={item.id}        
            />
        );

    return (
        <>
            <div className="container">
                <div className="row">
                    {showVehicle}                                        
                </div>
                <Link to="/" className=" m-5 btn btn-primary">Back</Link>
            </div>
        </>
    );
}
    
 
export default SectionVehicle;