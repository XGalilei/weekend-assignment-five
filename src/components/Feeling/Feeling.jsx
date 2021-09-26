import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import { useDispatch } from 'react-redux';

function Feeling() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState(0);

    const handleNext = (event) => {
        event.preventDefault();
        
        console.log('Feeling');
        dispatch({
            type: 'SET_FEELING',
            payload: {
                feeling: feeling
            }
        });

        history.push('/understanding');
    };

    return <div>
        <form onSubmit={handleNext}>
            <p>How are you feeling today?</p>
            <input
            required
            type="number"
            max={5}
            min={1}
            value={feeling}
            onChange={(event) => setFeeling(event.target.value)}
            />
            <button>Next</button>
        </form>
    </div>;

}

export default Feeling;