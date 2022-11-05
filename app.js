const ham = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const back = document.querySelector(".links");
   ham.addEventListener('click', () =>{
    navlinks.classList.toggle('open');
    bar2.classList.toggle('baranimate');
    bar1.classList.toggle('baranimate2');
   })


document.addEventListener("mousemove", parallax);
function parallax(e){
    document.querySelectorAll(".mouse").forEach(function(move){
        var movingvalue = move.getAttribute("data-value");
        var x =(e.clientX * movingvalue)/250;
        var y =(e.clientY * movingvalue)/250;

        move.style.transform = "rotateY(" + x + "deg) rotateZ(" + y + "deg)";

    });
}
   
const tl = gsap.timeline({default:{ease: 'power1.out'}})
    tl.to(".curtain", {y : "-100%", duration: 2})
    tl.to(".super", {x : "0%", duration: 0.75}, "-=1");
    tl.to(".star", {x : "0%", duration: 0.75, delay:0.5}, "-=1");
    tl.to(".knife", {x : "-150%", duration: 2.5})


    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".p2img1", {
        scrollTrigger: {
            trigger:".p2img1",
            toggleActions:"restart",
        },
        x : 0,
        duration: 1,
    });   
    gsap.to(".p2img2", {
        scrollTrigger: {
            trigger:".p2img2",
            toggleActions:"restart",
        },
        x : 0,
        duration: 1,
    });
    gsap.to(".about", {
        scrollTrigger: {
            trigger:".about",
            toggleActions:"restart",
        },
        x : 0,
        duration: 1.2,
    });
    gsap.to(".about", {
        scrollTrigger: {
            toggleActions:"restart",
        },
        opacity : 1,
        duration: 2.5,
    });
    gsap.to(".poda", {
        scrollTrigger: {
            trigger:".poda",
            toggleActions:"restart",
        },
        x : 0,
        duration: 0.5,
    });
    gsap.to(".poda22", {
        scrollTrigger: {
            trigger:".poda22",
            toggleActions:"restart",
        },
        x : 0,
        duration: 0.5,
    });
    gsap.to(".t2di", {
        scrollTrigger: {
            trigger:".t2di",
            toggleActions:"restart",
        },
        x : 0,
        duration: 0.7,
    });
    gsap.to(".odd1",{
        scrollTrigger:{
            trigger:".odd1",
            start:"top bottom",
        },
        x : 0,
        duration: 0.5
    });
    gsap.to(".odd2",{
        scrollTrigger:{
            trigger:".odd2",
            start:"top bottom",
        },
        x : 0,
        duration: 0.5
    });
    gsap.to(".odd3",{
        scrollTrigger:{
            trigger:".odd3",
            start:"top bottom",
        },
        x : 0,
        duration: 0.5
    });
    gsap.to(".odd4",{
        scrollTrigger:{
            trigger:".odd4",
            start:"top bottom",
        },
        x : 0,
        duration: 0.5
    });
    gsap.to(".even1",{
        scrollTrigger:{
            trigger:".even1",
            start:"top bottom",
        },
        x : 0,
        duration: 0.5
    });
    gsap.to(".even2",{
        scrollTrigger:{
            trigger:".even2",
            start:"top bottom",
        },
        x : 0,
        duration: 0.5
    });
    gsap.to(".even3",{
        scrollTrigger:{
            trigger:".even3",
            start:"top bottom",
        },
        x : 0,
        duration: 0.5
    });
    gsap.to(".even4",{
        scrollTrigger:{
            trigger:".even4",
            start:"top bottom",
        },
        x : 0,
        duration: 0.5
    });
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".uncover1",{
        scrollTrigger:{
            trigger:".uncover1",
            start:"top center",
        },
        width: 0,
        duration: 1,
        delay: 0.5,
    });
    gsap.to(".uncover2",{
        scrollTrigger:{
            trigger:".uncover2",
            start:"top center",
        },
        x : 600,
        duration: 1,
        delay: 0.5,
    });
    gsap.to(".uncover3",{
        scrollTrigger:{
            trigger:".uncover3",
            start:"top center",
        },
        width: 0,
        duration: 1,
        delay: 0.5,
    });
    gsap.to(".uncover4",{
        scrollTrigger:{
            trigger:".uncover4",
            start:"top center",
        },
        x : 600,
        duration: 1,
        delay: 0.5,
    });
    gsap.to(".uncover5",{
        scrollTrigger:{
            trigger:".uncover5",
            start:"top center",
        },
        width: 0,
        duration: 1,
        delay: 0.5,
    });
    gsap.to(".uncover6",{
        scrollTrigger:{
            trigger:".uncover6",
            start:"top center",
        },
        x : 600,
        duration: 1,
        delay: 0.5,
    });
    gsap.to(".uncover7",{
        scrollTrigger:{
            trigger:".uncover7",
            start:"top center",
        },
        width: 0,
        duration: 1,
        delay: 0.5,
    });
    gsap.to(".uncover8",{
        scrollTrigger:{
            trigger:".uncover8",
            start:"top center",
        },
        x : 600,
        duration: 1,
        delay: 0.5,
    });
    gsap.to(".p5img", {
        scrollTrigger: {
            trigger:".p5img",
            toggleActions:"restart",
        },
        opacity : 1,
        duration: 1.5,
    });
    gsap.to(".p5h1", {
        scrollTrigger: {
            trigger:".p5h1",
            toggleActions:"restart",
        },
        opacity : 1,
        duration: 1.5,
    });

    let btn = document.querySelector('#newdg');
    let dialogue = document.querySelector('.dialogue');
    
    const dialogues = [{
        dialogue: 'Naan eppo varuven, epdi varuvennu yarukkum theriyathu. Aana vara vendiya nerathula correcta vandhuduven'
    },
    {
        dialogue: 'Khatam... Khatam... Mudinjathu mudinju potchu'
    },
    {
        dialogue: 'Pera kettaale chumma adhirudhulla!!!'
    },
    {
        dialogue:'Kannaaa panniga thaa kutama varu singam singala tha varum'
    }, 
    {
        dialogue:'Nallavana erukallam annal romba nallavana erukakudathu'
    }, 
    {
        dialogue:'Andavan solran. Arunachalam seiran'
    }, 
    {
        dialogue:'Naan solrathaiyum seiven, sollathathiyum seiven'
    }, 
    {
        dialogue:'En vazhi, thani vazhi'
    }, 
    {
        dialogue:'Kashtapadaama edhuvum kidaikaadhu. Kashtapadaama kedachu ennikum nilaikaadhu.'
    }, 
    {
        dialogue:'Na yosikama pesamaten, pesinapiragu yosika maten'
    },
    {
       dialogue:'Nalavangala aandavan sodhippan, Kaividamatan. Ketavangaluku neraya kudupan aana Kaivituvan'
    },
    {
        dialogue:'Asantha Adikuradhu unga policy, Asarama adikuradhu indha Baba policy'
     },
     {
        dialogue:'Kadham Kadham mudinjathu mudinji pochi'
     },
     {
        dialogue:'Vaazhu mathavangala vaazha vechitu vaazhu. Mathavanga vaazhkaiya keduthutu vaazatha'
     },
     {
        dialogue:'Kedaikarathu kedaikama irukadhu, kedaikama irukurathu kedaikathu'
     },
     {
        dialogue:'Sirappana Tharamaana Sambavangala inimael thaan paaka poringa'
     },
     {
        dialogue:'Adhigama asa padra ambalayum adhigama kova padra pombalayum nalla vaazhndhadha sarithirame kedayaadhu'
     },
     {
        dialogue:'You are born empty handed, you die the same way, then why are you attached to the materialistic pleasures of life?'
     },
     {
        dialogue:'Edhiri-ai dhandikka aayiram valigalundu, mudhal vali-MANIPPU'
     },
     {
        dialogue:'opportunities will not present itself in front of us, we have to go in search of them'
     },
     {
        dialogue:'Who is the black sheep? mehhh...'
     },
     {
        dialogue:'Miracles do happen. Today, An ordinary bus conductor is sharing the dais with the greatest living legends of India.'
     },
];
   
       btn.addEventListener('click', function(){
        let random = Math.floor(Math.random() * dialogues.length);
        dialogue.innerText = dialogues[random].dialogue;
       })