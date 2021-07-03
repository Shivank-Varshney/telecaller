import React, { useEffect, useState } from "react";
import {IonPage} from '@ionic/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import "./Home.scss";

const Home: React.FC = () => {

  const [name, setstate] = useState("Shivank")

  const NextCall = async () => {
    try {
      const res = await axios.post(`https://webinar.dashback.in/api/nextcall`);
      if(res.data.message=="user Login"){
        console.log("shivank");
      }
    }catch (error) {
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

  useEffect(()=>{
    NextCall();
  },[]);

  return (
    <IonPage>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ToastContainer />
            <div className="card">
              <h3 className="user-name">{name}</h3>
              <button className="next-call-btn">Next Call</button>
            </div>
          </div>
        </div>
      </div>
    </IonPage>
  );
};

export default Home;