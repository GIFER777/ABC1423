let temperature = 22;
let isRaining= false;
let minutes = 0;

if(isRaining==true)
{
    console.log("Идет дождь, температура- ", temperature, 
    "Ожидаю время прогулки ", minutes);
}

if(isRaining !=true)
{
    if(temperature<0 && temperature>35)
    {
        minutes = 0;
        console.log("Дождя нет, температура- ", temperature, 
    "Ожидаю время прогулки ", minutes);
    }
    if(temperature==20)
    {
        minutes = temperature;
        console.log("Дождя нет, температура- ", temperature, 
        "Ожидаю время прогулки ", minutes);
    }
    if((temperature>=0 && temperature<20)|| (temperature>20 && temperature<35))
    {
        let temp= Math.abs(20-temperature);
        minutes=20-temp;
        console.log("Дождя нет, температура- ", temperature, 
        "Ожидаю время прогулки ", minutes);
    }
}