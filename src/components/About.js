import { useNavigate } from "react-router-dom";

function About(){
    const navigate=useNavigate();
    function clickHandler(){
        navigate('/labs');
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-center text-3xl p-5">This is About Page</div>
            <div>
                <button onClick={clickHandler}
                className="text-center  w-48 p-3 bg-slate-800 text-white">
                    Move to Labs Page
                </button>
            </div>
        </div>
    );
}

export default About;