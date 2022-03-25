import {useState , useEffect} from "react"

function getLocalData(){
  let review = JSON.parse(localStorage.getItem("details"));
  if(review){
    return review;
  }else{
    return [];
  }
}

function Table(){
const [feedback , setFeedBack] = useState(getLocalData());
var rev =  JSON.parse(localStorage.getItem ("details"));

useEffect(()=>{
    setFeedBack(rev)
}, []);

   return(
     <>
     <div className="table-container">
     <h2 className="ms-5">All Feedback</h2>
     <table className="table table-bordered ms-5 mt-3">
  <thead>
    <tr>
      <th scope="col">Form</th>
      <th scope="col">Review</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Service</th>
      <th scope="col">Beverage</th>
      <th scope="col">Cleanliness</th>
      <th scope="col">Overall</th>
      <th scope="col">Name</th>
    </tr>
  </thead>
  <tbody>
    {
      rev.map((num,key)=>{
          return(
            <tr key={key}>
              <th scope="row"> Aromatic Bar</th>
                <td>{num.name}</td>
              <td>{num.text}</td>
              <td>{num.number}</td>
              <td>{num.email}</td>
              <td>{num.question1}</td>
              <td>{num.question2}</td>
              <td>{num.question3}</td>
              <td>{num.question4}</td>

              </tr>
          );
      })

    }

  </tbody>
</table>
</div>

     </>
   )
 }

 export default Table;
