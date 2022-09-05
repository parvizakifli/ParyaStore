
let date=new Date('Jan 27 2022 00:47:00')
function counts() {
    let now=new Date()
    gap=date-now
    console.log(gap);    
    let days=Math.floor(gap/1000/60/60/24);
    let hours=Math.floor(gap/1000/60/60)%24;
    let minit=Math.floor(gap/1000/60)%60;
    let second=Math.floor(gap/1000)%60;
    console.log(days);
    console.log(hours);
    console.log(minit);
    console.log(second);
    if(gap<0){
      //  alert('Акция завершина')
     days+=1
     hours+=24
     minit+=60
     second+=60

    }
    document.querySelector('.day').innerHTML=days+' DAY'
    document.querySelector('.hours').innerText=hours+' HOURS'
    document.querySelector('.minit').innerText=minit+' MINUT'
    document.querySelector('.second').innerText=second+' SECOND'
    
}

counts()
setInterval(counts,1000)