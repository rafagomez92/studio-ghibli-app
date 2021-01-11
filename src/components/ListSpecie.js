import { Link } from "react-router-dom";

const ListSpecie = ({ name, classification, id }) => {
        
    return (
    <div className="col-md-4 text-left mt-5">                    
        <div className="card shadow bg-primary text-white mb-3" style={{maxWidth: "20rem"}}>            
            <div className="card-body">
                <h6 className="card-title">{name}</h6>
                <p className="card-text mt-3">{classification}</p>
            </div>
            <div className="card-footer">
                <Link to={`/specie/${id}`} className="btn btn-secondary btn-sm" >
                    Details
                </Link>                
            </div>
        </div>                
    </div>
    );
}
 
export default ListSpecie;