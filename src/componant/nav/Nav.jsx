import React from "react";
import Navmodule from "../nav/Nav.module.css"


const Nav = () => {
    return (
        <div id="nav" className={Navmodule.navbar}>
            <div className={Navmodule.left}>
                <div className={Navmodule.logo}>
                    <img src="https://cdn-icons-png.flaticon.com/128/13397/13397739.png"></img>
                    <div>YOUR CLUB</div>
                </div>
                <div className={Navmodule.navitem}>

                    <a href="#nav">Home</a>
                    <a href="#test">Testimonials</a>
                    <a href="#pay">Payplan</a>
                    <a href="#program">Programs</a>
                    <a href="#promotion"></a>
                </div>
                <div className={Navmodule.ad}>
                    <span><h5 >THE BEST FITNESS CLUB IN THE TOWN</h5></span>
                    <div></div>
                </div>
                <div className={Navmodule.pro}>
                    <h1>BEST SHAPE YOUR BODEY</h1>
                </div>
                <div className={Navmodule.ttext}>
                    <p>Come to join and make the PERFECT BODEY.</p>
                </div>
                <div className={Navmodule.score}>
                    <div >
                        <span>+140</span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span>+140</span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span>+140</span>
                        <span>FITNESS PROGRAMS</span>
                    </div>

                </div>
                <div className={Navmodule.b}>
                    <button>Get Started</button>
                    <button> Learn More</button>
                </div>

            </div>

            <div className={Navmodule.rightside}>
                <img src="https://fitclub-1my.pages.dev/static/media/hero_image_back.9f54bfba33048f4ca688.png"></img>
                <img src={"https://fitclub-1my.pages.dev/static/media/hero_image.e19ac0c6b1009c7280f5.png"}></img>

                <div className={Navmodule.Hrate}>
                    <span><i class="fa fa-heartbeat" aria-hidden="true" style={{ color: "red" }}></i></span>
                    <span > Heart Rate</span>
                    <span><h3>111bpm</h3></span>
                </div>
                <div className={Navmodule.calories}>
                    <span >Calories burned</span>
                    <span >220 kcal</span>
                </div>
                <div ></div>
            </div>
        </div>

    );
}

export default Nav;