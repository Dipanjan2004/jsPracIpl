var arr=[
    {
        Team:'KOLKATA KNIGHT RIDERS',
        Color:'Purple',
        bgImg: 'https://img.jagranjosh.com/images/2022/March/2632022/KKR_2022.jpg'
    },
     {
        Team:'MUMBAI INDIANS',
        Color:'Blue',
        bgImg: 'https://d28wu8o6itv89t.cloudfront.net/images/MumbaiIndianspng-1598599799716.png'
    },
    {
        Team:'ROYAL CHALLENGERS BANGALORE',
        Color:'Red',
        bgImg: 'https://www.crictracker.com/wp-content/uploads/2022/03/RCB-2022.jpg'
    },
        {
        Team:'DELHI CAPITALS',
        Color:'Blue',
        bgImg: 'https://www.crictracker.com/wp-content/uploads/2022/03/DelhiCapitals-2022.jpg'
    },
        {
        Team:'SUNRISERS HYDERABAD',
        Color:'Orange',
        bgImg: 'https://www.crictracker.com/wp-content/uploads/2022/03/SRH-2022.jpg'
    },
        {
        Team:'PUNJAB KINGS',
        Color:'Red',
        bgImg: 'https://www.crictracker.com/wp-content/uploads/2022/03/PunjabKings-2022.jpg'
    },
        {
        Team:'RAJASTHAN ROYALS',
        Color:'Pink',
        bgImg: 'https://www.crictracker.com/wp-content/uploads/2022/03/RR-2022.jpg'
    }
]

btn=document.querySelector('button');
h1=document.querySelector('#box>h1');
main=document.querySelector('#main')


btn.addEventListener('click',function(){

    var num=arr[Math.floor(Math.random()*7)];
    h1.innerHTML=num.Team;
    main.style.backgroundImage=`url(${num.bgImg})`

})