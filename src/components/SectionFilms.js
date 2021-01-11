import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { EndpointsContext } from '../context/EndpointsContext';
import ListFilms from './ListFilms';

const SectionFilms = () => {

    const [ films, setFilms ] = useState([]);

    const { url } = useContext(EndpointsContext); 
    
    useEffect(() => {
        const getAPI = async () => {
            const res = await fetch(`${url}films`);
            const data = await res.json();
            setFilms(data);
        }
        getAPI();        
    }, [url]);    
    
    const showFilms = 
        films.map((item) => 
            <ListFilms 
                key={item.id} 
                title={item.title}
                director={item.director}                                  
                description={item.description} 
                date={item.release_date}   
                id={item.id}        
            />
        );
    

    return (
        <>
            <div className="container">
                <div className="row">
                    {showFilms}                                        
                </div>
                <Link to="/" className=" m-5 btn btn-primary">Back</Link>
            </div>
        </>
    );
}
 
export default SectionFilms;