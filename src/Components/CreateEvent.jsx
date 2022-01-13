import { useState } from "react";

const CreateEvent = ({ facade, setErrorMessage }) => {
  const init = { time: "", location: "", dish: "", price: "" };
  const [DEvent, setevent] = useState(init);
  const dataInput = (event) => {
    setevent({ ...DEvent, [event.target.id]: event.target.value });
    console.log(DEvent);
  };
  const result = (data) => {
    console.log(data);
  };
  const dataSubmit = (event) => {
    event.preventDefault();
    facade.createEvent("events/create_Event", result, setErrorMessage, DEvent);
  };



  return (
    <div>
      <form onChange={dataInput} >
        <label for="time">time:</label>
        <input type="datetime-local" id="time" name="time" />
        <label for="location">location:</label>
        <input type="text" id="location" name="location" />
        <label for="dish">dish:</label>
        <input type="text" id="dish" name="dish" />
        <label for="price">price:</label>
        <input type="text" id="price" name="price" />
        <button onClick={dataSubmit}>submit event</button>
      </form>
    </div>
    
  );
};

export default CreateEvent;
