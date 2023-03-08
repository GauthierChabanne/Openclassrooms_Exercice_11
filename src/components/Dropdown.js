import arrowDown from '../assets/arrow-down.svg'
import arrowUp from '../assets/arrow-up.svg'
import React, { useState } from 'react'
import '../style/components/dropdown.css'


function Dropdown(props) {
  const [index, setIndex] = useState(0);
  const type = typeof(props.infos) === "string" ? "string" : "array"

  function hideInfos(){
    setIndex(0)
  }

  function showInfos(){
    setIndex(1)
  }

  let dropdown = ""

  if (index === 0) {
    dropdown = (<div className='dropdown'>
      <div className='dropdown__namePart'>
        <p>{props.name}</p>
        <img src={arrowDown} alt="fleche vers le bas" onClick={showInfos} />
      </div>
    </div>)
  } else if (index === 1){
    dropdown = (<div className='dropdown'>
      <div className='dropdown__namePart'>
        <p>{props.name}</p>
        <img src={arrowUp} alt="fleche vers le haut" onClick={hideInfos} />
      </div>
      <div className="dropdown__infosPart">
        {type === "string" ? <p>{props.infos}</p> : <ul>{props.infos.map((info) => (<li key={info}>{info}</li>))}</ul>}
      </div>
    </div>)
  }


  return(
    <React.Fragment>
      {dropdown}
    </React.Fragment>
  )
}

export default Dropdown
