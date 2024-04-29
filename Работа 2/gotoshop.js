let time = 19;
let goToDairy=false;
let goToStore=false;
let goToMarket=false;

if((time>=8 && time<13) || (time>14 && time<19))
{
    goToDairy=true;
    console.log("Время ", time, ". Ожидаю результат: на Фабрика: ",goToDairy,", в магазин: ", goToStore, ", на рынок: ", goToMarket);
}

if(goToDairy==false)
{
    if((time>=9 && time<14) || (time>15 && time<17))
    {
        goToStore=true;
        console.log("Время ", time, ". Ожидаю результат: на Фабрика: ",goToDairy,", в магазин: ", goToStore, ", на рынок: ", goToMarket);
    }
    if(goToStore==false)
    {
        if(time>=7 && time<20)
        {
            goToMarket=true;
            console.log("Время ", time, ". Ожидаю результат: на Фабрика: ",goToDairy,", в магазин: ", goToStore, ", на рынок: ", goToMarket);
        }       
    }
}








