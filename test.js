/*
    function calculateAge(year)
    {
        console.log(2016 - year);
    }     

         var retirment = function(year){
             console.log(65 (2016 - year));
         }
         console.log(age);
         var age = 23;

         function foo()
         {
             var age = 65;
             console.log(age);
         }
         foo();
         console.log(age);

var a = 'first';
   first();

function first()
{
    var b =' second';
    second();

    function second()
    {
        var c = ' third';
        //console.log(a + b + c);
        third();
    
        function third()
        {
            var d = ' fourth';
            console.log(a + b + c + d);
        }
    }
}*/

console.log(1985);

function calculateAge(year)
{
    console.log(2016 - year);
    console.log(this);
}
calculateAge();