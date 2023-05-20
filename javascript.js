function action(){
    document.getElementById("mh1").innerHTML = "Action from onClick function"
}

const btn1 = document.querySelector('.btn1')
const labelWelcome = document.querySelector('.welcome')

btn1.addEventListener('mouseover', function(){
    btn1.style.backgroundColor = 'green'
    //labelWelcome.textContent = 'This come from a addEventListener'
})