import React from 'react';
import emailjs from 'emailjs-com';

function App() {

  const send_Email=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_our3fdh', 'template_7rbsq0o', e.target, 'user_cIwK9DDxrPQxi4L8rv8C1')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  }
  return (
   <div className='container'>
     <div className='row'>
       <div className ="col-md-4">
         <h2>Contact Form</h2>
         <form onSubmit={send_Email}>
           <div className="form-group">
             <input 
             type="text" 
             name="name" 
             className="form-control" 
             placeholder="enter name"
             />
           </div>
           <div className="form-group">
             <input 
             type="email" 
             name="email" 
             className="form-control" 
             placeholder="enter email"
             />
           </div>

           <div className="form-group">
             <textarea  
             name="message" 
             id=""
             cols="30"
             rows="10" 
             placeholder="Write Your Message"
             className="form-control"
             />
           </div>
           
           <div className="form-group mt-5" >
             <input 
             type="submit" 
             value="sent email" 
             className='btn btn-default'/>
           </div>
           
         </form>
       </div>
     </div>

   </div>
  );
}

export default App;
