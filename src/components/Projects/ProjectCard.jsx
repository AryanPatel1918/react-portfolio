export default function ProjectCard({ project }) {
    const { imageSrc, title, description, skills, demo, source } = project  

  return (
    <div>
      <img src={imageSrc} alt={`Image of ${title}`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {skills.map((skill, id) => (
          <li key={id}>{skill}</li>
        ))}
      </ul>
      <div>
        <a href={demo} target="_blank">Demo</a>
        <a href={source} target="_blank">Source</a>
      </div>
    </div>
  )
}
