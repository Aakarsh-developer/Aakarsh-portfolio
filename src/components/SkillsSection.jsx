import { useState } from "react"



const skills = [
    {name:"HTML/CSS", level:90, category:"frontend"},
    {name:"JavaScript", level:70, category:"frontend"},
    {name:"React", level:80, category:"frontend"},


    {name:"Next.js", level:70, category:"backend"},
    {name:"Node.js", level:70, category:"backend"},
    {name:"Express.js", level:70, category:"backend"},
    {name:"PostgreSQL", level:70, category:"backend"},
    {name:"MySQL", level:70, category:"database"},

    {name:"C", level:78, category:"Programming-language"},
    {name:"python", level:70, category:"Programming-language"},
    {name:"GitHug", level:70, category:"tools"},
    {name:"canva", level:70, category:"tools"},
    {name:"Git", level:80, category:"tools"},
    {name:"VS Code", level:80, category:"tools"},
    {name:"Power-BI", level:80, category:"tools"},

]
const categories = ["all","frontend", "backend", "database", "tools", "Programming-language"]

export const SkillsSection = () => {

    const [activeCategory,setactiveCategory] = useState("all")
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)
    return(
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                My<span className="text-primary"> Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key) => (
                    <button key={key} onClick={()=> setactiveCategory(category)} className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${activeCategory===category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bf-secondary"}`}>{category}</button>
                ))}
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="p-6 bg-card rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">
                                {skill.name}
                            </h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                            style={{width: skill.level + "%"}}/>
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>)
}