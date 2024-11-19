import React from "react";
import {DateTime} from "./DateTime";

function dateDiff(date, type) {
    const now = new Date();
    const date1 = new Date(date);
    let diff = now.getTime() - date1.getTime();
    let values = (type === "min") ? 1000 * 60 :
    (type === "hour") ? 1000 * 60 * 60 :
    (type === "day") ? 1000 * 60 * 60 * 24 : 1;

    return (diff/values);
}

const withDateTimePretty = (Component) => {
    return function (props) {        
        const diffmin = dateDiff(props.date, "min");
        const diffhours = dateDiff(props.date, "hour");
        const diffdays = dateDiff(props.date, "day");
        const diffstr = (diffmin < 60) ? diffmin.toFixed(0) + " минут назад" :
        diffhours < 24 ? diffhours.toFixed(0) + " часов назад" :
        diffdays.toFixed(0) + " дней назад";
        
        return(
          <>
          <Component date={diffstr}/>
          </>  
        );

    }
}

export const DateTimePretty = withDateTimePretty(DateTime);