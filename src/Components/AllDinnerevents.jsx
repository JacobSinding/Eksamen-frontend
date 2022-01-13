import { useState, useEffect } from "react";


function AllDinnerEvents({ facade, setErrorMessage, LoggedIn }) {
  const [dinnerevents, setAllDinnerevents] = useState([]);

  const getDinnerEvents = (data) => {
    setAllDinnerevents(data);
    console.log(data);
  };
  
  const deleteDinnerEvent = (data) => {
    facade.deleteButton("events/delete_Event/"+data.target.id, setErrorMessage);
    console.log(data);
  }

  useEffect(() => {
    facade.fetchData("events/getAllEvents", getDinnerEvents, setErrorMessage);
  }, [facade, setErrorMessage]);

  

  return (
    <div>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Dato & tid</th>
            <th>Lokation</th>
            <th>Ret</th>
            <th>Pris</th>
            <th>Options</th>
          </tr>
        </thead>
        {dinnerevents.map((x) => (
          <tbody>
            <tr>
              <td>{x.id}</td>
              <td>
                {x.time.date.day}/{x.time.date.month}/{x.time.date.year},
                {x.time.time.hour}:{x.time.time.minute}
              </td>
              <td>{x.location}</td>
              <td>{x.dish}</td>
              <td>{x.price}</td>
              {facade.hasUserAccess("admin", LoggedIn) && (
          <td><button id={x.id} onClick={deleteDinnerEvent}>Delete</button></td>
        )}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
export default AllDinnerEvents;
