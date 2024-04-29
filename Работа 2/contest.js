let age =11;
let ageGroup;

if(age<=11)
{
    ageGroup='Дети';
}

if(age>11 && age<=15)
{
    ageGroup='Юниоры';
}

if(age>15 && age<=18)
{
    ageGroup='Молодежь';
}

if(age>18)
{
    ageGroup='Взрослые';
}

console.log(ageGroup);