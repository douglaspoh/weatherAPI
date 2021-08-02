import React from 'react'

function Form(props) {

    const {input,handleform,submitform} = props
    
    return (
        <div>
            <form onSubmit={submitform}>
                <input type='text' onChange={handleform} value={input}/>
                <button type='submit'>Search Country</button>
            </form>
        </div>
    )
}

export default Form
