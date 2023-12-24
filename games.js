let title = document.querySelector('.title');
let turn = 'x';
let squares =[]; //هستقبل فيه كل المربعات
function end(num1,num2,num3){
    title.innerHTML = `${squares[num1]} is the winner`;
    document.getElementById('item'+num1).style.background = '#548CA8'; 
    document.getElementById('item'+num2).style.background = '#548CA8'; 
    document.getElementById('item'+num3).style.background = '#548CA8'; 

    setInterval(function(){title.innerHTML +='.'},1000);
    setInterval(function(){location.reload()},4000);

}
function winner()
{
    for(let i =1; i<10; i++)
    {
       squares[i]= document.getElementById('item'+ i).innerHTML;
    }
    //هبدأ مقارنه
    //بالعرض
    if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1] != '')
    {
        end(1,2,3);
    }
    else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[4] != '')
    {
        end(4,5,6);
    }
    if(squares[7]==squares[8] && squares[8]==squares[9] && squares[7] != '')
    {
        end(7,8,9);
    }
    //بالطول
    if(squares[1]==squares[4] && squares[4]==squares[7] && squares[1] != '')
    {
        end(1,4,7);
    }
    if(squares[2]==squares[5] && squares[5]==squares[8] && squares[2] != '')
    {
        end(2,5,8);
    }
    if(squares[3]==squares[6] && squares[6]==squares[9] && squares[3] != '')
    {
        end(3,6,9);
    }
    //كروس
    if(squares[1]==squares[5] && squares[5]==squares[9] && squares[5] != '')
    {
        end(1,5,9);
    }
    if(squares[3]==squares[5] && squares[5]==squares[7] && squares[5] != '')
    {
        end(3,5,7);
    }

}

function game(id)
{
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML=='') //لو ده دور اكس والمربع فاضي  
    {
        element.innerHTML='X'; //خلي القيمه اللي جواه ب اكس
        turn='o'; //دلوقتي ده دور ال اوه
        title.innerHTML = 'O';//اكتبلي في التايتل ان ده دور اوه 
       
    }
    else if( turn==='o' && element.innerHTML=='')
    {
        element.innerHTML='O';
        turn='x'
        title.innerHTML = 'X';

    }
    winner();
}