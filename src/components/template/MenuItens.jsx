import React from "react";
import { Link } from "react-router-dom";

export function MenuItens(props) {
return <React.Fragment>
            <Link to={`/${props.href}`}>
                <i className={`${props.initialFa} fa-${props.Icon}`}></i> {props.label}
            </Link>
        </React.Fragment>
} 
   