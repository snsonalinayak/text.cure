import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Sample Text")
    const [word, setWord] = useState("")

    const handleOnChange=(event)=>{
        // console.log("on Change")
        setText(event.target.value)
        
        
    }

    const handleUpClick=()=>{
        // console.log("Uppercase was Clicked")
        let newText= text.toUpperCase()
        setText(newText)
        props.changeAlert("Converted to Uppercase.","success")
    }
    
    const handleLoClick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
        props.changeAlert("Converted to Lowercase.","success")
        
    }
    
    const handleClClick=()=>{
        let newText=("");
        setText(newText)
        props.changeAlert("Cleared Text.","success")
    }
    
    const handleTrClick=()=>{
        let newText=text.replace(/\s+/g,' ').trim()
        setText(newText)
        props.changeAlert("Removed extra spaces.","success")
        // \s: matches any whitespace symbol: spaces, tabs, and line breaks
        //  +: match one or more of the preceding tokens (referencing \s)
        //  g: the g at the end indicates iterative searching throughout the full string
    }
    const handleOnChangeBox2=(event)=>{
        setWord(event.target.value)      
    }
    
    const handleFiClick=()=>{
        let x = 0, y=0;
        
        for (let i=0;i< text.length;i++)
        {
            if(text[i] === word[0])
            {
                for(let j=i;j< i+word.length;j++)
                {
                    if(text[j]===word[j-i])
                    {
                        y++;
                    }
                    if (y===word.length){
                        x++;
                    }
                }
                y=0;
            }
        }
        let newText="'"+word+"' was found "+x+" times.";
        
        // let newText = text.match(/{word}/gi);
        // let newText = text.match([word]);
        setText(newText)
        props.changeAlert(newText,"success")
        
        
    }
    // const handleReClick=()=>{
        // let newText=text.replace(/\Sample+/gi,word)
        // setText(newText)
    // }

    

    // setText("new Text")
    return (
        <>
        <div className= "container my-3" style={{color: props.Mode==="dark"?"white":"black"}} >
            <h1 style={{color: props.Mode==="dark"?"#545454":"black"}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{color: props.Mode==="dark"?"white":"black",backgroundColor: props.Mode==="dark"?"#545454":"white"}} onChange={handleOnChange} value={text} placeholder='Enter Text here: ' id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-secondary mx-1 my-1" style={{backgroundColor:"#2b3035"}} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-secondary mx-2 my-1" style={{backgroundColor:"#2b3035"}} onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-secondary mx-2 my-1" style={{backgroundColor:"#2b3035"}} onClick={handleTrClick}>Remove extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-secondary mx-2 my-1" style={{backgroundColor:"#2b3035"}} onClick={handleClClick}>Clear Text</button>

        </div>

        <div className="container">
        <textarea className="form-control" style={{color: props.Mode==="dark"?"white":"black",backgroundColor: props.Mode==="dark"?"#545454":"white"}} onChange={handleOnChangeBox2} value={word} placeholder='Enter Word to be Replaced: ' id="myBox" rows="2"></textarea>
        <div>
            <button className="btn btn-secondary mx-1 my-2" style={{backgroundColor:"#2b3035"}} onClick={handleFiClick}>Find Word</button>
            {/* <button className="btn btn-secondary mx-2 my-2" style={{backgroundColor:"#2b3035"}} onClick={handleReClick}>Replace Word</button> */}

        </div>
        
        </div>

        <div className="container my-3" style={{color: props.Mode==="dark"?"#545454":"black"}}>
            <h3>Summary:</h3>
            <p>{text.split(/\s+/).filter((element)=> {return element.length!=0}).length } words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=> {return element.length!=0}).length} Minutes Read</p>
            <h4>Preview:</h4>
            <p >{text.length>0?text:"Enter text above to preview..."}</p>
        </div>
        </>
    )
}
