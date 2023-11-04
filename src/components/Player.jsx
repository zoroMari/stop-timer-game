import { useRef, useState } from "react";



export default function Player() {
  const playerName = useRef();
  const [submitedName, setSubmitedName] = useState(null);

  function handleSubmit() {
    setSubmitedName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {submitedName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
