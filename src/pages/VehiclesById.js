import Vehicle from "../components/Vehicle"

const VehiclesById = (props) => {

    const { id } = props.match.params;       

    return (
        <>
        <div className="container text-center mt-5">
                <h1>Vehicles</h1>
        </div>
        <Vehicle id={id} />                
        </>
    );
}
 
export default VehiclesById;