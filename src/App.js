import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const students = [
    { key: 1, name: 'Huyen'},
    { key: 2, name: 'Hoa'},
    { key: 3, name: 'Hung'},
    { key: 4, name: 'Long'},
  ];
  
  const [current, setCurrent] = React.useState(students[0]);
  
  const handleNext = () => {
    if (current.key < 4) {
      setCurrent(students[current.key]);
    }
    else {
      setCurrent(students[0]);
    }
  }
  
  const handlePrevious = () => {
    if (current.key > 1) {
      setCurrent(students[current.key-2]);
    }
    else {
      setCurrent(students[3]);
    }
  }

  return (
    <ul>
      <li>
        学生一覧：[{students.map(student => student.name + ',')}]
      </li>
      <li>
        位置：{current.key}
      </li>
      <li>
        名前：{current.name}
      </li>
      <div>
        <button onClick={handleNext}>次に</button>
        <button onClick={handlePrevious}>前に</button>
      </div>
    </ul>
  );
}

export default App;
