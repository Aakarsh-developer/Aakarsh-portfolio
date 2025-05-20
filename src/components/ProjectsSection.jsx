import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects=[
    {
        id:1,
        title: "Student result dashboard",
        description: "A smart dashboard for students to view their results and performance over time.",
        image: "/Projects/dashbored.png",
        tags: ["Power BI", "Data Analysis", "Dashboard"],
        demoUrl:"#",
    },
    {
        id:2,
        title: "QuickCart",
        description: "A smart E-commerce website where the spinning wheel is to get discout=nt at all products.",
        image: "/Projects/QuickCart.png",
        tags: ["React", "E-commerce", "Web Development"],
        demoUrl:"#",
        gitHubUrl: "https://github.com/Aakarsh-developer/E-commerce-"
    },{
        id:3,
        title: "Crud operations",
        description: "A simple CRUD application to perform Create, Read, Update and Delete operations on hotel booking data.",
        image: "/Projects/hotel.png",
        tags: ["PHP", "CRUD", "Web Development"],
        demoUrl:"#",
        gitHubUrl: "https://github.com/Aakarsh-developer/CRUD-operations"
    },
    {
        id:4,
        title: "Portfolio",
        description: "A personal portfolio website to showcase my skills and projects.",
        image: "/Projects/portfolio.png",
        tags: ["React", "Portfolio", "Web Development"],
        demoUrl:"#",
        gitHubUrl: "#"
    },
    
]

export const ProjectsSection = () => {
    return(
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary "> Projects</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my projects that I have worked on. You can check them out on GitHub.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key) => (
                    <div key={key} className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform druation-500 group-hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="text-xs font-medium text-secondary-foreground bg-secondary py-1 px-2 rounded-full">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20}/></a>
                                <a><Github size={20}/></a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/Aakarsh-developer">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
    )
}