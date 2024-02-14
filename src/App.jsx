import React from "react";
import Nav from "./componant/nav/Nav.jsx";
import Program from "./componant/nav/Program/Program.jsx";
import Payplans from "./componant/payplan/Payplan.jsx";
import Promotion from "./componant/promotion/Promotion.jsx";
import TM from "./componant/testimonials/Testimonials.jsx";
import Last from "./componant/Last/Last.jsx";

const App =  () => {
  return (

    <div>
    <Nav />
    <Program />
    <Promotion />
    <Payplans />
     <TM />
     <Last />
    </div>

  );
}

export default App;