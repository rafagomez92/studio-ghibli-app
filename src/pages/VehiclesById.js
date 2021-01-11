import Vehicle from "../components/Vehicle"

const VehiclesById = (props) => {

    const { id } = props.match.params;       

    return (
        <>
         <Vehicle id={id} />
        </>
    );
}
 
export default VehiclesById;