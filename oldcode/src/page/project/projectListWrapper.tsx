import React from "react"
import ProjectItem from "../../data/projectItem"
import ProjectListObject from "./projectListObject"

interface Props {
    list: Array<ProjectItem>
}

const ProjectListWrapper = (props: Props) => {
    return (
        <>
        {
            props.list.map(v => {
                return <ProjectListObject item={v} />
            })
        }
        </>
    )
}

export default ProjectListWrapper