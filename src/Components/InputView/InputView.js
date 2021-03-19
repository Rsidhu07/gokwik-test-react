import React, { Fragment, useState, useEffect } from "react";
import './InputView.css';

const checkInputValidity = (value, rules ) => {

    let isValid = true;

    if(!rules){
        return true;
    }

    if(rules.required){
        isValid = value.trim()!=='' && isValid;
    }

    if(rules.isMobileNumber){
        const pattern = /^[6-9]\d{9}$/ ;
        isValid = pattern.test(value) && isValid;
    }


    

    return isValid;
};

const InputView = (props) => {

    const [inputNumber, setInputNumber] = useState("");
    const [inputValid, setInputValid] = useState(false);
    const [inputSubmitted, setInputSubmitted] = useState(false);

    useEffect(()=>{

        if(localStorage.getItem('InputMobileNumber')){
            setInputSubmitted(true);
        }

    }, []);

    const onInputChangeHandler = (e)=>{
        const inputValue = e.target.value;

        setInputNumber(inputValue);

        const rules = {
            required: true,
            isMobileNumber: true
        };

        const valid = checkInputValidity(inputValue,rules);

        if(valid){
            setInputValid(true);

        } else {
            setInputValid(false);
        }
    };

    const inputNumberButtonClickHandler = ()=>{
        setInputSubmitted(true);
        localStorage.setItem('InputMobileNumber', inputNumber);
    };

    const inputView = (
        <Fragment>
            <span className='static-text'> You have WON Paytm Gift Card of ₹200 for <b>placing the
            order on Man Matters.</b></span>
            <input value={inputNumber} onChange={onInputChangeHandler} className={inputValid? 'input-number' : 'input-number invalid'} placeholder='Enter Number Here'></input>
            <button disabled={!inputValid} onClick={inputNumberButtonClickHandler} className='input-number-button'>Wow! Get my Paytm Gift Card &gt;</button>
        </Fragment>
    );

    return (
      <Fragment>
        {inputSubmitted ? <h3>Thank you for submitting the Number, 
              you will recieve the code soon!</h3>
        : inputView      
        }
      </Fragment>
    );
}

export default InputView;
