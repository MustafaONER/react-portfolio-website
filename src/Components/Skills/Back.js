import React from 'react';

const Back = ({ data }) => {
  return (
    <div className='front-end'>
      <h4 className='stack'>Back End</h4>
      <div className='techs'>
        {data.slice(3).map((skill) => {
          const { id, tech, rate } = skill;
          return (
            <article className='skill' key={id}>
              <span className='tech'>{tech}</span>
              <div className='skill-container'>
                <p className='skill-value' style={{ width: `${rate}%` }}></p>
                <p className='skill-text' style={{ left: `${rate}%` }}>
                  {rate}%
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Back;
