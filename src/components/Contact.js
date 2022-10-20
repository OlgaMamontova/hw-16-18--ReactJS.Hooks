import React from "react";

function Contact ({firstName, lastName, phone, gender}){
    if(gender){
        if (gender.toLowerCase() == 'male'){
        gender = '♂';
        } if (gender.toLowerCase() == 'female') {
            gender = '♀';
        };
    };
    
    return (
        <div className="contact">
            <p><span>{gender} </span> {lastName} {firstName}</p>
            <p className="number">{phone}</p>
        </div>        
        );
};

export default Contact;