var ip = document.querySelector('#value');
var it = document.querySelectorAll('.item');

it.forEach(function(btn){
    btn.addEventListener('click', function(){
        if(ip.innerHTML == '0')
        ip.innerHTML = '';
        if(btn.innerHTML == 'AC')
        ip.innerHTML = '';
        else if(btn.innerHTML == 'DEL')
        {
            var arrtext = Array.from(ip.innerHTML);
            arrtext.splice(arrtext.length-1,1);
            if(arrtext.length != 0)
            ip.innerHTML = arrtext.join('');
            else ip.innerHTML = '0';
        }
        else if(btn.innerHTML == '=')
        {
            ip.innerHTML = eval(ip.innerHTML);
        }
        else
        {
            ip.innerHTML += btn.innerHTML;
        }
    })
})