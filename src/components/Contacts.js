import { useState } from "react";
import Contact from "./Contact";

function getContacts (){
    
    const [contacts, setContacts] = useState(
         [{
            firstName: "Барней",
            lastName: "Стинсовський",
            phone: "+380956319521",
            gender: "male"
        }, {
            firstName: "Робін",
            lastName: "Щербатська",
            phone: "+380931460123",
            gender: "female"
        }, {
            firstName: "Анонімний",
            lastName: "Анонімус",
            phone: "+380666666666"
        }, {
            firstName: "Лілія",
            lastName: "Олдровна",
            phone: "+380504691254",
            gender: "female"
        }, {
            firstName: "Маршен",
            lastName: "Еріксонян",
            phone: "+380739432123",
            gender: "male"
        }, {
            firstName: "Теодор",
            lastName: "Мотсбес",
            phone: "+380956319521",
            gender: "male"
        }],    
    );

    const render = (contacts) => {
        return (
            contacts.map((contact) => {
            return <Contact key={contact.lastName+contact.firstName} {...contact}/>
            })
        );
    };
     
    const handleSearchChange = (value) => {
        const filtredContacts = contacts.filter((contact) => contact.firstName.toLowerCase().includes(value.toLowerCase()) || contact.lastName.toLowerCase().includes(value.toLowerCase()) || contact.phone.includes(value))
        setContacts(() => {
            return filtredContacts;
        });      
    };

    return (
        <div className="contacts">
            <h2>Контакти</h2>
            <input
            type="text"
            placeholder="⌕ Пошук"
             onChange={(e) => handleSearchChange(e.target.value)}
            />
            {render(contacts)}
        </div>        
    )
};

export default getContacts;