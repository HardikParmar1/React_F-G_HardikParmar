import {useState,useEffect} from "react";
import flag from "../images/flag.svg";
import 'bootstrap/dist/js/bootstrap.js'

//  getting data from localStorage
function getLocalData(){
  let review = JSON.parse(localStorage.getItem("details"));
  if(review){
    return review;
  }else{
    return [];
  }
}

function Form(){
const [formData , setFormData] = useState({
  name:"",
  text:"",
  number:"",
  email:"",
  question1:"",
  question2:"",
  question3:"",
  question4:""
});

const [data , setData] = useState(getLocalData());
  function  handleChange(e){
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [name]:value});
    setErrors(false);
}
const [errors , setErrors] = useState(false);
  function handleSubmit(e){
      e.preventDefault();
      if(!formData.text ||!formData.number ||!formData.name ||!formData.email ){
        setErrors(true);
      }else{
        setData([...data , formData]);
        setErrors(false)
      }
      console.log(errors);
  }
// storing data to localStorage
  useEffect(()=>{
      localStorage.setItem("details", JSON.stringify(data));
  },[data])

  return(
    <>
    <div className="text-left ms-5 mt-3">
      <h1>Aromatic Bar</h1>
      <p>We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you</p>
    </div>
    <div className="container-fluid ">
      <form>
        <div className="row">
          <div className="col-md-5 mt-3 mx-auto">
            <label htmlFor="exampleFormControlInput1" className="form-label">Text </label>
            <input type="text" className="form-control" onChange={handleChange} name="text" placeholder="Hello" value={formData.text}/>
            { errors &&
            <div className="error">
            Error: This field is mandtory
            </div>
            }
          </div>

          <div className="col-md-5 mt-3 mx-auto ">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email field</label>
            <input type="email" className="form-control" onChange={handleChange} name="email"  placeholder="name@example.com" value={formData.email}/>
            {errors &&
            <div className="error">
            Error: This field is mandtory
            </div>
            }
            </div>
        </div>

      <div className="row">
        <div className="col-md-5 mt-3 mx-auto">
          <label htmlFor="exampleFormControlInput1" className="form-label">Phone Field</label>
          <div className="input-group ">
          <span className="input-group-text"><img src={flag} alt="flag-icon" /></span>
          <input type="tel" className="form-control" onChange={handleChange} name="number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={formData.number} required/>
          </div>
          {errors &&
          <div className="error">
          Error: This field is mandtory
          </div>
          }
        </div>
      <div className="col-md-5 mt-4 mx-auto">
        <label htmlFor="exampleFormControlInput1" className="form-label d-block">Rating</label>
          <p>1. Please rate the quality of the service you received from your host</p>
          <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio"  onChange={handleChange}  name="question1"  value="Excellent"/>
          <label className="form-check-label"  htmlFor="inlineRadio1">Excellent</label>
          </div>
          <div className="form-check form-check-inline">
          <input className="form-check-input mx-auto" type="radio"  onChange={handleChange} name="question1"  value="Good"/>
          <label className="form-check-label ms-2" htmlFor="inlineRadio2"> Good</label>
          </div>
          <div className="form-check form-check-inline">
          <input className="form-check-input mx-auto" type="radio"  onChange={handleChange} name="question1"  value="Fair" />
          <label className="form-check-label ms-2" htmlFor="inlineRadio3"> Fair</label>
          </div>
          <div className="form-check form-check-inline">
          <input className="form-check-input mx-auto" type="radio"  onChange={handleChange} name="question1"  value="Bad" />
          <label className="form-check-label ms-2" htmlFor="inlineRadio3"> Bad</label>
          </div>
      </div>
    </div>

      <div className="row">
        <div className="col-md-5 mx-auto mt-5">
          <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
          <input type="text" className="form-control" onChange={handleChange} name="name"  value={formData.name}/>
          {errors &&
          <div className="error">
          Error: This field is mandtory
          </div>
          }
          </div>
          <div className="col-md-5 mx-auto">
          <p className="mt-3">2. Please rate the quality of your beverage.</p>
          <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio"  onChange={handleChange} name="question2"  value="Excellent"/>
          <label className="form-check-label" htmlFor="inlineRadio1">Excellent</label>
          </div>
          <div className="form-check form-check-inline">
          <input className="form-check-input mx-auto" type="radio"  onChange={handleChange} name="question2"  value="Good"/>
          <label className="form-check-label ms-2" htmlFor="inlineRadio2"> Good</label>
          </div>
          <div className="form-check form-check-inline">
          <input className="form-check-input mx-auto" type="radio"  onChange={handleChange} name="question2"  value="Fair" />
          <label className="form-check-label ms-2" htmlFor="inlineRadio3"> Fair</label>
          </div>
          <div className="form-check form-check-inline">
          <input className="form-check-input mx-auto" type="radio"  onChange={handleChange} name="question2"  value="Bad" />
          <label className="form-check-label ms-2" htmlFor="inlineRadio3"> Bad</label>
          </div>

          <p className="mt-3">3. Was our restaurant clean?</p>
          <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio"  onChange={handleChange} name="question3"  value="Excellent"/>
          <label className="form-check-label" htmlFor="inlineRadio1">Excellent</label>
          </div>
          <div className="form-check form-check-inline">
          <input className="form-check-input mx-auto" type="radio"  onChange={handleChange} name="question3"  value="Good"/>
          <label className="form-check-label ms-2" htmlFor="inlineRadio2"> Good</label>
          </div>
          <div className="form-check form-check-inline">
          <input className="form-check-input mx-auto" type="radio"  onChange={handleChange} name="question3"  value="Fair" />
          <label className="form-check-label ms-2" htmlFor="inlineRadio3"> Fair</label>
          </div>
          <div className="form-check form-check-inline">
          <input className="form-check-input mx-auto" type="radio"  onChange={handleChange} name="question3"  value="Bad" />
          <label className="form-check-label ms-2" htmlFor="inlineRadio3"> Bad</label>
          </div>

          <p className="mt-3">4. Please rate your overall dining experience</p>
          <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio"  onChange={handleChange} name="question4"  value="Excellent"/>
          <label className="form-check-label" htmlFor="inlineRadio1">Excellent</label>
          </div>
          <div className="form-check form-check-inline">
          <input className="form-check-input mx-auto" type="radio"  onChange={handleChange} name="question4"  value="Good"/>
          <label className="form-check-label ms-2" htmlFor="inlineRadio2"> Good</label>
          </div>
          <div className="form-check form-check-inline">
          <input className="form-check-input mx-auto" type="radio"  onChange={handleChange} name="question4"  value="Fair" />
          <label className="form-check-label ms-2" htmlFor="inlineRadio3"> Fair</label>
          </div>
          <div className="form-check form-check-inline">
          <input className="form-check-input mx-auto" type="radio"  onChange={handleChange} name="question4"  value="Bad" />
          <label className="form-check-label ms-2" htmlFor="inlineRadio3"> Bad</label>
          </div>

        </div>
      </div>

  <button type="submit" onClick={handleSubmit} className="btn btn-success">Submit</button>

  </form>
</div>

    </>
  )
}


export default Form;
