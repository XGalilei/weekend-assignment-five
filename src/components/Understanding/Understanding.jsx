import { useDispatch } from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Understanding() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [understanding, setUnderstanding] = useState(0);

    const handleNext = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: {
                understanding: understanding
            }
        });

        history.push('/support');
    }

    return <div>
        <form onSubmit={handleNext}>
        <p>How Well Are You Understanding the Concept?</p>
        <input
        required
        type="number"
        max={5}
        min={1}
        value={understanding}
        onChange={(event) => setUnderstanding(event.target.value)}
        />
        <button>Next</button>
        </form>
    </div>;
}
export default Understanding;