const HabitForm = () => {
  return (
    <form>
      <label for="habit">Habit</label>
      <input type="text" name="habit" id="habit" />
      <div className="wrapper">
        <button onSubmit={data => {
          console.log(data)
        }} >
          Submit
      </button>
        <button onSubmit={data => {
          console.log("canceled")
        }}>
          Cancel
        </button>
      </div>
      <style jsx>{`
       form {
          display: grid;
          justify-content: center;
        }
        input {
          padding: 0.5rem 1rem;
          margin: 0.5rem auto 1rem;
        }
        .wrapper {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          place-content: center;
        }


      `}</style>
    </form>
  );
}

export default HabitForm;
