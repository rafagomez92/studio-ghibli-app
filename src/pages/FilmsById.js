import Film from "../components/Film"

const FilmsById = (props) => {

    const { id } = props.match.params;       

    return (
        <>
            <div className="container text-center mt-5">
                <h1>Film</h1>        
            </div>
        <Film id={id} />
        </>

    );
}
 
export default FilmsById;