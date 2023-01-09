import Priorities from "./Priorities";
import Reminders from "./Reminders";
import ToDo from "./ToDo";
import Notes from "./Notes";
import "./Home.scss";
import Nav from "./Nav";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home-wrapper">
          <Nav />
          <div className="display-grid">
            <Priorities />
            <Reminders />
            <ToDo />
            <Notes />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
