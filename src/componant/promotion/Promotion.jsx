
import Prostyle from "../promotion/Promotion.module.css"
import im1 from "../../assets/image1.png"
import im2 from "../../assets/image2.png"
import im3 from "../../assets/image3.png"
import im4 from "../../assets/image4.png"


const Promotion = () => {
    return (
        <div id="promotion" className={Prostyle.wholebox}>
            <div className={Prostyle.left}>
                <div className={Prostyle.one}>
                    <img src={im1}></img>
                </div>
                <div className={Prostyle.two}><img src={im2}></img></div>
                <div className={Prostyle.t3}><img src={im3}></img></div>
                <div className={Prostyle.f4}><img src={im4}></img></div>
            </div>
            <div className={Prostyle.right}>
                <div className={Prostyle.title}>
                    <h1>what are you missing that?</h1>
                </div>
                <div className={Prostyle.somedetails}>
                    <span>  <i className="fa fa-ticket" aria-hidden="true"><span style={{ marginLeft: "10px" }}>Over all 40+ coaches</span></i></span>
                    <span> <i className="fa fa-ticket" aria-hidden="true"><span style={{ marginLeft: "10px" }}>4 free program for new member</span></i></span>
                    <span><i className="fa fa-ticket" aria-hidden="true"><span style={{ marginLeft: "10px" }}>inculeding thai massage</span></i></span>
                    <span> <i className="fa fa-ticket" aria-hidden="true"><span style={{ marginLeft: "10px" }}>Best gym around this place</span></i></span>
                    <span><i className="fa fa-ticket" aria-hidden="true"><span style={{ marginLeft: "10px" }}>achivement  some records </span></i></span>
                </div>
            </div>
        </div>
    );
}
export default Promotion;