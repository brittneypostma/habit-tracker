import { Form, Field } from '@leveluptuts/fresh'
const HabitForm = ({ setHabits }) => {
  return (
    <div className="form"><Form
      onSubmit={data => {
        console.log(data)
        setHabits(prevState => [...prevState, data.habit])
      }} >
      <Field>Habit</Field>
    </Form>
      <style jsx>{`
      `}</style>
    </div>
  );
}

export default HabitForm;
