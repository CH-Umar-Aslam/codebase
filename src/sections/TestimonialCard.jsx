// TestimonialCard.jsx
import React from 'react';

const TestimonialCard = () => {
  return (
    <div className='mb-20 '>
      <h1 className='my-8 w-32 text-3xl mx-auto'>Testimonial</h1>
      <div className="max-w-sm mx-auto bg-[#276fffi] border border-white rounded-lg shadow-lg p-5 transform transition-transform hover:scale-105">
        <img className="h-40 w-40 rounded-full mx-auto mb-4 border-2 border-white" src="https://media.licdn.com/dms/image/D4D03AQF-Y-stmK7_ug/profile-displayphoto-shrink_400_400/0/1669221605402?e=1724284800&v=beta&t=-nCFj1tNE4SWdlWpkj2X1Tn2t4p-srSSRNZ_1CKbkNI" alt="Umar Aslam" />
        <div className="text-yellow-500 text-2xl mb-4 text-center">
          ★ ★ ★ ★ ★
        </div>
        <p className="italic text-white text-center mb-6">
          Ch Umar Aslam's outstanding contributions during his React JS Development internship at RecGenz were remarkable. Umar's dedication, willingness to learn, and professionalism were commendable throughout his three-month internship. His strong work ethic and commitment will undoubtedly serve as a solid foundation for his future career in software development. I wish him continued success and personal growth in his professional journey.
        </p>
        <div className="text-center">
          <div className="font-bold text-white text-lg">Uzair Javed</div>
          <div className="text-white">CEO at RecGenz</div>
        </div>
      </div>
    </div>

  );
}

export default TestimonialCard;
