import React, {useState} from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import christmas from "./images/christmas.gif";
import {GiHamburgerMenu} from "react-icons/all";
import {Navigation} from "./Routes";

export const Layout = ({children}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classnames("layout", {open})}>
      <Header onClick={() => setOpen(!open)}/>
      <BelowHeader>
        {children}
      </BelowHeader>

    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

const BelowHeader = ({children}) => (
  <div className="below-header">
    <div className={"drawer"}>
      <Navigation />
    </div>
    <div className={"task-content"}>
      {children}
    </div>
    <div className={"christmas-container"}>
      <img src={christmas}/>
    </div>
  </div>
);

BelowHeader.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

const Header = ({onClick}) => {
  return (
    <div className="header" style={{display: "flex"}}>
      <div className="typical-flex" style={{paddingLeft: 5}}>
        <GiHamburgerMenu onClick={onClick}/>
        <span style={{fontSize: 10}}>menu</span>
      </div>
    </div>
  );
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};


