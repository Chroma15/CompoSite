import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Book_A_Demo.css"
import Block from "../components/Block";

function Book_A_Demo(){
    const [statusMessage, setStatusMessage] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
    
        let url = "http://127.0.0.1:5000/save-demo-request";
        fetch(url, {
            method: "POST",
            body: new FormData(event.target)
        })
        .then(r => r.json())
        .then(res => {
            console.log(res);
            setStatusMessage(res.message);
            event.target.reset();
        })
        .catch(() => {
            setStatusMessage("Something went wrong. Please try again.");
        });
    }
    return(
        <>
            <Header/>
            <div className="container">
                
            </div>
            <div className="form-container">
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label>Date from:</label>
                        <input type="date" name="date" />
                    </div>
                    <div>
                        <label >Hour:</label>
                        <input type="time" name="time" />
                    </div>
                    <div>
                        <label >Full name:</label>
                        <input type="text" name="name"  />
                    </div>
                    <div>
                        <label >Phone number</label>
                        <input type="text" name="phone"  />
                    </div>
                    <button >SEND REQUEST</button>
                </form>
                <div className="informatii">
                    <h2>OPEN HOURS</h2>
                    <h3>Weekdays</h3>
                    <h4>09:00 AM - 06:00 PM</h4>
                    <br />
                    <h3>Weekends</h3>
                    <h4>12:00PM - 4:00 PM</h4>
                </div>
            </div>
            <div className="container">
            <div className="container_block"><Block icon="content1.jpg" title="titlul 1" description="Descriere 1"/></div>
            
            <div className="container_block"><Block icon="content2.jpg" title="titlul 2" description="Descriere 2"/></div>
            </div>
            <Footer/>
        </>
    )
}


export default Book_A_Demo;