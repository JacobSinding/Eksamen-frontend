import AllDinnerEvents from "./AllDinnerevents";
function Dinnerevents({facade, setErrorMessage }) {
  return (
    <div>
      <div>

        <p>Dinner events: <AllDinnerEvents facade={facade} setErrorMessage={setErrorMessage} /></p>
      </div>
    </div>
  );
}
export default Dinnerevents;

