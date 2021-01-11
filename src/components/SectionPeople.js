import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { EndpointsContext } from '../context/EndpointsContext';
import ListPeople from './ListPeople';

const SectionPeople = () => {


    const [ people, setPeople ] = useState([]);

    const { url } = useContext(EndpointsContext); 
    
    useEffect(() => {
        const getAPI = async () => {
            const res = await fetch(`${url}people`);
            const data = await res.json();
            setPeople(data);
        }
        getAPI();        
    }, [url]); 



    const showPeople = 
        people.map((item) => 
            <ListPeople 
                key={item.id} 
                name={item.name}
                age={item.age}                                  
                gender={item.gender}                 
                id={item.id}        
            />
        );

    return (
        <>
            <div className="container">
                <div className="row">
                    {showPeople}                                        
                </div>
                <Link to="/" className=" m-5 btn btn-primary">Back</Link>
            </div>
        </>
    );
}
 
export default SectionPeople;





       
    