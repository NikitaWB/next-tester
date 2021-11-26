import { useEffect, useState } from 'react'

function Typescript() {
  const [counter, setCounter] = useState(0.0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(count => count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>This is written with Typescript!</h1>
      <h2>You have been here for {counter} seconds...</h2>
    </div>
  )
}

export default Typescript
