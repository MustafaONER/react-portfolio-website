import React from 'react';
import Underline from '../Utils/Underline';
import Project from './Project';
import { useGlobalContext } from '../../context';
const Projects = () => {
  const { displayProjects, numberOfPages, handlePage, page } =
    useGlobalContext();

  return (
    <article className='projects' id='Projects'>
      <div className='section-title'>
        <h3>Projects</h3>
        <Underline />
      </div>
      <div className='projects-center'>
        {displayProjects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
      <div className='project-btn-container'>
        {numberOfPages.map((number, index) => {
          return (
            <button
              key={index}
              className={`pagination-btn ${
                page === index ? 'active-page' : null
              }`}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </article>
  );
};

export default Projects;
