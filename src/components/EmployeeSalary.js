import { useState } from "react";

function EmployeeSalary(){

    const [salary, setSalary] = useState(0);
    const [tax, setTax] = useState(0);
    const [nsal, setNsal] = useState(0);

function Calculation(){

    let taxValue = 0;

    if(salary > 50000){
        taxValue = salary * 10/100;
    }
    else if(salary > 30000){
        taxValue = salary * 5/100;
    }
    else{
        taxValue = 0;
    }

    setTax(taxValue);

    let netSalary = salary - taxValue;
    setNsal(netSalary);
}

return (
<div className="container">

<h3>Employee Salary Calculation</h3>

<div className="form-group">
<label>Employee Name</label>
<input type="text" className="form-control" placeholder="Employee Name"/>
</div>

<div className="form-group">
<label>Employee Salary</label>
<input
type="number"
className="form-control"
placeholder="Employee Salary"
onChange={(e)=>setSalary(Number(e.target.value))}
/>
</div>

<div className="form-group">
<label>Tax</label>
<input type="text" className="form-control" value={tax} readOnly/>
</div>

<div className="form-group">
<label>Net Salary</label>
<input type="text" className="form-control" value={nsal} readOnly/>
</div>

<button
className="btn btn-primary mt-3"
onClick={Calculation}
>
Submit
</button>

</div>
);

}

export default EmployeeSalary;