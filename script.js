
function getUserName()
{
    let userName = prompt("What is your username?");

    if (userName == "")
    {
        alert("Please enter a name!")
        userName = prompt("What is your username: ?");
    }

    if(userName == "")
    {
        userName = "Gummy";
        //alert(userName)
        //document.write("!!!!!!!!!!!Welcome Gummy!!!!!!!!!!!");
    }
    // else
    // {
    //     document.write("!!!!!!!!!!!Welcome "+ userName + " !!!!!!!!!!!");
    // }
    console.log("username: " + userName);
    return userName;
}

function nameLenChecker(name1)
{
    console.log("name length: " + name1.length);
    if (name1.length >= 8)
    {
        document.body.style.backgroundColor = "#DB6FA6"; 
    }
    
    if (name1.length > 5)
    {
        alert(name1 + " YOUR NAME IS TOO LONG...get a shorter name!");
        //document.write(name1 + " YOUR NAME IS TOO LONG...get a shorter name!");
        name1 = name1.substring(0, 5);
        //document.write("Don't worry about it I did it for you! XD...You are now " + name1);
        alert("Don't worry about it I did it for you! XD...You are now " + name1);
        //document.write("!!!!!!!!!!!Welcome " + name1 + " !!!!!!!!!!!");
    }
    // else
    // {
    //     document.write(name1 + " Your name is the prefect length");
    // }  
    document.write("!!!!!!!!!!!Welcome " + name1 + " !!!!!!!!!!!");
}

