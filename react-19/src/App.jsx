import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitFormAction } from "./actions";
import "./App.css";

/*
 * React 18 Form
 */
// /*
function App() {
  // React 18
  console.info("React 18 form");

  const [name, setName] = useState("");
  const [isPending, setIsPending] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPending(true);
    setTimeout(() => {
      //call API
      setIsPending(false);
    }, 500);
  };

  return (
    <form>
      <input type="text" name="name" onChange={handleChange} />
      {isPending ? <p>{"Loading"}</p> : <p> Hello in React 18 {name}</p>}
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
    </form>
  );
}

// */
// /*
function Loader() {
  const { pending } = useFormStatus();
  return <div>{pending && "Loading"}</div>;
}

const RenderName = ({ name }) => {
  const { pending } = useFormStatus();

  return !pending && <p>Hello in React 19 {name} </p>;
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className={"submitButton"} disabled={pending}>
      Update
    </button>
  );
};

function App() {
  // React 19
  console.info("React 19 form");

  const [state, formAction] = useActionState(submitFormAction, { name: "" });

  return (
    <form action={formAction}>
      <input type="text" name="inputName" />
      <Loader />
      <RenderName name={state?.name} />
      <SubmitButton />
    </form>
  );
}
export default App;
*/
