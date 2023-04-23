import { useHistory } from 'react-router-dom';

function SuccessPage() {
    const history = useHistory();

    const handleNewSurvey = () => {
        history.push('/');
    };

    return (
        <>
            <h3>SUCCESSFUL SUBMISSION</h3>
            <button onClick={handleNewSurvey}>Take Another Survey</button>
        </>
    );
}

export default SuccessPage;