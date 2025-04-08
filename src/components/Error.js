import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="error">
            <div className="error-message">
                <h2>Uh oh!</h2>
                <h2>{err.status}: {err.statusText} 😞</h2>
            </div>
        </div>
    )
}

export default Error;