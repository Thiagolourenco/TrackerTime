// VALUE, vai ser o valor do setInterval

export const calculatePercentagePomodoro = (value: number, maxValue: number): number => {
  console.log("VALUE", value)
  console.log("MAX", maxValue)
  const difference = maxValue - value

  console.log("difference", difference)
  const percentage = Math.round((difference / maxValue) * 100 )

  console.log("percetageGenerate", percentage)
  return percentage
}