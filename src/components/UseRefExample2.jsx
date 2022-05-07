import { useState, useEffect, useRef } from "react"

function UseRefExample2() {
  const renders = useRef(1)
  const [namer, setNamer] = useState("")
  const prevNamer = useRef('')

  useEffect(() => {
    renders.current = renders.current + 1
    prevNamer.current = namer
  }, [namer])

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>prevNamer State: {prevNamer.current}</h2>
      <input
        type="text"
        value={namer}
        onChange={(e) => setNamer(e.target.value)}
        className="form-control mb-3"
      />
    </div>
  )
}

export default UseRefExample2
