import React from "react";
import { Link } from "react-router-dom";

export default props => 
   <React.Fragment>
        <Link to={`/${props.href}`}>
            <i className={`${props.initialFa} fa-${props.Icon}`}></i> {props.label}
        </Link>
    </React.Fragment>