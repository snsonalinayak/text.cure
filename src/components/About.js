import React,{useState} from 'react'


export default function About() {
    const [myStyle, setMyStyle] = useState(
        {
        color:'black',
        backgroundColor:'white'
        }
    )

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle=()=>{
        if (myStyle.color==='black'){
            setMyStyle(

                    {
                        color:'white',
                        backgroundColor:'black'
                    }
                
            )
            
            // setMyBtnStyle( 
            //     {
            //         backgroundColor:"pink", 
            //         color:"white"   
            //     }
            // )

            if(myBtnStyle.backgroundColor=="purple"){
                setMyBtnStyle( 
                    {
                        backgroundColor:"pink", 
                        color:"white"   
                    }
                )
            }
    
            else{
                setMyBtnStyle( 
                    {
                        backgroundColor:"purple", 
                        color:"white"   
                    }
                )
            }

            if(myBtnStyle2.backgroundColor=="red"){
                setMyBtnStyle2( 
                    {
                        backgroundColor:"green", 
                        color:"white"   
                    }
                )
            }
    
            else{
                setMyBtnStyle2( 
                    {
                        backgroundColor:"red", 
                        color:"white"   
                    }
                )
            }
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle(

                {
                color:'black',
                backgroundColor:'white'
                }        
            )
            // setMyBtnStyle( 
            //     {
            //         backgroundColor:"purple", 
            //         color:"white"   
            //     }
            // )
            
            if(myBtnStyle.backgroundColor=="purple"){
                setMyBtnStyle( 
                    {
                        backgroundColor:"pink", 
                        color:"white"   
                    }
                )
            }
    
            else{
                setMyBtnStyle( 
                    {
                        backgroundColor:"purple", 
                        color:"white"   
                    }
                )
            }

            if(myBtnStyle2.backgroundColor=="red"){
                setMyBtnStyle2( 
                    {
                        backgroundColor:"green", 
                        color:"white"   
                    }
                )
            }
    
            else{
                setMyBtnStyle2( 
                    {
                        backgroundColor:"red", 
                        color:"white"   
                    }
                )
            }
            setBtnText("Enable Dark Mode")
        }   
    }

    const [myBtnStyle, setMyBtnStyle] = useState(
        {   
            backgroundColor:"purple", 
            color:"white"
        }

    )

    const toggleBtnStyle1=()=>{
        if(myBtnStyle.backgroundColor=="purple"){
            setMyBtnStyle( 
                {
                    backgroundColor:"pink", 
                    color:"white"   
                }
            )
        }

        else{
            setMyBtnStyle( 
                {
                    backgroundColor:"purple", 
                    color:"white"   
                }
            )
        }
        if(myBtnStyle2.backgroundColor==="red"){
            setMyBtnStyle2( 
                {
                    backgroundColor:"green", 
                    color:"white"   
                }
            )
        }

        else{
            setMyBtnStyle2( 
                {
                    backgroundColor:"red", 
                    color:"white"   
                }
            )
        }
    }

    const [myBtnStyle2, setMyBtnStyle2] = useState(
        {
            backgroundColor:"red", 
                    color:"white" 
        }
    )

    const toggleBtnStyle2=()=>{
        if(myBtnStyle2.backgroundColor==="red"){
            setMyBtnStyle2( 
                {
                    backgroundColor:"green", 
                    color:"white"   
                }
            )
        }

        else{
            setMyBtnStyle2( 
                {
                    backgroundColor:"red", 
                    color:"white"   
                }
            )
        }
        if(myBtnStyle.backgroundColor==="purple"){
            setMyBtnStyle( 
                {
                    backgroundColor:"pink", 
                    color:"white"   
                }
            )
        }

        else{
            setMyBtnStyle( 
                {
                    backgroundColor:"purple", 
                    color:"white"   
                }
            )
        }
    }

    return (
        <div className="container my-3" style={myStyle} >
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
            {/* <button className="btn my-3 mx-3" onClick={toggleStyle} style={{backgroundColor:'#2c3434', color:'white'}} >{btnText}</button> */}
            {/* <button className="btn my-3 mx-3" onClick={toggleBtnStyle1} style={myBtnStyle} >Change My Colour1</button>
            <button className="btn my-3 mx-3" onClick={toggleBtnStyle2} style={myBtnStyle2} >button2</button> */}
            </div>
        </div>
    )
}
