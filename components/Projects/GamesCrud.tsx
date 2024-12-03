import React from 'react'

export default function GamesCrud() {
  return (
    <div>GamesCrud</div>
  )
}

type Project = {
    githubUrl: string,
    previewUrl: string,
    description: string,
    name: string
}


type ProjectProps = {
    project: Project
}
export const Project = (props: ProjectProps) => {
    return <div></div>
}
