import laststyle from "../Last/last.module.css"
const Last = () => {
    return (
        <div className={laststyle.box}>
            <div className={laststyle.icons}>
                <i class="fa fa-instagram " aria-hidden="true"></i>
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                <i class="fa fa-facebook-official" aria-hidden="true"></i>
            
                <img src="https://cdn-icons-png.flaticon.com/128/13397/13397739.png"></img>
                <div>YOUR CLUB</div>
            </div>
        </div>
    );
}
export default Last;