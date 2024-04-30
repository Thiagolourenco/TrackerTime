export const calculePercentage = (numbers: number[], total: number) => {
  const percentageArray: number[] = []

  numbers.forEach(number => {
    const percentage = Math.round((number / total) * 100)

    percentageArray.push(percentage)
  })

  return percentageArray
} 