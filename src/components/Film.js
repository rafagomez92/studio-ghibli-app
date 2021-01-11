import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { EndpointsContext } from '../context/EndpointsContext';
import Images from '../data/film';
const Film = ({ id }) => {

    const [ film, setFilm ] = useState({});
    const [ images, setImages ] = useState('');        
    const { url } = useContext(EndpointsContext);    
    

    const URLID = `${url}films/${id}`;

    useEffect(() => {
        const getAPI = async () => {
            const res = await fetch(URLID);
            const data = await res.json();
            setFilm(data);
            setImages(Images.filter((item) => item.id === id).map(({image}) => image));
        }
        getAPI();
    }, [url, id, URLID]);            

    const { 
        description, 
        director, 
        producer, 
        release_date, 
        rt_score, 
        title,                
    } = film;


       
    
    return (
        <>
        <div className="container">
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-4">
                        <img src={images[0]} alt={title} width="100%" />                
                        
                    </div>        
                    <div className="col">        
                        <h1 className="display-3">{title}</h1>
                        <p className="lead mt-4">{description}</p>
                        <hr className="my-4" />
                        <p className="lead">Director: {director}</p>
                        <p className="lead">Producer: {producer}</p>
                        <p className="lead">
                            Age: {release_date}
                        </p>
                        <p className="lead">
                            Rating:&#9734;{rt_score}
                        </p>
                        <hr className="my-4" />   
                        <Link to="/films" className="btn btn-primary btn-large">
                            Back
                        </Link>                     
                    </div>
                </div>
            </div>
        </div>
        </>
            
    );
}
 
export default Film;