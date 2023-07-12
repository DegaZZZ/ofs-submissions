import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // Initialize votes state
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)

  const handleVote = () => {
    // Create a copy of the votes array
    const updatedVotes = [...votes]
    // Increment the vote count for the selected anecdote
    updatedVotes[selected] += 1
    // Update the votes state with the new array
    setVotes(updatedVotes)
  }
  
  // Find the index of the anecdote with the most votes
  const maxVotesIndex = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <div>
        <h2>Anecdote of the Day</h2>
        {anecdotes[selected]}
        <br />
        Votes: {votes[selected]}
      </div>
      <br />
      <Button onClick={handleVote} text="Vote" />
      <Button
        onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}
        text="Next Anecdote"
      />
      <div>
        <h2>Anecdote with the Most Votes</h2>
        {anecdotes[maxVotesIndex]}
        <br />
        Votes: {votes[maxVotesIndex]}
      </div>
    </div>
  )
}

export default App