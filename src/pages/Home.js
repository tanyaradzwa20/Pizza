import React from 'react'
import {Link} from "react-router-dom"
import '../styles/Home.css'

function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${process.env.PUBLIC_URL+"images/antonios13.jpg"})`} }>
            <div className="headerContainer">
                <h1>Tanya's Pizza</h1>
                <a href="/menu">PIZZA TO FIT ANY TASTE</a>
                <Link to="/menu">
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}


export default Home
