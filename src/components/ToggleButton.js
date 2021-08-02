import React from 'react'

function ToggleButton(props) {
    const {isCelsius,setIsCelsius} = props
    return (
        <div>
            {isCelsius? 
            (<button onClick={()=>setIsCelsius(false)}>Convert to °F</button>) :
            (<button onClick={()=>setIsCelsius(true)}>Convert to °C</button>)
            }
        </div>
    )
}

export default ToggleButton
