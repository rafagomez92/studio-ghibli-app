import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="mt-5">
                    <h1 className="display-4">¡Oh no!</h1>
                    <h2 className="display-4">Page not found (Error 404)</h2>                
                    <Link className="btn btn-primary mt-5" to="/">
                        <h3 className="text-white">Home</h3>
                    </Link>                                                            
                </div>
            </div>
        </div>
    </div>        
    );
}
 
export default NotFound;