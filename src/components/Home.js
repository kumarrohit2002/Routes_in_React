
import { Outlet } from "react-router-dom";

function Home(){
    return (
        
        <div className="text-center text-3xl p-5">
            <Outlet></Outlet>
            This is Home Page
        </div>
    );
}

export default Home;