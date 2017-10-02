import React from 'react'
import { connect } from 'react-redux'
import ProjectOptionsList from './ProjectOptionsList'

class ProjectOptionsContainer extends React.Component {

  render() {
    return(
      <div>
        <ProjectOptionsList projects={this.props.projects} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(ProjectOptionsContainer)
