let lastNumber = 12;
let multiplicationResult=1;

let i;
for(i=1;i<=lastNumber; i++)
{
    if(i % 2==0)
    {
        multiplicationResult*=i;
    }
}

console.log(multiplicationResult);