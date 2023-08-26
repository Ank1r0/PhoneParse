function createPhoneNumber(numbers){
    if(numbers.length !== 10)
    {
        throw new Error("Array could not have more or less than 10 numbers");
    }

    for (let i = 0; i < numbers.length; i++) {
        if(typeof numbers[i] !== 'number')
        {
            throw new Error("Array could not have any type except number");
        }
    }
    return "("+numbers[0]+""+numbers[1]+""+numbers[2]+")"+" "+numbers[3]+""+numbers[4]+""+numbers[5]+"-"+numbers[6]+""+numbers[7]+""+numbers[8]+""+numbers[9];
}



console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 8, 0]));
console.log(createPhoneNumber([7, 2, 3, 6, 3, 8, 3, 0, 9, 0]));
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));