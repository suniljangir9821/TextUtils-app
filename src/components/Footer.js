import React from 'react'

export default function Footer(props) {
  return (
    <div className={`row bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light' } border-top d-flex justify-content-center align-items-center`} style={{'height':'40px'}}>
     Copyright &#169; | All rights reserved &#174; 
    </div>
  )
}
