import axios from 'axios';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Review() {

    const history = useHistory();
    const formInfo = useSelector(store => store);

    const handleNext = (event) => {
        event.preventDefault();

        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: formInfo.feelingState.feeling,
                understanding: formInfo.understandingState.understanding,
                support: formInfo.supportState.support,
                comments: formInfo.commentState.comments
            }
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log('Error:', error);
        });

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