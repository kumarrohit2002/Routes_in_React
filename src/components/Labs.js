
import { useNavigate } from "react-router-dom";
function Labs(){
    const navigate = useNavigate();

    function clickHandler(){
        navigate('/about');
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-center text-3xl p-5">This is Labs Page</div>
            <div>
                <button onClick={clickHandler}
                className="text-center  w-48 p-3 bg-slate-800 text-white">
                    Move to About Page
                </button>
            </div>
        </div>
    )
}

export default Labs;