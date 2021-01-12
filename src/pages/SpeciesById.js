import Specie from "../components/Specie"

const SpeciesById = (props) => {

    const { id } = props.match.params;       

    return (
        <>
        <div className="container text-center mt-5">
                <h1>Specie</h1>                
            </div>
        <Specie id={id} />
        </>
    );
}
 
export default SpeciesById;