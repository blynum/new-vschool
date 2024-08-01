import { useState } from "react";
import BadgeForm from "./Components/BadgeForm"
import Badge from "./Components/Badge";
import "./App.css";

function App() {
    // here we create an array state to store the contact form data
    const [contacts, updateContacts] = useState([]);
    /*takes all of the current contacts and puts them in array plus the previous contact info
     *pass in a contact property
     *we need this function to be sent to our submit function, pass as a prop
     pass in the contact to our function(submit) so it retrieves that contact and then adds it to the contact info array
     on our form page
     */
    const addContact = (contact) => {
        updateContacts([...contacts, contact]);
    };
    return (
        //pass addcontact() as a prop to contact form
        <div className="App">
            <header>Name Badge Assignment</header>
            <BadgeForm addContact={addContact} />
            <Badge contacts={contacts} />
        </div>
    );
}
export default App;