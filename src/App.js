import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeSalary from './components/EmployeeSalary';
import Studentmarks from './components/StudentMarks';

function App() {
  return (
    <div className="container mt-5">

      <EmployeeSalary/>

      <hr/>

      <Studentmarks/>

    </div>
  );
}

export default App;