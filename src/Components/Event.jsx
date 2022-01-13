import CreateEvent from "./CreateEvent";
function Events({ logout, facade, setErrorMessage }) {
    return (
        <div>
            <div>
                <h3>Create new event<CreateEvent facade={facade} setErrorMessage={setErrorMessage} /></h3>
            </div>
        </div>
    );
}
export default Events;