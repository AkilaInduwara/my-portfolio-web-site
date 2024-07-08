import React from 'react'
import "./skills.css"
import Mainskills from './Mainskills'
import Techporf from './Techporf'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Skiils</h2>
        <span className="section_subtitle">My Skills</span>

        <div className="skills_container container grid">
            <Mainskills />

            <Techporf />
        </div>
    </section>
  )
}

export default Skills
