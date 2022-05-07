import { useState, useEffect, useRef, useMemo } from "react"

function useMemoExample() {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)

  const renders = useRef(1)

//   const sqrt = getSqrt(number)
  const sqrt = useMemo(() => getSqrt(number),[number])

  useEffect(() => {
    renders.current = renders.current + 1
  })

  const onClick = () => {
    console.log("test")
    setInc((prevState) => {
        console.log(prevState + 1)
        return prevState + 1
      })
  }

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="form-control w-25"
      />
<h2>The square root of number {sqrt}</h2>

      <button onClick={onClick} className="btn btn-primary">
        Re render
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  )
}

function getSqrt(n) {
    for(let i = 0; i<=10000; i++) {
        console.log(i)
    }
    console.log('expensive function called')
    return Math.sqrt(n)
}

export default useMemoExample
