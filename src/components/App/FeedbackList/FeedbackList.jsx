import axios from 'axios'; 
import { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux'; 


function FeedbackList() {

    const dispatch = useDispatch();
    const feedback = useSelector(store => store.feedback); 
    
    useEffect(() => {
        fetchFeedbackList();
    }, []);
    
    const fetchFeedbackList = () => {
        axios.get('/feedback').then(response => {
            dispatch({ type: 'SET_FEEDBACK_LIST', payload: response.data });
        }).catch(error => {
            alert('Something went wrong.')
        })
    }

    return (
        <>
        <h3>Feedback Submission</h3>
        {
            feedback.map(feedback => (
                <div key={feedback.id}>
                    <p>Feeling: {feedback.feeling}</p>
                    <p>Understanding: {feedback.understand}</p>
                    <p>Support: {feedback.support}</p>
                    <p>Comments: {feedback.comment}</p>
                </div>
            ))
        }
        </>
    )
}

export default FeedbackList