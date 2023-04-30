import "./navBar.css"
import { useState } from "react";
import { Link,NavLink } from 'react-router-dom';
import { useEffect } from "react";


function NavBar({ title, navv,fun}) {
    console.log("NavBar")
     const [checked,setChecked]=useState(false);
     
    function changed(event){
        console.log("changed", event);
        let elem=document.getElementById("crane");
      //  let cbody=document.getElementsByClassName("card");
       // let cdbody=Array.from(cbody);
       // let btnwa=document.getElementsByClassName("btn")
        //let btdnwa=Array.from(btnwa);
       
        
        if(event.target.checked===true)
        {
            setChecked(true);
            elem.classList.remove("desFlex");
            elem.classList.add("nesFlex");
            // console.log(cbody);
            // cdbody.forEach(element => {
            //     element.style.background="linear-gradient(135deg, #0FF0B3 0%,#036ED9 100%)";
            // });
            // btdnwa.forEach(element => {
            //     element.style.background="linear-gradient(135deg, #622774 0%,#c53364 100%)";
            // });
           // btnwa.style.background="linear-gradient(135deg, #f65599 0%,#4d0316 100%)";
        }
        else
        {
            setChecked(false);
            elem.classList.add("desFlex");
            elem.classList.remove("nesFlex");
            // cdbody.forEach(element => {
            //     element.style.background="linear-gradient(135deg, #f2d50f 0%,#da0641 100%)";
            // });
            // btdnwa.forEach(element => {
            //     element.style.background="linear-gradient(135deg, #0FF0B3 0%,#036ED9 100%)";
            // });
           // cdbody.style.background=
           // btnwa.style.background="linear-gradient(135deg, #622774 0%,#c53364 100%)";
        }
        
    }
    console.log(checked,"checkwa");
    fun(checked);
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{title}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <BrowserRouter> */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {
                                navv.map((element,i,arr) => {
                                    if (element === "Home") {
                                        return (<li className="nav-item" key={i}>
                                            <a className="nav-link" href="/News-App/" >{element}</a>
                                            {/* <Link to="/" className="nav-link" >{element}</Link> */}
                                        </li>)
                                    }
                                    return (<li className="nav-item" key={i}>
                                        <a className="nav-link" href={`/News-App/${element}`}>{element}</a>
                                        {/* <Link to={`/${element}`} className="nav-link" >{element}</Link> */}
                                    </li>)
                                })
                            }



                        </ul>
                    </div>
                    {/* </BrowserRouter> */}

                    {/* <!-- Default checked --> */}
                    <div className="custom-control custom-switch check">
                        <input type="checkbox" className="custom-control-input yui" id="customSwitch1" onChange={changed} />
                            <label className="custom-control-label yui" htmlFor="customSwitch1">Enable Dark Mode</label>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default NavBar;