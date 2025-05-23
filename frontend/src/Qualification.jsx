import React from 'react';

function Qualification() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <div className="flex flex-col md:flex-row gap-12">
        <div>
          <h1 className="text-yellow-400 text-3xl font-semibold mb-4">Technical skills</h1>
          <ul className="ml-4 list-disc text-white space-y-2">
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>React Router DOM</li>
            <li>.NET & ASP.NET Core</li>
            <li>C# Programming</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
        <div>
          <h1 className="text-yellow-400 text-3xl font-semibold mb-4">Soft skills</h1>
          <ul className="ml-4 list-disc text-white space-y-2">
            <li>Problem-solving</li>
            <li>Team Collaboration</li>
            <li>Quick Learning</li>
            <li>Communication</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Qualification;
