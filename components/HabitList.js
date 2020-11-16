import Habit from './Habit'

const HabitList = () => {
  return (
    <section>
      <h2>My Habits</h2>
      <hr />
      <section className="habits">
        <Habit />
        <Habit />
        <Habit />
      </section>
      <style jsx>{`
        h2 {
          text-align: center;
          margin-top: 2.5rem;
        }
        .habits {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          justify-items: center;
          gap: 2rem;
        }
      `}</style>
    </section>
  );
}

export default HabitList;