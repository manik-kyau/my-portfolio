import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://my-portfolio-server-mu.vercel.app/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    return (
        <div className="pt-16 bg-[#26384d] px-5 md:px-[80px] max-h-full WorkSans">
            <h2 className="text-4xl md:text-5xl font-bold text-center mt-8 md:mt-10 text-white">My 3 Recent Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 md:py-14">
                {
                    projects.map((project, idx) => <ProjectCard
                        key={idx}
                        project={project}
                    ></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;