import {useHistory} from 'react-router-dom';

function Comments() {
    const history = useHistory();

    const handleNext = (event) => {
        event.preventDefault();
        history.push('/');
    }

    return <div>
        <form onSubmit={handleNext}>
            <button>Next</button>
        </form>
    </div>;
}

export default Comments;