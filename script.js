
function getUserName()
{
    let userName = prompt("What is your username????");

    while(userName == "")
    {
        userName = prompt("Please enter a USERNAME!");
    }

    // if (userName == "")
    // {
    //     alert("Please enter a username!")
    //     userName = prompt("What is your username: ?");
    // }

    // if(userName == "")
    // {
    //     userName = "Gummy";
    //     //alert(userName)
    //     //document.write("!!!!!!!!!!!Welcome Gummy!!!!!!!!!!!");
    // }
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
}// function nameLenChecker

function reviewPage()
{
    let gumball = 0;
    gumball = prompt("How many gumballs(1-5) would you give this webstie? ");
    
    while(!(gumball >= 0 && gumball <= 5))
    {
        gumball = prompt("Rating must out 5 gumballs!");
    }

    for(let i = 0; i < gumball; i++)
    {
        document.write("<img class='gumball' src='images/gumballs/gumball"+ i + ".png' alt='puple gumball' />");
    }

    
}// function reviewPage

    