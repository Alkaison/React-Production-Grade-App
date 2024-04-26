import React, { useCallback, useState } from "react";

/**
 * Renders a test component for checking the ESLint & Prettier setup.
 *
 * @return {JSX.Element} The rendered test component.
 */
function Test() {
  const [username, setUsername] = useState("Alkaison");

  const handleUsernameChange = useCallback((e) => {
    setUsername(e.target.value);
  }, []);

  const resetUserNameValue = useCallback(() => {
    setUsername("");
  }, []);

  const setRandomUserName = useCallback(() => {
    const randomUserNames = ["Mike", "Tyson", "Jack", "Jill", "Jen", "Fin", "Sam", "Valt", "Kolin", "Jas"];
    const index = Math.floor(Math.random() * randomUserNames.length);
    setUsername(randomUserNames[index]);
  }, []);

  return (
    <div>
      <p>
        A test component for checking the ESLint & Prettier setup. Free feel to make error in this component and ESLint
        with detect the problems ask to resolve them.
      </p>

      <p>ESLint checks your code for errors and warnings.</p>

      <p>Prettier formats your code on saving the file. Making consistency in your code styles for whole project.</p>

      <p>
        Created By:{" "}
        <a href="https://github.com/Alkaison" target="_blank" rel="noreferrer">
          Alkaison
        </a>
      </p>

      <p>Your Name: {username}</p>

      <input type="text" placeholder="Your Full Name" value={username} onChange={handleUsernameChange} />

      <button type="button" onClick={setRandomUserName}>
        Surprise ME!
      </button>

      <button type="button" onClick={resetUserNameValue}>
        Reset
      </button>
    </div>
  );
}

export default Test;
