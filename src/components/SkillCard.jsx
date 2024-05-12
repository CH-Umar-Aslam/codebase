import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-[#2a4357]   text-left  shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="text-lg text-center font-semibold mb-2">{skill.name}</h3>
        <p className="text-sm sm:h-20  ">{skill.description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
