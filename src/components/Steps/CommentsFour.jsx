import { useSelector, useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';

function CommentsFour() {
    const comment = useSelector (store => store.comment);
    const history = useHistory();
    const dispatch = useDispatch(); 

    const handleChange = (event) => {
        const action = { type: 'SET_COMMENT', payload: event.target.value };
        dispatch(action); 
    }

    const nextPage = (event) => {
        event.preventDefault(); 
        history.push('/review');
    }

    return (
        <>
            <h3>Please leave a comment</h3>
            <form onSubmit={nextPage}>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={handleChange}
                    rows="5"
                    cols="30"
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

export default CommentsFour; 