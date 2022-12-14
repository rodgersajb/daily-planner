import "./Nav.scss";
import { useState, useEffect } from "react";

const Nav = () => {

    const [date, setDate] = useState([])

    useEffect(() => {

        
    
            let theDate = new Date();
            setDate(theDate)
        
        
    }, [])
    

    console.log(date)
    
    return (
        <>
        <div className="nav-wrapper">
            <nav>
            <div className="burger">
                <span></span>
                <span></span>
                <span></span>

            </div>

            <h1>Daily Planner</h1>
            <p className="date">

                {date.toLocaleString()}
                
            </p>
            </nav>
        </div>
        </>
    )
}

export default Nav;