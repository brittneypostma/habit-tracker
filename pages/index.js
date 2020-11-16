import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Layout from '../components/Layout';
import HabitList from '../components/HabitList'
import HabitForm from '../components/HabitForm'


const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY);
  if (loading) return <div />;
  console.log(data);
  return (
    <Layout>
      <div className="hero">
        <h1 className="title">Töövoo</h1>
      </div>

      <section className="list">
        <HabitForm />
        <HabitList />
      </section>
      <style jsx>{`
        .title {
          text-align: center;
        }
      `}</style>
    </Layout>
  );
};

export default withApollo(Home);
