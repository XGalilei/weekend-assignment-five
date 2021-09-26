import {useHistory} from 'react-router-dom';

function Understanding() {

    const history = useHistory();

    const handleNext = (event) => {
        event.preventDefault();

        history.push('/support');
    }

    return <div>
        <form onSubmit={handleNext}>
        <p>Understand Me!</p>
        <button>Next</button>
        </form>
    </div>;
}
export default Understanding;