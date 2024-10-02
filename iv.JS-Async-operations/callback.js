function mycallback()
{
console.log("Hello I am callback");

}
function F1(msg, callback)
{
    console.log("My message:",msg)
    setTimeout(()=>
    {
        callback();

    },2000);
}
F1("My name is  test",mycallback);