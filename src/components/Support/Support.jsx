import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Support() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [support, setSupport] = useState(0);

    const handleNext = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_SUPPORT',
            payload: {
                support: support
            } 
        });
        history.push('/comments');
    }

    return <div><form onSubmit={handleNext}>
        <p>Gotta get that support!</p>
        <input
        required
        type="number" 
        max= {5}
        min= {1}
        value={support}
        onChange={(event) => setSupport(event.target.value)}
        />
        <button>Next</button>
        </form></div>
}

export default Support;