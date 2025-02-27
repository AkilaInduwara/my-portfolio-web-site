import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
        <div className="about_box">
            <i className="bx bx-award about_icon"></i>
            <h3 className="about_title">Experience</h3>
            <span className="about_subtitle">Undergraduate</span>
        </div>

        <div className="about_box">
        <i className="bx bx-briefcase about_icon"></i>
            <h3 className="about_title">Completed</h3>
            <span className="about_subtitle">Uni Projects,, Self projects</span>
        </div>

        <div className="about_box">
        <i className="bx bx-support about_icon"></i>
            <h3 className="about_title">Supports</h3>
            <span className="about_subtitle">24/7</span>
        </div>
    </div>
  )
}

export default Info
