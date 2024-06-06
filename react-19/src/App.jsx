import { useState, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitData } from "./actions";

import "./App.css";

// function App() {
// // React 18
//   const [name, setName] = useState("");
//   const [isPending, setIsPending] = useState("");

//   const handleChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("post data");
//     setIsPending(true);
//     setTimeout(() => {
//       alert(`You entered ${name}`);
//       setIsPending(false);
//     }, [500]);
//   };

//   return (
//     <form>
//       <label htmlFor="name">
//         <input type="text" id="name" onChange={handleChange} />
//       </label>
//       {isPending ? <p>{"Loading"}</p> : <p> Hello {name}</p>}
//       <button onClick={handleSubmit} disabled={isPending}>
//         Update
//       </button>
//     </form>
//   );
// }

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

function Name() {
  const { data } = useFormStatus();
  return <p>Hello {data && data.get("name")}</p>;
}

function App() {
  const submitAction = async (formData) => {
    await submitData(formData.get("name"));
  };

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <Loader />
      <SubmitButton />
      <Name />
    </form>
  );
}

export default App;
