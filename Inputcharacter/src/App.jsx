import { useState, useEffect, use } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState("")
  const [charCount, setCharCount] = useState(0)
  const [wordCount, setWordCount] = useState(0)

  useEffect(() => {
    const char = text.replace(/\s/g,"").length
    setCharCount(char)

    const word = text.trim() ? text.trim().split(/\s+/).length : 0
    setWordCount(word)

  }, [text])
  return (
    <>
      <h1>Input text</h1>
      <textarea
      placeholder='enter your text'
      value={text}
      onChange={(e)=>setText(e.target.value)}

      />
      <h2>character count : {charCount}</h2>
      <h2>word count : {wordCount}</h2>
      
    </>
  )
}

export default App
