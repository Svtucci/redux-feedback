import { useSelector, useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';

function UnderStandTwo () {
const understand = useSelector (store => store.understand);
const history = useHistory();
const dispatch = useDispatch(); 

const handleChange = (event) => {
    const action = { type: 'SET_UNDERSTAND', payload: event.target.value };
    dispatch(action); 
}

const nextPage = (event) => {
    event.preventDefault(); 
    if (understand >= 0) {
        history.push('/step-3');
    } else {
    alert('Please rate your understanding 0-5.')
}
}   

    return (
        <>
        <h3>On a scale of 0-5, How well are you understanding the material?</h3>
        <h5>0 meaning you do not understand the material, 5 being you understand the material</h5>
        <form onSubmit={nextPage}>
            <input 
                id="understand"
                value={understand} 
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

export default UnderStandTwo; 