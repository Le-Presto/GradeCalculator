
//You are not allowed to use GLOBAL VARIABLES in this project

// takes data from page, calls on sub-functions to
// calculate the student grade and output it back to page.
// Also “return” the result so that calculateGradeNeeded() can use it.
function calculateCurrentGrade()
{
    var hwe = 1 * document.getElementById("hweight").value;
    var qwe = 1 * document.getElementById("qweight").value;
    var twe = 1 * document.getElementById("tweight").value;
    var mwe = 1 * document.getElementById("mweight").value;
    var totalWeight = hwe + qwe + twe + mwe;
    //check weights
    if(totalWeight !== 100)
    {
        document.getElementById("grdout").innerHTML = "Your weights don't add to 100.";
        return false;
    }

    var homework = averageArray(convertArrayStringToNumber(document.getElementById("homework").value)) * hwe;
    var quizzes = averageArray(convertArrayStringToNumber(document.getElementById("quizzes").value)) * qwe;
    var tests = averageArray(convertArrayStringToNumber(document.getElementById("tests").value)) * twe;
    var midterm = averageArray(convertArrayStringToNumber(document.getElementById("midterm").value)) * mwe;

    document.getElementById("grdout").innerHTML = "Current Grade: <br>" + ((homework + quizzes + tests + midterm)/100);

    return ((homework + quizzes + tests + midterm)/100);
}
// takes an array of strings (from page) and returns the same array,
// except all the items are numbers.  Use string.split(“,”)  to convert a string
// into an array of strings, then iterate through and convert each item in the array into a number like:
//
//array[i] = parseInt(array[i])


function convertArrayStringToNumber(string)
{
    console.log("string: " + string);
    var arrayNum = string.split(",");
    for(var i = 0; i < arrayNum.length; i++)
    {
        arrayNum[i] = parseInt(arrayNum[i]);
    }
    console.log("arrayNum: " + arrayNum);
    return arrayNum;
}


//takes an array of numbers and returns the average of those numbers
function averageArray(array)
{
    var sum = 0;
    for(var i = 0; i < array.length; i++)
    {
        sum += array[i];
    }

    return (sum / (array.length));
}

//takes the current grade returned by calculateCurrentGrade()
// and the grade desired and does the math to determine what the user needs on the final.

//takes the current grade, the final exam weight and a final grade desired data
// to calculate the grade needed on the final to receive the final grade desired.
//current grade +
function calculateGradeNeeded()
{
    var currentGrade = calculateCurrentGrade();
    var examWeight = document.getElementById("fweight").value / 100;
    var desired = document.getElementById("desired").value;

    for(var final = 50; final < 100; final += 1)
    {
        var total = (currentGrade * (1 - examWeight)) + (examWeight * final);
        if(total >= desired)
        {
            console.log("final:" + final);
            document.getElementById("fneed").innerHTML = "Final Grade <br>Needed: " + final;
            return final;
        }
    }
    document.getElementById("fneed").innerHTML = "Sorry, you cannot reach your desired grade.";
}


