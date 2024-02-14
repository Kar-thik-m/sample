
import Pstyle from "../Program/Program.module.css";
import { programsData } from "./ProgramData";

const Program = () => {
    return (
        <div id="program" className={Pstyle.total}>
            <div className={Pstyle.g}>
                <span><h1>EXPLORE OUR PROGRAMS</h1></span>
            </div>
            <div className={Pstyle.card}>
                {programsData.map((data,index) => (
                    <div className={Pstyle.cardbox} key={index}>
                        <div className={Pstyle.image}>
                            <img src={data.Icon}></img>
                        </div>
                        <div className={Pstyle.title}>{data.Typetraing}</div>
                        <div className={Pstyle.explain}>{data.Explain}</div>
                        <div className={Pstyle.join} >
                           <button>Join Soon</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
export default Program;