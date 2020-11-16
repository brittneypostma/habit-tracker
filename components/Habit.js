import HabitButton from './HabitButton'

const Habit = () => {
  return (
    <article>
      <h3>Habit Title</h3>
      <section>
        <HabitButton />
        <HabitButton />
        <HabitButton />
        <HabitButton />
        <HabitButton />
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