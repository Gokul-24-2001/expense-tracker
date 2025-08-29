import React from 'react'
import { useState } from 'react'
function Add_Expense() {
  const [formdata, setFormdata] = useState({
    Description:"",
    amount:"",
    date:""
  })
  const[data,setData]=useState([]);
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormdata((prevdata)=>({
...prevdata,[name]:value
    }));
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
   setData((prev)=>[...prev,formdata]);
   console.log(data);

  }
  
  return (
  <div className='form d-flex justify-content-center p-5'>
    <form className='form-input' onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
<textarea className="form-control"  name="Description" value={formdata.Description} onChange={handleChange} id="description" rows="4" placeholder="Write your desc... here..."></textarea>      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input type="number" className="form-control w-auto" name="amount" value={formdata.amount} onChange={handleChange} id="email" placeholder="Enter amount"/>
      </div>

       <div className="mb-3">
        <label htmlFor="eventDate" className="form-label">Event Date</label>
        <input type="date"  value={formdata.date} onChange={handleChange}name="date" className="form-control  w-auto" id="eventDate" min="2025-01-01" max="2025-12-31"/>
        {/* <small class="form-text text-muted">Choose a date in 2025 only.</small> */}
      </div>

      {/* <div class="mb-3">
        <label for="country" class="form-label">Currency</label>
        <select class="form-select" id="country">
          <option selected disabled>Choose...</option>
          <option value="india">Rs.</option>
          <option value="usa">$</option>
          <option value="uk">CHF</option>
                    <option value="uk">Rp</option>
                    
        </select>
        
      </div> */}


      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
{data.map((d)=>{
  return <p>{d.amount}</p>
})}

</div>                
  )
}

export default Add_Expense