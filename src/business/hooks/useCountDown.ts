import { useState, useEffect } from 'react'

export const useCountDown = (totalTime: number ) => {
  const [countDown, setCountDown] = useState<number>(totalTime)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const [isInit, setIsInit] = useState<boolean>(false)

  console.log("INIT", isInit)
  useEffect(() => {

      if(countDown === 0 || isPaused) {
        return
      }
  
      const interval = setInterval(() => {
        setCountDown((prev) => prev - 1)
      }, 1000)
  
    

    return () => clearInterval(interval)
  }, [isPaused])

  const toggle = () => {
    setIsPaused((prev) => !prev)
  }

  const reset = () => setCountDown(totalTime)

  return { countDown, toggle, reset, isPaused }
}