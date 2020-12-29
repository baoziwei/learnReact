import React from 'react'


const Rainbow = (WrappedComponent)=>{
    const colors = ['red','blue','pink']
    const randomColors = colors[Math.floor(Math.random()*5)];
    const className = randomColors + '-text'

    return (props) => (
        <div className = {className}>
            <WrappedComponent {...props} />
        </div>
    )

}

export default Rainbow;