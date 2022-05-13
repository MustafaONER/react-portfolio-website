import React from 'react';
import Front from './Front';
import Back from './Back';
import data from './SkillsData';
import Underline from '../Utils/Underline';

const Skills = () => {
  return (
    <article className='skills' id='Skills'>
      <div className='section-title'>
        <h3>SKILLS</h3>
        <Underline />
      </div>
      <div className='skills-center'>
        <Front data={data} />
        <Back data={data} />
      </div>
    </article>
  );
};

export default Skills;
