import React from "react";
import Nav from "./nav/Nav";
import Program from "./nav/Program/Program";
import Promotion from "./promotion/Promotion";
import Payplans from "./payplan/Payplan";
import Tmonials from "./Testimonials";
import Last from "./Last/Last";

const Home = () => {
    return (

        <div>
            <Nav />
            <Program />
            <Promotion />
            <Payplans />
            <Tmonials />
            <Last />
        </div>

    );
}

export default Home;