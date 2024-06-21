import { useState, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitAction } from "./actions";

import "./App.css";

/*
 * React 18 Form
 */
/*
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
    }, [500]);
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
*/
/*
 * React 19 Form
 */

function Loader() {
  const { pending } = useFormStatus();
  return <div>{pending && "Loading..."}</div>;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      Update
    </button>
  );
}

function Name({ name }) {
  return <p>Hello in 19 {name}</p>;
}

function App() {
  console.info("React 19 form");

  const [state, formAction] = useActionState(submitAction, { name: "" });

  return (
    <form action={formAction}>
      <input type="text" name="name" />
      <Loader />
      <SubmitButton />
      <Name name={state?.name} />
    </form>
  );
}

export default App;
