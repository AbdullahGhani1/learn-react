import { useCallback, useEffect, useState, type ChangeEvent } from "react";

function App() {
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(8);
  const [numberAllowed, setNumberAllowed] = useState<boolean>(false);
  const [characterAllowed, setCharacterAllowed] = useState<boolean>(false);

  const generatePassword = useCallback(() => {
    const lowerCase: string = "abcdefghijklmnopqrstuvwxyz";
    const upperCase: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers: string = "0123456789";
    const symbols: string = "!@#$%^&*()_+-=;:<>,.?";

    let allChars: string = lowerCase + upperCase;
    if (numberAllowed) allChars += numbers;
    if (characterAllowed) allChars += symbols;

    let generatePassword: string = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex: number = Math.floor(Math.random() * allChars.length);
      generatePassword += allChars[randomIndex];
    }
    setPassword(generatePassword);
  }, [passwordLength, numberAllowed, characterAllowed, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [numberAllowed, characterAllowed, passwordLength, generatePassword]);
  return (
    <main className="flex flex-col justify-center items-center bg-black p-4 w-full">
      <h1 className="text-4xl font-bold text-center py-5">
        Password Generator App 🔐
      </h1>

      <div className="w-full max-w-md mx-auto bg-gray-700 shadow-md rounded-lg px-4 py-8 text-amber-600">
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
          <label htmlFor="password" className="sr-only">
            Generated Password
          </label>
          <input
            readOnly
            type="text"
            id="password"
            value={password}
            placeholder="Password"
            className="text-gray-500 bg-white outline-none w-full py-1 px-3"
          />
          <button
            type="button"
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-blue-600"
          >
            Copy
          </button>
        </div>

        <div className="flex gap-x-2 text-sm items-center">
          <div className="flex items-center gap-x-1">
            <input
              min={8}
              step={1}
              max={100}
              id="range"
              type="range"
              value={passwordLength}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPasswordLength(+e.target.value)
              }
              className="cursor-pointer accent-blue-500"
            />
            <label htmlFor="range" className="">
              Length {passwordLength}
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              checked={numberAllowed}
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="w-full mt-4 cursor-pointer accent-blue-500"
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="charInput"
              checked={characterAllowed}
              onChange={() => setCharacterAllowed((prev) => !prev)}
              className="w-full mt-4 cursor-pointer accent-blue-500"
            />
            <label htmlFor="charInput">Special Characters</label>
          </div>
        </div>
      </div>
    </main>
  );
}
export default App;
