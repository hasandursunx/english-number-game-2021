const txt = document.getElementById('txt')
const btn = document.getElementById('btn')

let digit1,digit2,digit3,digitFinish;

// sayÄ± Ã¼retme
let randomDigit;
const generate = ()=>{
    randomDigit = Math.ceil(Math.random()*6)
    let numberArr = []
    if(randomDigit == 1){
        randomDigit = 2
    }
    const randomNumberGenerate = (randomDigit)=>{
        for(let i = 0; i < randomDigit; i++){
            numberArr.push(Math.floor(Math.random() * 10))
        }
        if(numberArr[0] == 0){
        numberArr[0] = Math.ceil(Math.random() * 9)
        }
    }
   randomNumberGenerate(randomDigit)

    switch(randomDigit){
        case 1:
            oneDigit(numberArr[0])
            break;
        case 2 :
            twoDigit(numberArr[0],numberArr[1])
            break;
        case 3 :
            threeDigit(numberArr[0],numberArr[1],numberArr[2])
            break;
        case 4 :
            fourDigit(numberArr[0],numberArr[1],numberArr[2],numberArr[3])
            break;
        case 5 :
            fiveDigit(numberArr[0],numberArr[1],numberArr[2],numberArr[3],numberArr[4])
            break;
        case 6 :
            sixDigit(numberArr[0],numberArr[1],numberArr[2],numberArr[3],numberArr[4],numberArr[5])
            break;
    }
    const  obje = {
        yazi: digitFinish,
        sayi: numberArr
    }
    return obje
}
// sayÄ± Ã¼retme bitiÅŸ

