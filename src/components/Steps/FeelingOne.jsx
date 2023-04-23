import { useSelector, useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';

function FeelingOne() {
    const feeling = useSelector(store => store.feeling); 
    const dispatch = useDispatch()
    const history = useHistory();

    const handleChange = (event) => {
        const action = { type: 'SET_FEELING', payload: event.target.value };
        dispatch(action); 
    }

    // const nextPage = (event) => {
    //     event.preventDefault(); 
    //     if (feeling > 0) {
    //         history.push('')
    //     }
    // }    

    return (
        <>
        <h3>How are you feeling?</h3>
        <form>
            <input 
                value={feeling} 
                onChange={handleChange} 
                type="number" />
            <input 
                type="submit" value="Next"/>
        </form>
        </>
    )
}

export default FeelingOne; 