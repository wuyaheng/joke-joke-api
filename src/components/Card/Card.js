import React from 'react'

function Card(props) {
    return (            
            <div className="card m-3">
            <div className="card-body text-center">
               <h5>{props.result}</h5> 
            </div>
            </div>
    )
}

export default Card;