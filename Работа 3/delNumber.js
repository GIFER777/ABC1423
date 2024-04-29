let number = 15;

let i=1;
while(i<=number)
{
    if(number %i == 0)
    {
        if(i !==1 && i != number)
        {
            console.log(i);
        }
    }
    i++;
}