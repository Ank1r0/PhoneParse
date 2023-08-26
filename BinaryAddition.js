function addBinary(a,b)
{
    if( typeof a === b && b !== 'number')
    {
        throw new Error("Only numbers are possible to enter");
    }
    return ((a + b).toString(2));
}

console.log(addBinary(6,46));