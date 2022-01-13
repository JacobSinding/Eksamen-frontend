import { useState } from "react";

const CreateEvent = ({ facade, setErrorMessage }) => {
  const init = { time: "", location: "", dish: "", price: "" };
  const [DEvent, setevent] = useState(init);
  const dataInput = (event) => {
    setevent({ ...DEvent, [event.target.id]: event.target.value });
  };

  const result = (data) => {
    console.log(data);
  };

  //her er eventlisterner til add event knappen
  const dataSubmit = (event) => {
    event.preventDefault();
    facade.createEvent("events/create_Event", result, setErrorMessage, DEvent);
    alert("Event has been created")
  };


//data bliver opdateret når det kommer ind, de bliver finder deres plads gennem dataInput target funktion.
  return (
    <div>
      <form onChange={dataInput} >
        <label for="time">Date & Time</label>
        <input class="form-control" type="datetime-local" id="time" name="time" />
        <label for="location">Location:</label>
        <input class="form-control" placeholder="Lokation" type="text" id="location" name="location" />
        <label for="dish">Dish:</label>
        <input class="form-control" placeholder="Ret" type="text" id="dish" name="dish" />
        <label for="price">Price:</label>
        <input class="form-control" placeholder="Pris" type="text" id="price" name="price" />
        <br/>
        <button class="btn btn-success" onClick={dataSubmit}>submit event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
