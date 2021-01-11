import { createContext, useState } from "react"

export const EndpointsContext = createContext();



// En el provider se almacenará la información que contiene todos los endpoints y descripción
const EndpointsProvider = (props) => {

    const [ data, setData ] = useState([
        {endpoint: "films", description: "Information about all of the Studio Ghibli films."},
        {endpoint: "people", description: "Information about all of the Studio Ghibli people (characters, human and non-)."},
        {endpoint: "locations", description: "Information about all of the Studio Ghibli locations (lands, countries and places)."},
        {endpoint: "species", description: "Information about all of the Studio Ghibli species. (humans, animals, and spirits et al)."},
        {endpoint: "vehicles", description: "Information about all of the Studio Ghibli vehicles (cars, ships, and planes)."}
    ]);    
    
    

    const [url, setUrl] = useState('https://ghibliapi.herokuapp.com/');

    return (
        <EndpointsContext.Provider
            value={{                
                data,               
                url 
            }}
        >
            {props.children}
        </EndpointsContext.Provider>
    )
}

export default EndpointsProvider;