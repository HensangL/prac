import React from 'react'
import Recentcard from './components/Recentcard'
import portfolio from './portfolio.png'
import school from './school.png'

function Recent() {
  return (
    <div className='flex gap-8'>
      <Recentcard
      pic={portfolio}
      heading="Portfolio website"
      description="A modern, responsive portfolio showcasing my projects, skills, and experience—built with React and Tailwind CSS for a clean and interactive user experience."
      link="google.com"

      />
       <Recentcard
      pic={school}
      heading="School website"
      description="An all-in-one system for managing school operations, from students to reports"
      link="google.com"

      />
    </div>
  )
}

export default Recent