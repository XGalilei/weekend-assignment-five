import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Comments() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [comments, setComments] = useState('');

    const handleNext = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_COMMENTS',
            payload: {
                comments: comments
            }
        });
        history.push('/review');
    }

    return <div>
        <form onSubmit={handleNext}>
            <p>Any comments you'd like to leave?</p>
            <input 
            value={comments}
            onChange={(event) => setComments(event.target.value)}
            />
            <button>Next</button>
        </form>
    </div>;
}

export default Comments;