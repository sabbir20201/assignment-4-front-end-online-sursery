import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center">
            <p>page not found : 404</p>
            <h1>GO to Home page <Link to="/" className="text-blue-700">click here</Link></h1>
        </div>
    );
};

export default ErrorPage;