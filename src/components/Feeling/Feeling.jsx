import {useHistory} from 'react-router-dom';

function Feeling() {

    const history = useHistory();

    const handleNext = (event) => {
        event.preventDefault();
        
        console.log('Feeling');

        history.push('/understanding');
    };

    return <div>
        <form onSubmit={handleNext}>
            <p>How are you feeling today?</p>
            <input type="number"></input>
            <button>Next</button>
        </form>
    </div>;

}

export default Feeling;