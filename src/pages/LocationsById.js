import Location from "../components/Location"

const LocationsById = (props) => {

    const { id } = props.match.params;       

    return (
        <>
        <div className="container text-center mt-5">
                <h1>Location</h1>
        </div>
        <Location id={id} />                
        </>
    );
}
 
export default LocationsById;