import PeopleInformation from "../components/PeopleInformation"

const PeopleById = (props) => {

    const { id } = props.match.params;       

    return (
        <>
         <PeopleInformation id={id} />
        </>
    );
}
 
export default PeopleById;