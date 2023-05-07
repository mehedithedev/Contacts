import React from "react";
import Card from "./Components/Card";
import contacts from "./contacts"
import Avatar from "./Components/Avatar";


const CreateCard=(contact)=>{
    return <Card 
    id={contact.id}
    key={contact.id}
    name={contact.name}
    img={contact.imgURL}
    email={contact.email}
    phone={contact.phone}
    />
}

const App=()=>{
    return(
        <div>
           <h1 className="heading">Contact App</h1>
           <Avatar
            img='https://pbs.twimg.com/profile_images/1623719111950729218/Hg6XiSyJ_400x400.jpg'
           />
           {contacts.map(CreateCard)}
        
        </div>
    )
}
export default App