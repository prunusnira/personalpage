import React, { Component } from "react";
import ProjectItem from "../../data/projectItem";
import ProjectListObject from "./projectListObject";

interface Props {
    list: Array<ProjectItem>
}

class ProjectListWrapper extends Component<Props> {
    render() {
        return (
            this.props.list.map(v => {
                return <ProjectListObject item={v} />
            })
        );
    }
}

export default ProjectListWrapper;