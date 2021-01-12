import PeopleInformation from "../components/PeopleInformation"

const PeopleById = (props) => {

    const { id } = props.match.params;       

    return (
        <>        
        <div className="container text-center mt-5">
                <h1>Character</h1>                
            </div>
        <PeopleInformation id={id} />
        </>
    );
}
 
export default PeopleById;