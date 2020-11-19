import HabitButton from './HabitButton'

const Habit = ({ habit }) => {
  const dates = getLast5Days()
  return (
    <article>
      <h3>{habit}</h3>
      <section>
        {dates.map(date => (
          <HabitButton key={date.getMilliseconds()} date={date} />
        ))}
      </section>
      <style jsx>{`
      article {
        margin-top: 2.5rem;
      }
        h3 {
          text-align: center;
        }
        section {
          display: flex;
          gap: 1rem;
        }
      `}</style>
    </article>
  );
}

export default Habit;


const getLast5Days = () => {
  const dates = '01234'.split('').map(day => {
    const tempDate = new Date()
    tempDate.setDate(tempDate.getDate() - day)
    return tempDate
  })
  return dates
}