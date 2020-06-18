import React from 'react'
import './style.css'

function Button(props) {
    return (
        <div className="text-center mt-3">
          <button type="button" onClick={props.handleClick} className="btn btn-dark">Get Another Random Joke</button>  
        </div>
    )
}

export default Button;