import CreateEvent from "./CreateEvent";
function Events({ logout, facade, setErrorMessage }) {
    return (
        <div>
            <div>

                <p>create <CreateEvent facade={facade} setErrorMessage={setErrorMessage} /></p>
            </div>
        </div>
    );
}
export default Events;