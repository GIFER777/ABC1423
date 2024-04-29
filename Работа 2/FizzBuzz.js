let number = 30;
let taskResult;

if(number % 3 == 0  )
{
    taskResult='Fizz';
}

if(number % 5 == 0)
{
    taskResult ='Buzz';
}

if(number % 5==0 && number % 3==0)
{
    taskResult='FizzBuzz';
}
console.log(taskResult);
