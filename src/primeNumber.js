let numbers = [10,11,12,13,14]
findPrime(numbers)
function findPrime(numbers) 
{
  console.log("hello")
   for (let i=0;i<numbers.length;i++)
   {
      for(let k=2;k<numbers[i];k++)
      {
        if(numbers[i] % k === 0)
        {
          console.log(numbers[i] + " asal değil")
          break;
        }  
        else 
        {
          console.log(numbers[i] + " asal")
          break;
        }         
      }
   }
}
