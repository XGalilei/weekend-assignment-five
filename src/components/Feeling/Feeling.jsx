function Feeling() {

    const handleNext = () => {
        console.log('Feeling');
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