import { useState } from 'react'

const HabitButton = ({ date }) => {
  const [complete, setComplete] = useState(false)
  return (
    <div className="date-wrapper">
      <p>{date.getMonth() + 1}/{date.getDate()} </p>
      <div><button onClick={() => setComplete(!complete)}>
        {complete ? 'X' : 'O'}
      </button></div>
      <style jsx>{`
        .date-wrapper {
          display: grid;
        }
      `}</style>
    </div>
  );
}


export default HabitButton;