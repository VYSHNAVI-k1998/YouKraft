// Dependencies imports
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';


// Local imports
import logo from '../assets/images/logo.jpeg';

// Style imports
import Fo from './Form.module.scss';

const Form = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);
    const [error3, setError3] = useState(false);
    const [error4, setError4] = useState(false);
    const [error5, setError5] = useState(false);
    const [error6, setError6] = useState(false);
    const [finalName, setFinalName] = useState("");
    const [finalAge, setFinalAge] = useState("");
    const [finalEmail, setFinalEmail] = useState("");
    const [finalContact, setFinalContact] = useState("");

    function register() {
        setError1("");
        setError2("");
        setError3("");
        setError4("");
        setError5("");
        setError6("");
        if (name === "" || name.replace(/\s/g, "").length === 0 || name.trim() === "") {
            setError1(true);
        }
        else if (age === "" || age.replace(/\s/g, "").length === 0 || age.trim() === "") {
            setError2(true);
        }
        else if (age >= "20" && age <= "60") {
            setError3(true);
        }
        else if (email === "" || email.replace(/\s/g, "").length === 0 || email === undefined) {
            setError4(true);
        }
        else if (contact === "" || contact.trim() === "") {
            setError5(true);
        }
        else if (contact.length >= 10) {
            setError6(true);
        }
        else {
            sendResponse();
        }
    }

    function sendResponse() {
        setFinalName(name);
        setFinalAge(age);
        setFinalEmail(email);
        setFinalContact(contact);
    }

    function reset() {
        setName("");
        setAge("");
        setEmail("");
        setContact("");
        setFinalName("");
        setFinalAge("");
        setFinalEmail("");
        setFinalContact("");
    }

    return (
        <div className={Fo.maincontainer}>
            <div className={Fo.leftform}>
                <Paper>
                    <div className={Fo.logoholder}>
                        <Paper>
                            <img src={logo} alt="yklogo" className={Fo.image} />
                        </Paper>

                    </div>
                    <h3 className={Fo.heading}>Welcome to YouKraft Lobby! <br />Please Register to proceed</h3>
                    <div className={Fo.form}>
                        
                        <input type="text" className={Fo.inputbox} required placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }}></input>
                        <lable className={Fo.caution}>{error1 === true ? "Please enter your name" : null}</lable>
                        
                        <input type="text" className={Fo.inputbox} placeholder="Age" value={age} onChange={(e) => { setAge(e.target.value) }}></input>
                        <lable className={Fo.caution}>{error2 === true ? "Please enter your age" : error3 === true ? "Age should be between 20 and 60" : null}</lable>
                        
                        <input type="email" className={Fo.inputbox} required placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                        <lable className={Fo.caution}>{error4 === true ? "Please enter your email" : null}</lable>
                        
                        <input type="tel" className={Fo.inputbox} required placeholder="Phone Number" value={contact} onChange={(e) => { setContact(e.target.value) }}></input>
                        <lable className={Fo.caution}>{error5 === true ? "Pleae enter your contact number" : error6 === true ? "Contact number should not exceed 10 digits" : null}</lable>
                        <div className={Fo.submitbutton}>
                            <button className={Fo.submit} onClick={() => reset()}>Reset</button>
                            <button className={Fo.submit} onClick={() => register()}>Submit</button>
                        </div>
                    </div>
                </Paper>
            </div>
            <div className={Fo.rightresponse}>
                <h3 className={Fo.heading}>Your Response!</h3>
                <div className={Fo.responseholder}>
                    <h3 className={Fo.data}>Name: {finalName}</h3>
                    <h3 className={Fo.data}>Age: {finalAge}</h3>
                    <h3 className={Fo.data}>Email: {finalEmail}</h3>
                    <h3 className={Fo.data}>Contact: {finalContact}</h3>
                </div>
            </div>
        </div>
    );
};

export default Form;