import { useState, useCallback, useEffect, useRef } from 'react' 
import './App.css'

function App() {

  // yeh variables declare kar rahe hain
  const [length, setLength] = useState(8) // password ki length
  const [allowNum, setAllowNum] = useState(false) // numbers allow hain ya nahi
  const [allowChar, setAllowChar] = useState(false) // special characters allow hain ya nahi
  const [password, setPassword] = useState("") // password yahan store hoga

  // yeh ref ka use kar rahe hain taake password field control kar sakein
  const passwordRef = useRef(null)

  // password generator function
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (allowNum) str += "0123456789" // agar numbers allow hain toh add karenge
    if (allowChar) str += "!@#$%^&*(){}[]" // agar special characters allow hain toh add karenge

    // loop se password generate karenge
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char) // random character password mein daalenge
    }

    setPassword(pass) // final password ko set karenge
  }, [length, allowNum, allowChar, setPassword])

  // password ko clipboard pe copy karne ka function
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select() // input field select hoga
    passwordRef.current?.setSelectionRange(0, 40) // range set karenge
    window.navigator.clipboard.writeText(password) // clipboard mein copy karenge
  }, [password])

  // jab bhi length, numbers ya characters change ho toh naya password banega
  useEffect(() => {
    passwordGenerator()
  }, [length, allowNum, allowChar, passwordGenerator])

  return (
    <>
      <div className='w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-blue-200'> {/* Background color */}
        <div className='w-full max-w-3xl mx-auto shadow-xl rounded-lg px-8 py-10 bg-white'> {/* Card */}
          <h1 className="text-5xl font-bold text-center mb-8 text-blue-700">Password Generator</h1> {/* Big Heading */}
          <div className="flex shadow-md rounded-lg overflow-hidden mb-6">
            <input
              type="text"
              value={password} // generated password yahan show hoga
              className='outline-none w-full py-2 px-4 text-lg border border-gray-300'
              placeholder='Your Password'
              readOnly
              ref={passwordRef} // ref use kar rahe hain
            />
            <button
              onClick={copyPasswordToClipboard} // copy button ka function
              className='bg-blue-700 text-white px-4 py-2 text-lg hover:bg-blue-800'
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-4 justify-between">
            <div className="flex items-center gap-x-2">
              <input
                type="range"
                min={5}
                max={20}
                value={length} // password ki length adjust hogi
                className='cursor-pointer'
                onChange={(e) => { setLength(e.target.value) }} // length change karenge
              />
              <label htmlFor="">Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                defaultChecked={allowNum} // numbers allow karne ke liye checkbox
                onChange={() => { setAllowNum(prev => !prev) }} // toggle numbers
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                defaultChecked={allowChar} // characters allow karne ke liye checkbox
                id="characterInput"
                onChange={() => { setAllowChar(prev => !prev) }} // toggle characters
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
