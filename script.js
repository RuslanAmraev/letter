let isOpened = false

document.getElementsByClassName('envelope-head')[0].addEventListener(
    'click',
    ()=>{
        if(isOpened){
            document.getElementsByClassName('mail')[0].style.top = '0px'
            setTimeout(()=>{document.getElementsByClassName('envelope-head')[0].style.opacity = '1'
            document.getElementsByClassName('envelope-head-opened')[0].style.opacity = '0'
            isOpened = false}, 1000)
            
        }else{
            document.getElementsByClassName('envelope-head')[0].style.opacity = '0'
            document.getElementsByClassName('envelope-head-opened')[0].style.opacity = '1'
            document.getElementsByClassName('mail')[0].style.top = '-400px'
            document.getElementsByClassName('mail')[0].style.width = '-400px'
            document.getElementsByClassName('mail')[0].style.height = '-400px'
            setTimeout(()=>{
                document.getElementsByClassName('mail')[0].style.top = '-185px'
                document.getElementsByClassName('mail')[0].style.height = '510px'
                document.getElementsByClassName('mail')[0].style.zIndex = "5";
            }, 500)
            isOpened = true
        }
    }
)
