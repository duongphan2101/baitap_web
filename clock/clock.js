
    var msec = 0
    var sec = 0
    var min = 0

    function start()
    {
        document.forms[0].display.value= min + ":" + sec + ":" + msec
        go = setTimeout("start()",1)
        msec++
    }
    if(msec == 100){    
        msec = 0
        sec++
    }
    if(sec == 60){
        sec = 0
        min++
    }
    function stop()
    {
        clearTimeout(go)
    }
    function reset()
    {
        window.location.reload()
    }

    function over_1(test)
    {document.getElementById('over_1').style.background = test}
    function out_1(test)
    {document.getElementById('over_1').style.background = test}

    function over_2(test)
    {document.getElementById('over_2').style.background = test}
    function out_2(test)
    {document.getElementById('over_2').style.background = test}

    function over_3(test)
    {document.getElementById('over_3').style.background = test}
    function out_3(test)
    {document.getElementById('over_3').style.background = test}
