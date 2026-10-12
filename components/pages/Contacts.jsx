import './Contacts.css';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import Footer from '../Footer';
import { ToastContainer, toast } from 'react-toastify';
function Contacts(){
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors ,isSubmitting},
  } = useForm()
//   function doSubmit(data){
//     console.log(data);
//   }

  async function sendData(e){
    // e.preventDefault();
    console.log(e.target);
    // const formData = new FormData(e);
    try{
        const response = await axios.post(
            'http://localhost:5174/submit',
            // Object.fromEntries(formData.entries())
            e
        );
        console.log(response.data);
    }catch(err){
        console.error('Error : ',err.response?.data || err.message);
    }
    document.getElementById('contactForm').reset();
  }
  function showToast(err){
    if(err){
        toast.error(err.message,{autoClose: 3000,});
        // alert(err.message);
    }
  }
    return <div className="contact_form">
        <form onSubmit={handleSubmit(sendData)} id='contactForm' >
        <h1>SEND US A MESSAGE</h1>
        <input type="text" placeholder="Name" {...register('name',
            {
                required:true,
                minLength:{value:2,message:"Name should be atleast 2 chars long"}
            }
        )} />
        {/* <p>{showToast(errors.name)}</p>
        <ToastContainer limit={1}/> */}
        <input type="email" placeholder="Enter your E-Mail" {...register('email')} />
        <input type="text" placeholder="Subject" {...register('subject')} />
        <textarea name="message" id="message" placeholder="Message" rows={10} cols={20} {...register('message',
            {
                required:true,
                minLength:{value:5,message:"Message should be atleast 5 chars long"}
            }
        )}></textarea>
        {/* <p>{showToast(errors.message)}</p> */}
        {/* <ToastContainer limit={1}/> */}
        <div className="btn">
            <button type='submit' disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Submit'}</button>
        </div>
    </form>
    <Footer/>
    </div>
    //TODO 
    //TODO1 : to make send functionality work  ->DONE
    //TODO2 : add toaster if the input requirement is not fulfilled
}
export default Contacts;
