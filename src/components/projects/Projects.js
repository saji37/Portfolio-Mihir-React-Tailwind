import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="VCET Connect"
          des="Unlimited content sharing platform, fostering knowledge exchange and communication among students at VCET."
          src={projectOne}
          githubLink="https://github.com/saji37/social-media"

        />
        <ProjectsCard
          title="Expense-Tracker"
          des="The Expense Tracker is an innovative application that leverages Machine Learning (ML) algorithms to analyze users' spending patterns and provide personalized financial insights. The goal is to help users make informed financial decisions and improve their budget management."
          src={projectTwo}
          githubLink="https://github.com/saji37/expense-tracker"
        />
        <ProjectsCard
          title="Human following robot"
          des="The Human Following Robot is an IoT-based project aimed at developing an autonomous robot capable of tracking and following human movement. The project integrates various sensors and communication technologies to enable the robot to follow a person while maintaining a safe distance."
          src={projectThree}
        />
        <ProjectsCard
          title="SSI System"
          des="The Self-Sovereign Identity (SSI) system is a revolutionary approach to digital identity management that empowers individuals to have complete control over their personal information. Unlike traditional identity systems, where centralized entities store and control user data, SSI enables users to manage their identity information independently, securely, and privately."
          src={projectFour}
          githubLink="https://github.com/saji37/veramo"
          
        />
        <ProjectsCard
          title="Temple Management"
          des="This is the admin dashboard for temple management. It is built using react and tailwind"
          src={projectFive}
          githubLink="https://github.com/saji37/Temple-Management"
          websiteLink="https://templesevamanagement.netlify.app/"
        />
        <ProjectsCard
          title="Quiz App"
          des="The Quiz App is an interactive and engaging application designed to test users' knowledge on various topics through a series of questions and answers. It provides an enjoyable way for users to learn new information, challenge themselves, and compete with others."
          src={projectSix}
          githubLink="https://github.com/saji37/Quiz_app"
      
        />
      </div>
    </section>
  );
}

export default Projects