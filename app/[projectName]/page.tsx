import Project from "@/components/Project";
import { projects } from "@/public/projects";

export const metadata = {
  title: "Edit game",
  description: "Here you can edit game that you added",
};

export default function ProjectPage({
  params,
}: {
  params: { projectName: string };
}) {
  const { projectName } = params;
  const project = projects.find(
    ({ projectName: name }) => name === projectName
  );

  if (!project) return;

  return (
    <Project
      name={project.name}
      codeLink={project.codeLink}
      demoLink={project.demoLink}
      projectImage={project.projectImage}
      description={project.description}
    />
  );
}
