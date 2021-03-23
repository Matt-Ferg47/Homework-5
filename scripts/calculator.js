function insertChar(c)
{
    document.getElementById("display").innerHTML += c;
}

function autoClear()
{
    document.getElementById("display").innerHTML = '';
}

function equals()
{
    document.getElementById("display").innerHTML = eval(document.getElementById("display").innerHTML);
}