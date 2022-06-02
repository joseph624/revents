import React, {useState} from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import Navbar from '../../features/nav/NavBar';
import { Fragment } from 'react';

function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <h1>Re-vents</h1>
      <Navbar setFormOpen={setFormOpen} />
      <Container className='main'>
         <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
    </>
  );
}

export default App;
