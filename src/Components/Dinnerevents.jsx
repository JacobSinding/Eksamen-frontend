import AllDinnerEvents from "./AllDinnerevents";
function Dinnerevents({facade, setErrorMessage }) {
  return (
    <div>
      <div>
        <h3>Dinner events: <AllDinnerEvents facade={facade} setErrorMessage={setErrorMessage} /></h3>
      </div>
    </div>
  );
}
export default Dinnerevents;

