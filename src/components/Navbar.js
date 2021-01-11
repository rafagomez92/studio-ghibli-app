import { Link } from "react-router-dom";

function Navbar({title}) {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
            <Link to="/">
                <a className="navbar-brand" href="#!">
                    <h3 className="text-white">
                        {title}                        
                    </h3>
                </a>                
            </Link>
            </div>
        </nav>            
        </>
    )
}

export default Navbar;