import React from 'react'
import counterStyles from './counter.module.css'


export default function Counter(props){
    return(
    <div className={counterStyles.counter}>
        <button className={`${counterStyles.counterButton} ${counterStyles.minus}`} onClick={()=>props.minus()}>
        <span className="innerButton"> - </span>
        </button>
            <span className={counterStyles.numberOfPeople}><span className="nop"> {props.count? props.count:''} {props.count===1? <i className="fa fa-user" aria-hidden="true"></i> : <i className="fa fa-user" aria-hidden="true"></i>}</span> </span>
        <button className={`${counterStyles.counterButton} ${counterStyles.plus}`} onClick={()=>props.plus()} >
        <span className={counterStyles.innerButton}> + </span>
        </button>
    </div>
    )
}