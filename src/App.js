import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {

const data = [
  {
    name:"India",
    states:[
      {
        name:"karnataka",
        districts:["koppal","gadag"]
      },
      {
        name:"tamilnadu",
        districts:["chennai","tanjavoor"]
      },
      {
        name:"Andrapradesh",
        districts:["hydrabad"]
      }
    ]
  },
  {
    name:"srilanks",
    states:[
      {
        name:"colombo",
    districts:["xyz","qqq"]
     },
     {
      name:"ddd",
      districts:["www","eee"]
     }
    ]
  }
]

const [country,setCountry] = useState("-country-");
const [state,setState] = useState("-State-");
const [district,setDistrict] = useState("-district-");
const [states,setStates] = useState([]);
const [districts,setDistricts] = useState([]);

const changecountry = (event)=>{
setCountry(event.target.value)
setStates(data.find(ctr=>ctr.name===event.target.value).states);
setDistrict("-district-");
}

const changeState = (event) =>{
setState(event.target.value);
setDistricts(states.find(state=>state.name===event.target.value).districts);
}

const changeDistrict = (event)=>{
  event.preventDefault();
  setDistrict(event.target.value);

}

  return (
    <>
    <div className='content'>
    <select name='country' id='country' value={country} onChange={changecountry} className='btn btn-secondary dropdown-toggle'>
      <option  className='dropdown-item'>--Country--</option>
     {data.map(ctr=>(
      <option value={ctr.name} className='dropdown-item'>{ctr.name}</option>
     ))}
    </select>

    <select name='states' value={state} id='state' onChange={changeState} className='btn btn-secondary dropdown-toggle'>

      <option className='dropdown-item'>--state--</option>
      {states.map(state=>(
        <option value={state.name} className='dropdown-item'>{state.name}</option>
      ))}
    </select>

    <select name='districts' value={district} onChange={changeDistrict} className='btn btn-secondary dropdown-toggle'>
    <option className='dropdown-item'>--district--</option>
    {districts.map(district=>(
      <option value={district} className='dropdown-item'>{district}</option>
    ))}
    </select>

    </div>
    </>
  );
}

export default App;
