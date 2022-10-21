import React, { useState } from "react";

function RoundTripSelect(props) {
    let [setRtt] = useState("");

    function onUserSelect(event) {
        setRtt(event.target.value);
        props.onRttSelected(event);
    }

    return (
        <div >
            <input type="radio" name="rtt" value="false" id="rttfalse" onChange={onUserSelect}/>
            <label htmlFor="rttfalse">Ida</label>
            <br></br>
            <input type="radio" name="rtt" value="false" id="rtttrue" onChange={onUserSelect}/>
            <label htmlFor="rtttrue">Ida y vuelta</label>
        </div>
    )
}

export default RoundTripSelect;