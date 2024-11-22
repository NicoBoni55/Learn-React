import './Counter.css'
import { useState } from 'react'

export default function Counter() {
    const [count, Setcount] = useState(0);
    return(
        <div className="counter">
                <strong><h2>You clicked this button {count} times</h2></strong>
                <div className="container-button">
                    <button className='incremented-button' 
                    onClick= {() => Setcount(count + 1)}>
                    <strong>+</strong>
                    </button>
                    <button className="restart-button"
                    onClick={() => Setcount(0)}>
                        Restart
                    </button>
                    <button className='decremented-button'
                    onClick={() => Setcount(count - 1)}>
                        <strong>-</strong>
                    </button>
                </div>
            </div>
    )
}