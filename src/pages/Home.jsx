import {useNavigate} from 'react-router-dom';

function Home(){
    const navigate = useNavigate();
    return (
        <div>
            <h1>Welcome to our website!</h1>
            <p>You can click these buttons to navigate to some funny exercises:</p>
            <button onClick={() => navigate("/exercises/start")}>Start Exercises</button>
        </div>
    );
}
export default Home;