let p=new Promise(function(resolve,reject)
{
    setTimeout(()=>{
resolve("DONE !!!");
    },2000
    
    )
})
p.then(
    (result)=>
    {
console.log(result);
    },
    (error)=>
    {
console.log(error);
    }
)