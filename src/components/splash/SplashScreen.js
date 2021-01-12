import './spin.css';

const SplashScreen = () => {
    return (
        <div className="jumbotron">
                <div className="container mt-5">
                    <div className="row justify-content-center">
                    <img 
                            src="https://taniarascia.github.io/sandbox/ghibli/logo.png"
                            alt="logo"   
                            width="30%"
                            />                                 
                    </div>
                    <div className="row justify-content-center mt-5">
                            <div class="sk-chase mt-5">
                                <div class="sk-chase-dot"></div>
                                <div class="sk-chase-dot"></div>
                                <div class="sk-chase-dot"></div>
                                <div class="sk-chase-dot"></div>
                                <div class="sk-chase-dot"></div>
                                <div class="sk-chase-dot"></div>                            
                            </div>                            
                    </div>
            </div>
        </div>
    );
}
 
export default SplashScreen;