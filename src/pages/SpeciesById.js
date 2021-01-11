import Specie from "../components/Specie"

const SpeciesById = (props) => {

    const { id } = props.match.params;       

    return (
        <>
         <Specie id={id} />
        </>
    );
}
 
export default SpeciesById;