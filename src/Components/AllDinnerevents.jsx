import { useState, useEffect } from "react";

function AllDinnerEvents({ facade, setErrorMessage }) {
  const [dinnerevents, setAllDinnerevents] = useState([]);

  const getDinnerEvents = (data) => {
    setAllDinnerevents(data);
    console.log(data);
  };

  useEffect(() => {
    facade.fetchData("events/getAllEvents", getDinnerEvents, setErrorMessage);
  }, [facade, setErrorMessage]);

  return (
    <div>
      {dinnerevents.map((x) => (
        <div>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th> Dato & tid</th>
                <th> Lokation</th>
                <th> Ret</th>
                <th> Pris</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {x.time.date.day}/{x.time.date.month}/{x.time.date.year},
                  {x.time.time.hour}:{x.time.time.minute}
                </td>
                <td> {x.location}</td>
                <td> {x.dish}</td>
                <td> {x.price}</td>
              </tr>
            </tbody>
          </table>

          <br />
        </div>
      ))}
    </div>
  );
}
export default AllDinnerEvents;
