import { Link } from "react-router-dom";

const Section = ({ title, description }) => {

    return (        
        <div className="col-md-4 mt-3">                        
            <div className="card text-white bg-primary mb-3" style={{maxWidth: "20rem"}}>                        
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>   
                    <p className="card-text">
                        {description}
                    </p>
                    <Link to={`/${title}`} className="btn btn-secondary btn-sm">
                        Go
                    </Link>
                </div>
            </div>                                                     
        </div>                                                
    );
} 
export default Section;