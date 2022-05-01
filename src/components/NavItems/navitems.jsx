import React from "react";
import NavItem from "components/NavItem"
import classes from "./navitems.module.css"
const items = [
  { text: "About", to: "/about", isLink:true},
  { text: "Contact us", to: "/contact", isLink:true },
  { text: "Use cases", to: "/cases" , isLink:true},
  
  { text: "FAQ", to: "/faq" ,isLink:true},
  { text: "News", to: "/news" ,isLink:true},
  { text: "Get Started", to: "/start" , isLink:false},
];

const NavItems = () => {   
    return(
        <div className={classes.navitems}>
        {
        items.map((value,index) => 
            <NavItem
            isLink={value.isLink}
            text={value.text} 
            // active={location.pathname.split('/').pop() === navigator.direction }  
            to={value.to}
            key={value.to.split('/')[1]}/>
        )
        }
        </div>
    )
}


export default NavItems