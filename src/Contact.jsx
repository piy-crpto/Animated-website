import React,{useState} from 'react'

const Contact = () =>
{    const [data,setData] = useState({
                   fullname:'',
                   phone:'',
                   email:'',
                   msg:'',

});
const inputEvent = (event)=>
{
     const{name,value}  = event.target;
     setData((preVal) =>
     {
             return {
               ...preVal,
               [name]:value,

             }
          }
     );
}

     const formSubmit = (e) =>
     {
                    e.preventDefault();
                    alert(`My Name is ${data.fullname}. My phone number is ${data.phone}. My email is ${data.email}. My msg is ${data.msg}.`);
     }


     return(
       <>
           <div className="my-5">
                <h1 className="text-center">
                     Contact Us
                </h1>
           </div>

           <div className="container contact_div">
                           <div className="row">
                                <div className="col-md-6 col-10 mx-auto">
                                     <form onSubmit={formSubmit} >

                                     <div className="mb-3">
                                       <label 
                                       htmlFor="exampleFormControlInput1"
                                        className="form-label">
                                        Full Name
                                      </label>
                                      <input 
                                        type="text"
                                        className="form-control"
                                         id="exampleFormControlInput1"
                                         name="fullname"
                                         value={data.fullname}
                                         onChange={inputEvent}


                                         placeholder="Enter your name" 
                                               />
                                          </div>

                                          <div className="mb-3">
                                       <label 
                                       htmlFor="exampleFormControlInput1"
                                        className="form-label">
                                        Phone
                                      </label>
                                      <input 
                                        type="number"
                                        className="form-control"
                                         id="exampleFormControlInput1"
                                         name="phone"
                                         value={data.phone}
                                         onChange={inputEvent}
                                      
                                         placeholder="mobile number" 
                                               />
                                          </div>

                                          <div className="mb-3">
                                       <label 
                                       htmlFor="exampleFormControlInput1"
                                        className="form-label">
                                         Email address
                                      </label>
                                      <input 
                                        type="email"
                                        className="form-control"
                                         id="exampleFormControlInput1"
                                         placeholder="name@example.com" 
                                         name="email"
                                         value={data.email}
                                         onChange={inputEvent}

                                               />
                                          </div>

                                         

                               <div className="mb-3">
                                   <label 
                                       htmlFor="exampleFormControlTextarea1"
                                       className="form-label">
                                            Message
                                            </label>
                                      <textarea
                                       className="form-control"
                                        id="exampleFormControlTextarea1"
                                        name="msg"
                                        value={data.msg}
                                        onChange={inputEvent}
                                         rows="3">
                                               </textarea>
                                    </div>

                                    <div className="col-12">
                                         <button className="btn btn-outline-primary" type='submit'>
                                              Sumbit Form
                                         </button>
                                    </div>
                                     </form>
                                </div>
                           </div>
           </div>
       </>
     );
};

export default Contact;