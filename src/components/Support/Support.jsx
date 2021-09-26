import {useHistory} from 'react-router-dom';

function Support() {

    const history = useHistory();

    const handleNext = (event) => {
        event.preventDefault();

        history.push('/comments');
    }

    return <div><form onSubmit={handleNext}>
        <p>Gotta get that support!</p>
        <button>Next</button>
        </form></div>
}

export default Support;