const colorPicker = document.getElementById("colorPicker");
const colorDisplay = document.getElementById("colorDisplay");
const colorText = document.querySelector(".color-text");

colorPicker.addEventListener("input", function() {
  const color = colorPicker.value;
  colorDisplay.style.backgroundColor = color;
  colorText.textContent = `Selected Color: ${color}`;
});
const buttons = document.querySelectorAll('.button');
// const buttons = document.getElementsByClassName('button'); not applicable as it doesnt allow to make a node list for foreach func
const body = document.querySelector('body');

buttons.forEach(function(button)
{
    //console.log(button)
    button.addEventListener('click',function(e)
    {
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'yellow' )
        {
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'green' )
        {
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'violet' )
        {
            body.style.backgroundColor = e.target.id;
        }
        else(e.target.id === 'aqua' )
        {
            body.style.backgroundColor = e.target.id;
        }
    });
});