import logo from './logo.svg';
import './App.css';
import { Button, Col, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h2>Hello components</h2>

      <Row className="mx-0">
        <Button as={Col} variant="primary">Button #1</Button>
      </Row>



    </div>
  );
}

export default App;
