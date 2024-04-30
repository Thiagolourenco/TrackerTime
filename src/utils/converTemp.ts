export const convertTemp = (tempMin: number) => {
  const hour = Math.floor(tempMin / 60)
  const min = tempMin % 60

  return { hour, min }
} 