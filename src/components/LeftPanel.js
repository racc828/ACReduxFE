import React from 'react'
import SubmitProject from './SubmitProject'
import ProjectOptionsContainer from './ProjectOptionsContainer'

const LeftPanel = (props) => {
  return(
    <div id="right-panel">
      <SubmitProject />
      <ProjectOptionsContainer />
    </div>
  )
}

export default LeftPanel
