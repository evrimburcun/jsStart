//asal sayılar
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


//arkadaş sayılar
let toplamsayi1=0
let toplamsayi2=0
arkadasSayi(220,284)

function arkadasSayi (sayi1,sayi2){
   for (let i=0;i<sayi1;i++)
   {
     if(sayi1%i == 0)
     {
       toplamsayi1=toplamsayi1+i;  
       console.log(toplamsayi1)
     }
   }
  for (let j=0;j<sayi2;j++)
  {
    if(sayi2%j == 0)
    {
      toplamsayi2=toplamsayi2+j;
      console.log(toplamsayi2)
    }
  }
     if (toplamsayi1==sayi2 && toplamsayi2==sayi1)
    {
      console.log(sayi1 + "ve" + sayi2 + "arkadaş sayıdır")
    }
     else 
     {
       console.log(sayi1 + "ve" + sayi2 + "arkadaş sayı değildir")
     }
}

//Mükemmel Sayılar



function mukemmelSayı() 
{
    
    for (let i=1;i<1000;i++)
      {
        let toplam=0
         for (let j=1;j<i;j++)
          {
             if(i%j == 0)
             {
                toplam = toplam+j;
             }
          }
          if (toplam == i)
          {
            console.log ( i + " mükemmel sayı")
          }
      }
     
}

mukemmelSayı();


// //asallar
let PrimeNumbers = []

function Prime ()
     {
      for (let i=1;i<=1000;i++)
      {
        let control = 0;
        for (let j=2;j<i;j++)
        {
          if (i%j == 0)
          {
            control = 1
            break;
          }
        }
        if (control == 0)
        {
            PrimeNumbers.push(i)
           
        }
      }
      console.log(PrimeNumbers)
     }

 Prime()
 

