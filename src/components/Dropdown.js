import arrowDown from '../assets/arrow-down.svg'
import arrowUp from '../assets/arrow-up.svg'
import React, { useState } from 'react'


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
      <div>
        <p>{props.name}</p>
        <img src={arrowDown} alt="fleche vers le bas" onClick={showInfos} />
      </div>
    </div>)
  } else if (index === 1 && type === "string"){
    dropdown = (<div className='dropdown'></div>)
  }

  return(
    <React.Fragment>
      {dropdown}
    </React.Fragment>
  )
}

export default Dropdown
