import { useState, useEffect } from "react";


function AllDinnerEvents({ facade, setErrorMessage, LoggedIn }) {
  const [dinnerevents, setAllDinnerevents] = useState([]);

  const getDinnerEvents = (data) => {
    setAllDinnerevents(data);
  };
  
  //delete dinner event, bruger target til at hente id på hvilken der skal slettes.
  const deleteDinnerEvent = (d) => {
    facade.deleteButton("events/delete_Event/"+d.target.id, setErrorMessage);
  }

  //fetcher alle events
  useEffect(() => {
    facade.fetchData("events/getAllEvents", getDinnerEvents, setErrorMessage);
  }, [facade, setErrorMessage]);

  
//Opretter table, mapper alle dinnerevents, displaye info som i. Knap kun synlig for admin brugere.
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
        {dinnerevents.map((i) => (
          <tbody>
            <tr>
              <td>{i.id}</td>
              <td>
                {i.time.date.day}/{i.time.date.month}/{i.time.date.year},
                {i.time.time.hour}:{i.time.time.minute}
              </td>
              <td>{i.location}</td>
              <td>{i.dish}</td>
              <td>{i.price}</td>
              {facade.hasUserAccess("admin", LoggedIn) && (
          <td><button id={i.id} onClick={deleteDinnerEvent}>Delete</button></td>
        )}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
export default AllDinnerEvents;
