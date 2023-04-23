import { useSelector, useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';

function SupportThree () {
    const support = useSelector (store => store.support);
    const history = useHistory();
    const dispatch = useDispatch(); 

    const handleChange = (event) => {
        const action = { type: 'SET_SUPPORT', payload: event.target.value };
        dispatch(action); 
    }
    
    const nextPage = (event) => {
        event.preventDefault(); 
        if (support >= 0) {
            history.push('/step-4');
        } else {
        alert('Please rate your support level 0-5.')
    }
    }   

    
    return (
        <>
        <h3>How much do you feel supported?</h3>
        <form onSubmit={nextPage}>
            <input 
                id="support"
                value={support} 
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

export default SupportThree; 