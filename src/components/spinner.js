import logo from "./logo.gif"
import "./spinner.css"
function Spinner()
{
    return(
        <div className="spin">
        <img src={logo} alt="loading" />
        </div>
    )
}

export default Spinner;