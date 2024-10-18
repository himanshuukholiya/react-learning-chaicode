import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) str += "0123456789";
    if (characters) str += "!@#$%^&*-_+=[]{}";

    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [passwordLength, numbers, characters, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [passwordLength, numbers, characters, passwordGenerator])

  return (
    <div
    className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>

      <div
      className='flex shadow-md rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        readOnly
        ref={passwordRef} />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 hover:bg-blue-800 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6} 
          max={100} 
          value={passwordLength} 
          className='cursor-pointer'
          onChange={(e) => {setPasswordLength(e.target.value)}} />
          <label >Length: {passwordLength}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={numbers} id='numberInput' 
          onClick={() => {
            setNumbers((prev) => (!prev))
          }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={characters} 
          id='characterInput'
          onClick={() => {
            setCharacters((prev) => (!prev))
          }}  />
          <label htmlFor="characterInput">Characters</label>
        </div>

      </div>
      
    </div>
  )
}

export default App
