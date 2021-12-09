import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.alertShow("converted to uppercase","success");
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.alertShow("converted to lowercase","success");
    }

    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
        props.alertShow("All text clear","success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }


    const [text,setText] = useState("");
    return (
        <>
        <div className="container"  style={{color: props.mode === 'dark' ? 'white':'#1b2d4c'}}>
            <br/>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode === 'dark' ? '#1b2d4c':'white',color: props.mode === 'dark' ? 'white':'#1b2d4c'}}value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white':'#1b2d4c'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text:"Enter something above to preview here"}</p>
        </div>
        </>
    )
}
