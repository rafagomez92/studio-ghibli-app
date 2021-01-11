import Film from "../components/Film"

const FilmsById = (props) => {

    const { id } = props.match.params;       

    return (
        <>
         <Film id={id} />
        </>
    );
}
 
export default FilmsById;