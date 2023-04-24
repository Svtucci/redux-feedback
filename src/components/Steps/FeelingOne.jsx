import { useSelector, useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';

function FeelingOne() {
    const feeling = useSelector(store => store.feeling); 
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (event) => {
        const action = { type: 'SET_FEELING', payload: event.target.value };
        dispatch(action); 
    }

    const nextPage = (event) => {
        event.preventDefault(); 
        if (feeling >= 0) {
            history.push('/step-2');
        } else {
        alert('Please rate your feelings 0-5.')
    }
    }    

    return (
        <>
        <h3>On a scale of 0-5, How are you feeling?</h3>
        <h5>0 being poor, 5 being great</h5>
        <form onSubmit={nextPage}>
            <input 
                id="feeling"
                value={feeling} 
                onChange={handleChange} 
                type="number"
                min={0}
                max={5} 
            />
            <br />
            <br />
            <input 
                type="submit" value="Next"
            />
        </form>
        </>
    )
}

export default FeelingOne; 