import { useState } from "react";
import data from "./data"

//single selection accordian

//multiple selection accordian
export default function Accordian() {

    const [selected, setSelected] = useState(null);
    function handleSingleSelection(getCurrentId){
        setSelected (getCurrentId === selected ? null : getCurrentId)
    }

    return <div className="wrapper">
        <div className="accordian">
            {
                data && data.length > 0 ? 
                (
                    data.map((x)=>(
                    <div className="item" key ={x.id}>
                        <div className="title" onClick = {()=>handleSingleSelection(x.id)}>
                            <h3 className="question">{x.question}</h3>
                            <span className="open">+</span>
                            {
                                selected === x.id ? <div className="answer">{x.answer}</div> : null
                            }
                        </div>
                    
                    </div>
                   
                    ))
                ) : (<div>no data found</div>)
                
            }
            
        </div>
    </div>
}