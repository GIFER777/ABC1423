let temperature = 40;
let isRaining= false;
let minutes = 0;

if(isRaining==true)
{
    console.log("Идет дождь, температура- ", temperature, 
    "Ожидаю время прогулки ", minutes);
}

if(isRaining !=true)
{
    if(temperature<10 || temperature>35)
    {
        minutes = 0;

        console.log("Дождя нет, температура- ", temperature, 
        "Ожидаю время прогулки ", minutes);
    }

    if(temperature>=10 && temperature<15)
    {
        minutes=30;

        console.log("Дождя нет, температура- ", temperature, 
        "Ожидаю время прогулки ", minutes);
    }

    if(temperature>=15 && temperature<25)
    {
        minutes= 40;

        console.log("Дождя нет, температура- ", temperature, 
        "Ожидаю время прогулки ", minutes);
    }

    if(temperature>=25 && temperature<=35)
    {
        minutes=20;

        console.log("Дождя нет, температура- ", temperature, 
        "Ожидаю время прогулки ", minutes);
    }
}
