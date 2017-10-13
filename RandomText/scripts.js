var textArray=[
    ["Savaşçı olmak mükemmellikle ilgili değildir ya da zaferle veya incitilemez olmakla… O, incinmeye açık olmakla ilgilidir. Gerçek cesaret budur.","-Dan Millman"],
    ["Unutma, bir şeyin yapılamaz olduğunu düşünerek uyursan, başkasının o şeyi yaparken çıkardığı gürültüyle uyanırsın.", "-Konfüçyüs"],
    ["Yüzüstü yere serilseniz bile, hala ileriye doğru hareket ediyorsunuzdur.","-Victor Kiam"],
    ["Dünyanın düşleyenlere de ihtiyacı var, yapanlara da. Ama düşlediğini yapanlara daha çok ihtiyacı var.", "-S. Breathnach"],
    ["Asla pişman olmayın! Eğer sonucu iyiyse, mükemmel. Sonucu kötüyse, bu bir tecrübedir.","Victoria Holt"],
    ["Başlamak için mükemmel olmak zorunda değilsin; fakat mükemmel olmak için başlamak zorundasın.","-Zig Ziglar"],
    ["İnsan inciyi denizden çıkarmayı bilmezse; o, ha inci olmuş, ha çakıl taşı…","-Yusuf Has Hacib"],
    ["Derin anlamlar taşıyan hedeflerle, sonuçlanmayı bekleyen düşlerle ve ifade edilmeyi gereksinen saf aşkla motive olduğumuzda, işte o zaman gerçekten yaşarız.","-Greg Anderson"],
    ["“Keskin bıçak olmak için çok çekiç yemek gerekir.”","-Türk Atasözü"],
    ["“Uyan! Uyumak için önümüzde sonsuzluk var.”","-Ömer Hayyam"]
];
var colors=["#C62828","#AD1457","#4A148C","#311B92","#1A237E","#0D47A1","#01579B","#004D40","#1B5E20","#F9A825","#E65100","#263238"];
var shareText="";
$(document).ready(function(){
 
	$('.my-button').click(textChange);
    shareText=$('#icerik').text();
     $('#tweet-quote').click(shareTweet);	
});
		

function textChange(){
	var rndNumb=Math.floor((Math.random() * 10));
    $('#icerik').html(textArray[rndNumb]);	
    shareText=textArray[rndNumb];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

function shareTweet(){
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=birdamlayazilim&related=freecodecamp&text=' + 
    encodeURIComponent('"' +shareText ));
}




