let weight =52; 
let recommendation;

if(weight<48)
{
    recommendation='Пора перекусить';
}

if(weight>=48 && weight<=54)
{
    recommendation='вес в норме';
}

if(weight>54)
{
    recommendation='Пора на тренировку';
}

console.log(recommendation);