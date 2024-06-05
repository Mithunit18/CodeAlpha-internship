let displayValue = "";

function appendnumber(number)
{
    displayValue+=number;
    Updatedisplay();
}

function appendOperator(operator)
{
    displayValue+=" "+operator+" ";
    Updatedisplay();
}

function clearDisplay()
{
    displayValue =" ";
    Updatedisplay();
}

function CalculateResult()
{
    try{
        const result = eval(displayValue);
        displayValue = result;
        Updatedisplay();
    }
    catch(error)
    {
        displayValue="ERROR";
        Updatedisplay();
    }
}

function DeleteLastDigit()
{
    displayValue=displayValue.slice(0,-1);
    Updatedisplay();
}

function append_Decimal()
{
    displayValue+=".";
    Updatedisplay();

}

function Updatedisplay()
{
    document.getElementById("display").value=displayValue;
}
