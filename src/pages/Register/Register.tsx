import React, { useState } from "react";
import {IonPage} from '@ionic/react';
import './Register.scss';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register: React.FC = () => {

    const PostData = async () => {
      try {
        const res = await axios.post(`https://webinar.dashback.in/api/register`,{
        "name" : data.name,
        "email" : data.email,
        "number" : data.number,
        "password" : data.password
      });
      
      if(res.data.message=="user created"){
        toast("You Registered Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
      } catch (error) {
        toast(error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
    }

    const [data, setData] = useState(
        {
            name : "",
            email : "",
            number : "",
            password : ""
        }
    );

    const InputEvent = (event:any) => {
        const {name,value} = event.target;

        setData((preVal) =>{
            return{
                  ...preVal,
                  [name] : value
            };
        })
    }

    const onSubmit = async (event:any) => {
      event.preventDefault();
      PostData();
  };
  return (
    <IonPage>
        <div id="register">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,128L12.6,117.3C25.3,107,51,85,76,69.3C101.1,53,126,43,152,80C176.8,117,202,203,227,250.7C252.6,299,278,309,303,277.3C328.4,245,354,171,379,170.7C404.2,171,429,245,455,272C480,299,505,277,531,256C555.8,235,581,213,606,192C631.6,171,657,149,682,154.7C707.4,160,733,192,758,192C783.2,192,808,160,834,128C858.9,96,884,64,909,64C934.7,64,960,96,985,138.7C1010.5,181,1036,235,1061,261.3C1086.3,288,1112,288,1137,261.3C1162.1,235,1187,181,1213,160C1237.9,139,1263,149,1288,144C1313.7,139,1339,117,1364,117.3C1389.5,117,1415,139,1427,149.3L1440,160L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"></path></svg>
        <ToastContainer />
          <h2 className="login-heading">Register</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label className="input-label" htmlFor="InputName">Name</label>
              <input type="text" name="name" value={data.name} onChange={InputEvent} className="form-control" id="InputName" />
            </div>
            <div className="form-group">
              <label className="input-label" htmlFor="InputEmail">Email address</label>
              <input type="email" name="email" value={data.email} onChange={InputEvent} className="form-control" id="InputEmail" />
            </div>
            <div className="form-group">
              <label className="input-label" htmlFor="InputNumber">Number</label>
              <input type="tel" name="number" value={data.number} onChange={InputEvent} className="form-control" id="InputNumber" />
            </div>
            <div className="form-group">
              <label className="input-label" htmlFor="InputPassword">Password</label>
              <input type="password" name="password" value={data.password} onChange={InputEvent} className="form-control" id="InputPassword" />
            </div>
            <button type="submit" className="btn-submit">Submit</button>
          </form>
          <h6 className="app-desc">dashback telecaller</h6>
        </div>
    </IonPage>
  );
};

export default Register;