// oneDigit
const oneDigit = (x)=>{
    switch(x){
        case 0:
        digit1 = "zero"
        break
        case 1:
        digit1 = "one"
        break
        case 2:
        digit1 = "two"
        break 
        case 3:
        digit1 = "three"
        break 
        case 4:
        digit1 = "four"
        break 
        case 5:
        digit1 = "five"
        break 
        case 6:
        digit1 = "six"
        break 
        case 7:
        digit1 = "seven"
        break 
        case 8:
        digit1 = "eight"
        break 
        case 9:
        digit1 = "nine"
        break 
    }
    digitFinish = digit1
    return digitFinish
}
const twoDigit = (x,y)=>{
    let resp1;
    if(x == 1){
        let xANDy = x.toString().concat(" ",y.toString())
        switch(xANDy){
            case "1 0":
            digit2 = "ten"
            break;
            case "1 1":
            digit2 = "eleven"
            break;
            case "1 2":
            digit2 = "twelve"
            break;
            case "1 3":
            digit2 = "thirteen"
            break;
            case "1 4":
            digit2 = "fourteen"
            break;
            case "1 5":
            digit2 = "fifteen"
            break;
            case "1 6":
            digit2 = "sixteen"
            break;
            case "1 7":
            digit2 = "seventeen"
            break;
            case "1 8":
            digit2 = "eighteen"
            break;
            case "1 9":
            digit2 = "nineteen"
            break;
        }
       resp1 = digit2      
    }
    else if(x == 0){
        resp1 = oneDigit(y)  
    }
    else{
        switch(x){
            case 2:
                digit2 = "twenty"
                break;
            case 3:
                digit2 = "thirty"
                break;
            case 4:
                digit2 = "forty"
                break;  
            case 5:
                digit2 = "fifty"
                break;
            case 6:
                digit2 = "sixty"
                break;
            case 7:
                digit2 = "seventy"
                break;
            case 8:
                digit2 = "eighty"
                break;
            case 9:
                digit2 = "ninety"
                break;
        }
        if(y != 0){
            resp1 = digit2.concat(" ",oneDigit(y))
        }
        else{
            resp1 = digit2
        }
    }  
    digitFinish = resp1
    return digitFinish
}
const threeDigit = (x,y,z) =>{
    let deg0 ;
    if(y == 0 && z == 0){
        deg0 = `${oneDigit(x)} hundred`
    }
    else{
        deg0 = `${oneDigit(x)} hundred ${twoDigit(y,z)}`
    }
    digitFinish = deg0
    return digitFinish
}
const fourDigit = (x,y,z,a)=>{
    let deg2;
    if(y == 0)
        {
            deg2 = twoDigit(z,a)
        }
    else{
        deg2 = threeDigit(y,z,a)
    }

    digitFinish = `${oneDigit(x)} thousand ${deg2}`
    return digitFinish
}
const fiveDigit = (x,y,z,a,b)=>{
    let deg3;
    if(z == 0)
        {
            deg3 = twoDigit(a,b)
        }
    
    else{ 
            deg3 = threeDigit(z,a,b)
    }
    digitFinish = `${twoDigit(x,y)} thousand ${deg3}`
    return digitFinish
}
const sixDigit = (x,y,z,a,b,c)=>{
    let deg4;
    if(a == 0)
        {
            deg4 = twoDigit(b,c)
        }
    
    else{ 
            deg4 = threeDigit(a,b,c)
    }
    digitFinish = `${threeDigit(x,y,z)} thousand ${deg4}`
    return digitFinish
}
const shuffle = (a)=> {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
const time = document.getElementById("time")
const yourScore = document.getElementById("your-score")
const bestScore = document.getElementById("best-score")
const order = document.getElementById("order")
const timeBar = document.getElementById("time-bar")
const orderAll = document.getElementById("orderAll")
const question = document.getElementById("question")
const answer1 = document.getElementById("answer-1")
const answer2 = document.getElementById("answer-2")
const answer3 = document.getElementById("answer-3")
const answer4 = document.getElementById("answer-4")
const answer0 = document.querySelectorAll(".answer")
const calistir = document.getElementById("calistir")
const startPage = document.getElementById("startPage")
const spBaslik = document.getElementById("sp-baslik")
const startPageScore = document.getElementById("startPageScore")
const spLastScore = document.getElementById("sp-last-score")
const spBestScore = document.getElementById("sp-best-score")

let correctAnswer = 0,wrongAnswer = 0,oyunSayisi=0,levelSayisi=5;
let sayiVerisi=0,dogruCevap=0,lastScoreTxt,bestScoreTxt,yourScoreTxt = 0;

//toplam soru sayÄ±sÄ±
orderAll.textContent = levelSayisi

var audioBasla = new Audio('basla.mp3'),audioYanlis = new Audio('yanlis.mp3'),audioDogru = new Audio('dogru.mp3'),audioSureDoluyor = new Audio('suredoluyor.mp3');
audioBasla.volume = audioDogru.volume = audioYanlis.volume = audioSureDoluyor.volume = 0.1;



const secenekReset = ()=>{
    for(let i = 0; i < 4; i++){
        answer0[i].style.backgroundColor = "#ddd" 
    } 
    time.textContent = "20"
    timeBar.style.width = `0%`;
    timeBar.style.transition = "0s width linear"

}
const oyunVeriReset = ()=>{
    lastScoreTxt = yourScoreTxt
    yourScoreTxt =0 ,correctAnswer = 0,wrongAnswer = 0,oyunSayisi=0,levelSayisi=5
    yourScore.textContent = yourScoreTxt
}
const yeniOyunGetir = ()=>{
    oyunVeriReset()
    secenekReset()
    oyunaBasla()
    bestScore.textContent = localStorage.getItem('BestScore')
}
const veriGetir = ()=>{
    const newGenerate = generate()
    const newGenerateNum = newGenerate.sayi.toString().replace(/,/g,"");
    question.textContent = newGenerate.yazi
    let generateNumberArray = []
    for(let i = 0; i < 3; i++){
        let numArr = []
        const randomGenerate = (x)=>{
            for(let i = 0; i < x; i++){
                    numArr.push(Math.floor(Math.random() * 10)) 
            }
            if(numArr[0] == 0){
                numArr[0] = Math.ceil(Math.random() * 9)
            }
            return numArr
        }
         console.log()
         generateNumberArray.push(randomGenerate(newGenerateNum.length).toString().replace(/,/g,""))
    }
    generateNumberArray.push(newGenerateNum)
    printEnd = shuffle(generateNumberArray)
    for(let j = 0; j < 4; j++){
        answer0[j].textContent = printEnd[j]
    } 
    return newGenerateNum
}
const puanYazdir = (saniye,soruSayisi)=>{
    yourScoreTxt += saniye + soruSayisi + (Math.ceil(Math.random()*10))
    yourScore.textContent = yourScoreTxt
}
const startPageReset = (nowScore)=>{
    spLastScore.textContent = lastScoreTxt
    startPage.style.display = "flex"
    console.log(nowScore)
    spBaslik.textContent =  `SCORE : ${nowScore}`
    calistir.textContent = "RESTART"
    startPageScore.style.color = "white"
    if(localStorage.getItem('BestScore') < nowScore){
        localStorage.setItem('BestScore',nowScore)
    }
    spBestScore.textContent = localStorage.getItem('BestScore')
}
const oyunaBasla = ()=>{
    //oyun sayisi
        order.textContent = oyunSayisi + 1
    //zaman
    let zaman , saniye = 20;
    zaman = setInterval(() => {
        saniye--
        time.textContent = saniye
        if(saniye == 0){
            audioYanlis.play();
            clearInterval(zaman)
            wrongAnswer++
            oyunSayisi++
            for(let i = 0; i < 4; i++){
                answer0[i].style.backgroundColor = "gray"
            }
            if(oyunSayisi < levelSayisi){
                setTimeout(() => {
                    oyunaBasla()
                }, 2000);
            }
            else{
                setTimeout(() => {
                    startPageReset(yourScoreTxt)
                }, 2000);
            }
            console.log("oyun sayisi : ",oyunSayisi,"level sayisi",levelSayisi)
            console.log("DoÄŸru",correctAnswer,"YanlÄ±ÅŸ",wrongAnswer)
        }
        else if(saniye <= 6){
            audioSureDoluyor.play();
        }
        timeBar.style.transition = "20s width linear"
        timeBar.style.width = `100%`;
    }, 1000);  
    // eskileri temizle
    secenekReset()
    // yeni veriler
    sayiVerisi = veriGetir()
    let dogruYadaYanlis = - 1 
        answer0.forEach(item => {
            item.addEventListener("click",(e)=>{
                if(saniye != 0){
                    timeBar.style.width = `${(20-saniye)*5}%`;
                    timeBar.style.transition = "0s width linear"
                    clearInterval(zaman)
                    if(dogruYadaYanlis == -1){
                        if(e.target.textContent == sayiVerisi){
                            audioDogru.play();
                            e.target.style.backgroundColor = "green"
                            dogruYadaYanlis =  1;
                            correctAnswer++
                            oyunSayisi++
                            puanYazdir(saniye,oyunSayisi)
                            console.log(saniye,oyunSayisi)
                            if(oyunSayisi < levelSayisi){
                                setTimeout(() => {
                                    oyunaBasla()
                                }, 1000);
                            }
                            else{
                                setTimeout(() => {
                                    startPageReset(yourScoreTxt)
                                }, 2000);
                            }
                        }
                        else{
                            audioYanlis.play();
                            e.target.style.backgroundColor = "red"
                            for(let i = 0; i < 4; i++){
                                if(sayiVerisi == answer0[i].textContent){
                                    answer0[i].style.backgroundColor = "green"
                                }
                            }
                            dogruYadaYanlis = 0
                            wrongAnswer++
                            oyunSayisi++
                            if(oyunSayisi < levelSayisi){
                                setTimeout(() => {
                                    oyunaBasla()
                                }, 3000);
                            }
                            else{
                                setTimeout(() => {
                                    startPageReset(yourScoreTxt)
                                }, 2000);
                            }
                            
                        }
                        console.log("oyun sayisi : ",oyunSayisi,"level sayisi",levelSayisi)
                        console.log("dogru: ",correctAnswer,"yanlÄ±ÅŸ: ",wrongAnswer)
                    }
                    
                }
                else{
                    console.log("sÃ¼re doldu")
                }
            })
        }) 
}
calistir.addEventListener("click",(e)=>{
    startPage.style.display = "none"
    audioBasla.play();
    yeniOyunGetir()
})