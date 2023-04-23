import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; 
import axios from 'axios'; 

function Review () {
    const dispatch = useDispatch();
    const history = useHistory(); 

    const feeling = useSelector(store => store.feeling);
    const understand = useSelector(store => store.understand);
    const support = useSelector(store => store.support);
    const comment = useSelector(store => store.comment);

    const sendToServer = () => {
        axios.post('/feedback', {
            feeling: feeling,
            understanding: understand,
            support: support,
            comments: comment,
        }).then(response => {
            dispatch({ type: 'CLEAR_FORM' });
            history.push('/feedback-list')
        }).catch(error => {
            alert('Something went wrong. Please try again');
            console.log(error); 
        })
    }

    return (
        <>
            <h3>REVIEW YOUR FEEDBACK</h3>
            <div>Feeling: {feeling} </div>
            <div>Understanding Level: {understand} </div>
            <div>Support Level: {support} </div>
            <div>Comments: {comment} </div>
            <button onClick={sendToServer}>Submit</button>
        </>
    )
}

export default Review