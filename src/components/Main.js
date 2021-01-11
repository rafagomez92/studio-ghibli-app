import Section from "./Section";
import { useContext } from 'react';
import { EndpointsContext } from '../context/EndpointsContext';

const Main = () => {

    const { data } = useContext(EndpointsContext);    
            
    const endpoints = data.map((item, idx) => 
        <Section title={item.endpoint} description={item.description} key={idx} />
    )

    return (
        <>
            <div className="jumbotron">
                <div className="container">
                    <img 
                        src="https://taniarascia.github.io/sandbox/ghibli/logo.png"
                        alt="logo"   
                        width="15%"
                    />            
                    <p className="lead mt-5">                
                        The <span className="font-weight-bold">Studio Ghibli</span> API catalogs the people, places, and things found in the worlds of Ghibli.
                    </p>
                    <hr className="my-5" />                        
                    <div className="row justify-content-center">
                        {endpoints}
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Main;