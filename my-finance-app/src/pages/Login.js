import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';


function Login({onLogin}) {

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        onLogin();
        navigate("/");
    }

    return (
        <div className="login-container">
            <h2> Login </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )


};

export default Login;