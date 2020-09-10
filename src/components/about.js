/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleMarketing() {
    document.getElementById('marketing-intern').classList.toggle('hidden');
    document.getElementById('work-list').classList.toggle('hidden');
  }

  toggleUGA() {
    document.getElementById('undergraduate-advisor').classList.toggle('hidden');
    document.getElementById('work-list').classList.toggle('hidden');
  }

  toggleTA() {
    document.getElementById('teacher-assistant').classList.toggle('hidden');
    document.getElementById('work-list').classList.toggle('hidden');
  }

  toggleTutor() {
    document.getElementById('student-tutor').classList.toggle('hidden');
    document.getElementById('work-list').classList.toggle('hidden');
  }

  toggleSGL() {
    document.getElementById('study-group-leader').classList.toggle('hidden');
    document.getElementById('work-list').classList.toggle('hidden');
  }

  toggleService() {
    document.getElementById('customer-service').classList.toggle('hidden');
    document.getElementById('work-list').classList.toggle('hidden');
  }

  render() {
    return (
      <div id="about-page" className="default-bg">
        <h1 className="about-header">About Me</h1>
        <div id="about-containers">
          <div id="coding-container">
            <h2 className="about-header">Coding</h2>
            <div className="ind-about-el">HTML</div>
            <div className="ind-about-el">CSS</div>
            <div className="ind-about-el">JavaScript</div>
            <div className="ind-about-el">React</div>
            <div className="ind-about-el">Redux</div>
            <div className="ind-about-el">Bootstrap</div>
            <div className="ind-about-el">Firebase</div>
            <div className="ind-about-el">APIs</div>
            <div className="ind-about-el">Python</div>
            <div className="ind-about-el">Java</div>
            <div className="ind-about-el">C</div>
            <div className="ind-about-el">Bash</div>
            <div className="ind-about-el">Git</div>
            <div className="ind-about-el">VHDL</div>
          </div>
          <div id="work-container">
            <div id="marketing-intern" className="hidden full-job-desc">
              <h2 className="about-header">Marketing/Data Analyst</h2>
              <div className="about-location">Artisan Custom Doorworks</div>
              <div className="about-desc">
                I spent the summer of 2019 working in Morgantown, PA. The first couple of weeks were spent collecting, organizing, and interpreting years of company
                sales and production data. I then spent several weeks building an employee onboarding program and a marketing program through BrainShark. The last few
                weeks of the summer were spent managing the shipping department and training new employees.
              </div>
              <button type="button" className="button-var-1" onClick={this.toggleMarketing}>Back</button>
            </div>
            <div id="undergraduate-advisor" className="hidden full-job-desc">
              <h2 className="about-header">Undergraduate Advisor</h2>
              <div className="about-location">Dartmouth College</div>
              <div className="about-desc">
                I was an Undergraduate Advisor at Dartmouth College from fall of 2019 through the summer of 2020. My primary responsibilities in this job were to
                create and uphold a safe environment that promotes learning in the dorms, plan and host various events, and build relationships with each of my residents,
                of which I had over 100.
              </div>
              <button type="button" className="button-var-1" onClick={this.toggleUGA}>Back</button>
            </div>
            <div id="teacher-assistant" className="hidden full-job-desc">
              <h2 className="about-header">Teacher Assistant</h2>
              <div className="about-location">Dartmouth College</div>
              <div className="about-desc">
                I was a Teacher Assistant under Professor Andrew Levin for Macroeconomics in the winter of 2020, and also under Professor Thomas Youle for Competition and Strategy
                in the fall of 2020. My duties in these jobs included hosting office hours, grading problem sets and projects, and managing logistics.
              </div>
              <button type="button" className="button-var-1" onClick={this.toggleTA}>Back</button>
            </div>
            <div id="student-tutor" className="hidden full-job-desc">
              <h2 className="about-header">Student Tutor</h2>
              <div className="about-location">Dartmouth College</div>
              <div className="about-desc">
                I tutored roughly 10 different students in two courses, Microeconomics and The Price System, from winter of 2019 until fall of 2020. In this job I
                answered questions, helped them through problem sets, and reinforced concepts through asking engaging questions.
              </div>
              <button type="button" className="button-var-1" onClick={this.toggleTutor}>Back</button>
            </div>
            <div id="study-group-leader" className="hidden full-job-desc">
              <h2 className="about-header">Study Group Leader</h2>
              <div className="about-location">Dartmouth College</div>
              <div className="about-desc">
                I was a Study Group Leader for Microeconomics in the winter of 2019. This required me to host a session in which any students currently taking the class
                could come and ask questions before the final exam.
              </div>
              <button type="button" className="button-var-1" onClick={this.toggleSGL}>Back</button>
            </div>
            <div id="customer-service" className="hidden full-job-desc">
              <h2 className="about-header">Customer Service</h2>
              <div className="about-location">Target Corporation</div>
              <div className="about-desc">
                Over the winter break of 2018 I worked at Target in the customer service department. I was responsible for running a cash register, dealing with
                customer issues, and occassionally stocking.
              </div>
              <button type="button" className="button-var-1" onClick={this.toggleService}>Back</button>
            </div>
            <div id="work-list">
              <h2 className="about-header">Work</h2>
              <button type="button" className="ind-about-el-expandable" onClick={this.toggleMarketing}>Marketing/Data Analyst Intern<i className="fas fa-plus-circle" /></button>
              <button type="button" className="ind-about-el-expandable" onClick={this.toggleUGA}>Undergraduate Advisor<i className="fas fa-plus-circle" /></button>
              <button type="button" className="ind-about-el-expandable" onClick={this.toggleTA}>Teacher Assistant<i className="fas fa-plus-circle" /></button>
              <button type="button" className="ind-about-el-expandable" onClick={this.toggleTutor}>Student Tutor<i className="fas fa-plus-circle" /></button>
              <button type="button" className="ind-about-el-expandable" onClick={this.toggleSGL}>Study Group Leader<i className="fas fa-plus-circle" /></button>
              <button type="button" className="ind-about-el-expandable" onClick={this.toggleService}>Customer Service<i className="fas fa-plus-circle" /></button>
            </div>
          </div>
          <div id="skills-container">
            <h2 className="about-header">Skills</h2>
            <div className="ind-about-el">Microsoft Office</div>
            <div className="ind-about-el">EViews 10</div>
            <div className="ind-about-el">Stata</div>
            <div className="ind-about-el">VSCode</div>
            <div className="ind-about-el">Ubuntu</div>
            <div className="ind-about-el">Vivado</div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
