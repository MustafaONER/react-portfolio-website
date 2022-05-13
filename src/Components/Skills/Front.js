import React from 'react';

const Front = ({ data }) => {
  return (
    <div className='front-end'>
      <h4 className='stack'>Front End</h4>
      <div className='techs'>
        {data.slice(0, 3).map((skill) => {
          const { id, tech, rate } = skill;
          return (
            <article className='skill' key={id}>
              <span className='tech'>{tech}</span>
              <div className='skill-container'>
                <p className='skill-value' style={{ width: `${rate}%` }}></p>
                <div className='skill-text' style={{ left: `${rate}%` }}>
                  {rate}%
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Front;
