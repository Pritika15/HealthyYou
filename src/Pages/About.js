import { Link } from "react-router-dom";
export default function About(props){
    return(
        <div>
            <div>
                <h1>
                    <Link to="/login">Login</Link>
                </h1>
                <br>
                
                </br>
                <h1>
                    <Link to="/signup">SignUp</Link>
                </h1>
            </div>
            <br>
            </br>
            <br>
            </br>

            <h2>
                {props.name ? `Welcome- ${props.name}` : "Login please"}
            </h2>
        </div>
    );
}