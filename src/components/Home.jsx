import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"; 

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Many problems only one solution!!</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>
                We r ready to help u in any situation
                We r the best company in the whole India
                Planning to go and shatter the foreign economy too!!
            </p>
        </div>

    </div>
 
    <div className="home3" id='about'>
        <div>
            <h1>About Ussss!</h1>
            <p>Blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah 
            </p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>

            <article>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>

                </div>

                <div style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>

                </div>
                <div style={{animationDelay:"0.7s"}}>
                    <AiFillYoutube />
                    <p>Youtube</p>

                </div>
                <div style={{animationDelay:"1s"}}>
                    <AiFillInstagram />
                    <p>Instagram</p>

                </div>
            </article>
        </div>
    </div>
    
    </>
  )
}

export default Home