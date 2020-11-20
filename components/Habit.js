import HabitButton from './HabitButton'

const colors = [
  'var(--l-600)',
  'var(--l-700)',
  'var(--l-800)',
  'var(--l-900)'
]

const Habit = ({ habit, idx }) => {
  const dates = getLast5Days()
  return (
    <article>
      <h3>{habit}</h3>
      <section>
        {dates.map(date => (
          <HabitButton key={date.getTime()} date={date} />
        ))}
      </section>
      <style jsx>{`
      article {
        margin-top: 2.5rem;
        padding: 20px;
        border-radius: 15px;
        box-shadow: var(--lgShadow);
      }
        h3 {
          border-bottom: solid 4px ${colors[idx]};
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