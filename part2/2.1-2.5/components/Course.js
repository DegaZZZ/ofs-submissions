import React from 'react';

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <TotalExercises total={totalExercises} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <h2>{course.name}</h2>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} - {part.exercises} exercises
    </p>
  )
}

const TotalExercises = ({ total }) => {
  return (
    <p><strong>Total exercises: {total}</strong></p>
  )
}

export default Course 
