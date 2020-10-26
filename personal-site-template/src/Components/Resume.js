import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        if(work.company === "Adapt Data Flow Optimizations Lab"){
          return <div key={work.company}><a href={work.adaptwebsite}><h3 >{work.company}</h3></a>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
            <h6>Projects I've worked on.</h6>
            <a href={work.pptgithub}><ul style={{listStyleType: 'disc'}}><li>{work.projecttwotitle}</li></ul></a>
            <p style={{marginTop: "-25px"}}>{work.projecttwotimeline}</p>
            <p style={{marginTop: "-15px"}}>{work.projecttwodescription}</p>
            <a href={work.altgithub}><ul style={{listStyleType: 'disc'}}><li>{work.projectonetitle}</li></ul></a>
            <p style={{marginTop: "-25px"}}>{work.projectonetimeline}</p>
            <p style={{marginTop: "-15px"}}>{work.projectonedescription}</p>
          </div>
        } else{
          return <div key={work.company}><h3 >{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
          </div>
        }
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">


				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
