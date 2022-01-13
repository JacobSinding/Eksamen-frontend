import AllDinnerEvents from "./AllDinnerevents";
function Dinnerevents({facade, setErrorMessage }) {
  return (
    <div>
      <div>
        <h5>Dinner events: <AllDinnerEvents facade={facade} setErrorMessage={setErrorMessage} /></h5>
      </div>
    </div>
  );
}
export default Dinnerevents;

