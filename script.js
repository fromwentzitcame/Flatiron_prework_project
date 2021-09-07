const h4 = document.createElement('h4');
h4.textContent = "This sentence was added using JavaScript."; 

document.querySelector('body').appendChild(h4); 

function buttonClick2() {
  alert('"OMG" usage can be traced back to 1917.');
}

/*
function buttonClick() {
    const funButton = document.getElementById('secret');
    funButton.addEventListener('click', function message() {
        alert('"OMG" usage can be traced back to 1917.');
      }); 
}*/