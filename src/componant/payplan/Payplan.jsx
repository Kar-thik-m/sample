import Paystyle from "../payplan/Payplan.module.css";
import { Payplan } from "./PayplanData.js";

const Payplans = () => {
    return (
        <div id="pay" className={Paystyle.cardwhole}>
            <div className={Paystyle.title}>
                <span>READY TO START
                    YOUR JOURNEY
                </span>
            </div>
            {Payplan.map((p) => (
                <div key={p.key} className={Paystyle.carts}>
                    <div className={Paystyle.icon}>
                        <img className={Paystyle.image} src={p.Icon}></img>
                    </div>
                    <div className={Paystyle.plantype}>
                        {p.PlanType}
                    </div>
                    <div className={Paystyle.amount}>
                        {p.amount}
                    </div>
                    <div className={Paystyle.details}>
                        <div>
                            <i className="fa fa-ticket" aria-hidden="true"><span style={{ marginLeft: "10px" }}>{p.planone}</span></i>

                        </div>
                        <div>
                            <i className="fa fa-ticket" aria-hidden="true"><span style={{ marginLeft: "10px" }}>{p.plantwo}</span></i>

                        </div>
                        <div>
                            <i className="fa fa-ticket" aria-hidden="true"><span style={{ marginLeft: "10px" }}>{p.planthree}</span></i>

                        </div>
                        <div>
                            see more details

                        </div>

                    </div>
                    <div className={Paystyle.joinbutton}>
                        <button>Join me</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Payplans;
