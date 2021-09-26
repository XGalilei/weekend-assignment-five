import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Review() {

    const history = useHistory();
    const formInfo = useSelector(store => store);

    const handleNext = (event) => {
        event.preventDefault();

        history.push('/');

    };

    return <div>
        <form onSubmit={handleNext}>
            <p>Feelings: {formInfo.feelingState.feeling}</p>
            <p>Understanding: {formInfo.understandingState.understanding}</p>
            <p>Support: {formInfo.supportState.support}</p>
            <p>Comments: {formInfo.commentState.comments}</p>
            <button>Submit</button>
        </form>
    </div>;
}

export default Review;