import logo from './logo.svg';
import './App.css';

function MyComponent() {
  const handleClick = () => alert('Hello, React!');
  return (
    <div>
    <h1>Hello, React!</h1>
    <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default MyComponent;
