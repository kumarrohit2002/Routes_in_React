import { useNavigate } from "react-router-dom";

function Support(){

    const navigate=useNavigate();
    function clickHandler(){
        navigate(-1);
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-center text-3xl p-5">This is Support Page</div>
            <div>
                <button onClick={clickHandler}
                className="text-center  w-48 p-3 bg-slate-800 text-white">
                    Go to Back 
                </button>
            </div>
        </div>
    );
}

export default Support;