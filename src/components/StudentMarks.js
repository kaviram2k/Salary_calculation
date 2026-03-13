import { useState } from "react";

function Studentmarks(){

const [m1,setmarks1] = useState(0);
const [m2,setmarks2] = useState(0);
const [m3,setmarks3] = useState(0);

const [tot,setTot] = useState(0);
const [average,setAvg] = useState(0);
const [grade,setGrade] = useState("");

function handleClick(){

let total = Number(m1) + Number(m2) + Number(m3);
setTot(total);

let avg = total/3;
setAvg(avg);

if(avg > 70)
setGrade("A");
else if(avg > 60)
setGrade("B");
else if(avg > 50)
setGrade("C");
else
setGrade("F");

}

return(
<div className="mt-5">

<h2>Student Marks</h2>

<input
type="number"
className="form-control mb-2"
placeholder="Mark 1"
onChange={(e)=>setmarks1(e.target.value)}
/>

<input
type="number"
className="form-control mb-2"
placeholder="Mark 2"
onChange={(e)=>setmarks2(e.target.value)}
/>

<input
type="number"
className="form-control mb-2"
placeholder="Mark 3"
onChange={(e)=>setmarks3(e.target.value)}
/>

<button
className="btn btn-success mt-2"
onClick={handleClick}
>
Calculate
</button>

<h4 className="mt-3">Total : {tot}</h4>
<h4>Average : {average}</h4>
<h4>Grade : {grade}</h4>

</div>
);

}

export default Studentmarks;