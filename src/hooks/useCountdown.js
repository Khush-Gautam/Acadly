import { useEffect, useState } from 'react'

export function useCountdown(duration = 30) {
  const [seconds, setSeconds] = useState(duration)
  const [cycle, setCycle] = useState(1)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSeconds((current) => {
        if (current <= 1) {
          setCycle((value) => value + 1)
          return duration
        }

        return current - 1
      })
    }, 1000)

    return () => window.clearInterval(timer)
  }, [duration])

  return { seconds, cycle, progress: (seconds / duration) * 100 }
}
