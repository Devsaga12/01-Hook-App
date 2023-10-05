import { useState } from "react";
import { usesCounter } from "../Hooks";


export const MemoHook = () => {
  const { counter, aumento } = usesCounter(10);

  const [show, setshow] = useState(true);

  return (
    <>
      <h1>
        Counter:
        <Small value={counter} />
      </h1>
      <hr />

      <button className="btn btn-danger" onClick={() => aumento()}>
        +1
      </button>

      <button className="btn btn-primary" onClick={() => setshow(!show)}>
        Show/Hiden {JSON.stringify(show)}
      </button>
    </>
  );
};
