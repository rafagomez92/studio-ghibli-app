import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { EndpointsContext } from '../context/EndpointsContext';
import ListSpecie from './ListSpecie';

const SectionSpecie = () => {
    
    const [ specie, setSpecie ] = useState([]);
    const { url } = useContext(EndpointsContext); 
    
    useEffect(() => {
        const getAPI = async () => {
            const res = await fetch(`${url}species`);
            const data = await res.json();
            setSpecie(data);
        }
        getAPI();        
    }, [url]); 



    const showSpecie = 
        specie.map((item) => 
            <ListSpecie
                key={item.id} 
                name={item.name}
                classification={item.classification}                                                  
                id={item.id}        
            />
        );

    return (
        <>
            <div className="container">
                <div className="row">
                    {showSpecie}                                        
                </div>
                <Link to="/" className=" m-5 btn btn-primary">Back</Link>
            </div>
        </>
    );
}
 
export default SectionSpecie;





 
