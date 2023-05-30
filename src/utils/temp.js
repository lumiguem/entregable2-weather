export const kelvinToCelcius = (tempK) =>{
return `${(tempK - 273.15).toFixed(0)} °C`
}

export const kelvinToFahrenheit = (tempK) => {
    return `${((tempK - 273.15) *(9/5) + 32).toFixed(0)} °F`
}