let price =1200;
let discountedPrice;
let temp

if(price<1000)
{
    console.log(price);
}

if(price>=1000 &&price<3000)
{
    temp = (price * 5) / 100;
    discountedPrice = price - temp;    
}

if(price>=3000 && price<5000)
{
    temp = (price * 10) / 100;
    discountedPrice = price - temp;
}

if(price>5000)
{
    temp = (price * 15) / 100;
    discountedPrice = price - temp;
}

console.log(discountedPrice);