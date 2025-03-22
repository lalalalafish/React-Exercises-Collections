import {Outlet} from "react-router-dom";
import {useState} from "react";

export default function Exercises() {
    const [header, setHeader] = useState("Exercises");
    const [description, setDescription] = useState("Description of the exercise");

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%", flex: 1}}>
            {/*Description of the exercise*/}
            <div style={{padding: "10px 20px", borderRadius: "10px", backgroundColor: "#111", border: "2px solid transparent", margin: "20px 0", width: "calc(100% - 40px)"}}>
                <h2>{header}</h2>
                <p style={{color: "#aaa"}}>{description}</p>
            </div>
            {/*Link to the exercise page*/}
            <div style={{padding: "20px", borderRadius: "10px" ,backgroundColor: "#111", border: "2px solid transparent", width: "calc(100% - 40px)", flex: 1}}>
                <Outlet context={{setHeader, setDescription}}/>
            </div>
        </div>
    );
}