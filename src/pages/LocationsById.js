import Location from "../components/Location"

const LocationsById = (props) => {

    const { id } = props.match.params;       

    return (
        <>
         <Location id={id} />
        </>
    );
}
 
export default LocationsById;