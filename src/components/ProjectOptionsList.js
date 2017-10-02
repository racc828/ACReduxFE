import React from 'react'
import ProjectOptionsItem from './ProjectOptionsItem'

const ProjectOptionsList = (props) => {
  const projectoptions = props.projects.map((project, i) => <ProjectOptionsItem key={i} project={project}/>)
  return(
    <ul>
     {projectoptions}
    </ul>
  )
}

export default ProjectOptionsList
