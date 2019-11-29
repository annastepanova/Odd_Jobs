import React, { Component } from "react"
import "../about.css"
import anna from '../images/anna_stepanova.png'
import william from '../images/william_kennedy.png'
import maryali from '../images/maryali_rondon.png'
import rob from '../images/robert_terrell.png'
import julissa from '../images/julissa_wilson.png'
import lisa from '../images/lisa_cindric.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import email from '../images/email.png'

class About extends Component {

  componentDidMount() {
        window.scrollTo(0, 0);
    }

  render() {
    return (
      <div className="wrapper">
      <img className="teammate" src={william} alt="william" />
        <div>
          <h1>William Kennedy</h1>
          <a href="https://github.com/wkennedy8" target="blank"><img src={github} alt="github"/></a>
          <div>
            <a href="https://www.linkedin.com/in/williamkennedy8" target="blank"><img src={linkedin} alt="linkedin"/></a>
          </div>
          <div>
             <a href="mailto:wkennedy210@gmail.com" target="blank"><img src={email} alt="email"/></a>
          </div>
        </div>
      <img className="teammate" src={anna} alt="anna" />
        <div>
          <h1>Anna Stepanova</h1>
            <a href="https://github.com/annastepanova" target="blank"><img src={github} alt="github"/></a>
              <div>
                <a href="https://www.linkedin.com/in/annastepanova1811/" target="blank"><img src={linkedin} alt="linkedin"/></a>
              </div>
              <div>
                <a href="mailto:annastepanova1811@gmail.com" target="blank"><img src={email} alt="email"/></a>
              </div>
        </div>
      <img className="teammate" src={maryali} alt="maryali" />
        <div>
          <h1>Maryali Rondon</h1>
            <a href="https://github.com/maryalir" target="blank"><img src={github} alt="github"/></a>
              <div>
                <a href="https://www.linkedin.com/in/maryalirondon/" target="blank"><img src={linkedin} alt="linkedin"/></a>
              </div>
              <div>
                <a href="mailto:maryalir@gmail.com" target="blank"><img src={email} alt="email"/></a>
              </div>
          </div>
      <img className="teammate" src={rob} alt="rob" />
        <div>
          <h1>Robert Terrell</h1>
            <a href="https://github.com/Rterrell25" target="blank"><img src={github} alt="github"/></a>
              <div>
                <a href="https://www.linkedin.com/in/rob-terrell-961b8516a" target="blank"><img src={linkedin} alt="linkedin"/></a>
              </div>
              <div>
                <a href="mailto:rterrell25@gmail.com" target="blank"><img src={email} alt="email"/></a>
              </div>
        </div>
      <img className="teammate" src={julissa} alt="julissa" />
        <div>
          <h1>Julissa Wilson</h1>
          <img src={linkedin} alt="github"/>
          <div>
            <a href="mailto:ms.julissawilson@gmail.com" target="blank"><img src={email} alt="email"/></a>
          </div>
        </div>    
      <img className="teammate" src={lisa} alt="lisa"/>
        <div>
          <h1>Lisa Cindric</h1>
            <a href="https://www.linkedin.com/in/Lisacindric" target="blank"><img src={linkedin} alt="linkedin"/></a>
          <div>
            <a href="mailto:lisacindricuxui@gmail.com" target="blank"><img src={email} alt="email"/></a>
          </div>
        </div>
      </div>

    )
  }
  
}
export default About