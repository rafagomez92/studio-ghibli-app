import { Link } from "react-router-dom"

const ListFilms = ({ title, director, description, id }) => {
        
    return (
    <div className="col-md-4 text-left mt-5">                    
        <div className="card shadow bg-primary text-white mb-3" style={{maxWidth: "20rem"}}>
            <div className="card-header bg-primary text-white">{director}</div>
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <p className="card-text mt-3">{description.substr(0,100)}...</p>
            </div>
            <div className="card-footer">
                <Link to={`/film/${id}`} className="btn btn-secondary btn-sm" >
                    Details
                </Link>                
            </div>
        </div>                
    </div>
    );
}
 
export default ListFilms;