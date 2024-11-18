function crap(garden, bags, cap){
    space = bags * cap;
    if(space <= 0)
    {
        return "Cr@p";
    }
    garden.forEach(line =>
    {
        line.forEach(spot => 
        {
            if(spot == '@'){space--;}
            if(space < 0){return "Cr@p";}
        })
    })
            
    return "Clean";
}

function highAndLow(numbers){
    numbers = numbers.split(" ");
    return Math.max(...numbers) + " " + Math.min(...numbers);
}

function divisors(integer) {
    let arr = []
    for(let num = 2; num<integer; num++)
      {
        if(integer % num == 0)
          {arr.push(num);}
      }
    let r = arr.length !== 0 ? arr : `${integer} is prime`
    return r;
}

function findDifference(a, b) {
    let r1 = a[0];
    let r2 = b[0];

    for (let i = 1; i < a.length; i++)
        {
        r1 *= a[i];
        }
    for (let j = 1; j < b.length; j++)
        {
        r2 *= b[j];
        }
    return Math.abs(r1 - r2);
}