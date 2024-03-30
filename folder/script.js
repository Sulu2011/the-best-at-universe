alert('Bu sayt S.S-development tərəfindən yaradılmışdır.Zəhmət olmasa saytdan həzz alın.')
let b = document.createElement('button');
b.classList.add('btn1');
let d = document.querySelector('.hero');
d.appendChild(b);

function startTime() {
    const gun = new Date();
    let h = gun.getHours();
    let m = gun.getMinutes();
    let s = gun.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    b.textContent = 'March 28, 2024 ' + h + ":" + m + ":" + s;

    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
 } 
    return i;
}
startTime();
const userdata={

    link1:"30 days Of Python",
    button1:'Python',
    info1:'Done',
    li1:'Python',
    li2:'Flask',
    li3:'Numpy',
    link2:'30 days Of JS',
    button2:'Javascript',
    info2:'Ongoing',
    li4:'Javascript',
    li5:'ES6',
    li6:'Promise'
}
let btn1=document.querySelector('.btn2')
let btn2=document.querySelector('.btn4')
let box1=document.querySelector('.box1')
let box2=document.querySelector('.box2')
btn1.addEventListener('click',function(){
box1.innerHTML=`
<div class="https"><a href="https/:ABC">30 days Of Python</a></div>
<div class="dav">
 <div class="haro"><button class="baton"><i class='bx bx-comment'></i></button><div class="ship">Python</div></div>
 <div class="languages">
    <ul>
       <li class="li1">${userdata.li1}</li>
       <li class="li2">${userdata.li2}</li>
       <li class="li3">${userdata.li3}</li>
    </ul>
 </div>
</div>
 <div class="onfo">Done</div>
`//Bu codun yığılması üçün başqa bir qovluq yaradılı.
box1.className='box';
})
btn2.addEventListener('click',function(){
    box2.innerHTML=`
    <div class="https"><a href="https/:ABC">30 days Of Javascript</a></div>
    <div class="dav">
     <div class="haro"><button class="baton1"><i class='bx bx-comment'></i></button><div class="ship">Javascript</div></div>
     <div class="languages">
        <ul>
           <li class="li1">${userdata.li4}</li>
           <li class="li2">${userdata.li5}</li>
           <li class="li3">${userdata.li6}</li>
        </ul>
     </div>
    </div>
     <div class="onfo">Done</div>
`
box2.className='boxa'
})