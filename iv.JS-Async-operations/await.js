let p=new Promise(function(resolve,reject)
{
    setTimeout(()=>{
        resolve("Result success !!!");
            },2000)
})

async function f1()
{
    let res=await p;
    console.log(res);
}
f1();
