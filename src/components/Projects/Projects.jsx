import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  )
}
