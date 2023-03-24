import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const state1 = {
        name:"Uzair",
        class:"5b"
    }
    const fullName = props.Dashboard.name
    const [state,setState] = useState(state1)
    const update = (name) => {
        setTimeout(() => {
            setState({
                name:name,
                class:'10b'
            })
        },[3000])
    }
    return(
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState