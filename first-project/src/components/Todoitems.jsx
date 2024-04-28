import React from 'react'
import './CSS/todoitems.css'
import tick from './assets/tick.png'
import nottick from './assets/not_tick.png'
import cross from './assets/cross.png'

const Todoitems = ({no,display,settodos,text}) => {
    
    const delette=(no)=>{
      let data=JSON.parse(localStorage.getItem("todos"))
      data=data.filter((da)=>da.no!==no)
      settodos(data)
    }

    const toggle=(no)=>{
        let data=JSON.parse(localStorage.getItem("todos"))
        for(let i=0;i<data.length;i++)
        {
           if(data[i].no==no){
            if(data[i].display=="")
            {
                data[i].display="line-through"
            }
            else{
                data[i].display=""
            }
            break;
           }
        }
        settodos(data)
    }

  return (
    <div className='todoitems'>
        <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
           {display===''? <img src={nottick} alt="" />: <img src={tick} alt="" />}
           
            <div className="todoitems-text">
              {text}
            </div>
        </div>
        <img onClick={()=>{delette(no)}} className='todoitems-crossicon' src={cross} alt="" />
    </div>
  )
}

export default Todoitems