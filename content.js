
console.log("hi");
let timeInput;
let blocked;
let startingMins = 10;
let time = startingMins * 60;
let interval;


(async function(){
//chrome.storage.local.set({ key: "123" }).then(() => {
   // console.log("Value is set");
 // });
  

 const result = await chrome.storage.local.get(["siteArray"])
 const timeResult = await chrome.storage.local.get(["timeArray"])

 if (Array.isArray(result.siteArray) && result.siteArray.length > 0) {
  console.log("Retrieved siteArray:", result.siteArray)};


  console.log("siteArray is:", result);

  if (result.siteArray.includes(window.location.hostname)){
    alert("blocked site")
    let index = result.siteArray.indexOf(window.location.hostname)
    timerSubmit(timeResult.timeArray[index])
  }

})()

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request);
    if (request.type==='INPUT'){
        blocked = request.data;
        console.log(request.data)
        
    }
});


if (window.location.hostname in blocked){
    console.log("can do boss")
    timerSubmit(blocked[window.location.hostname]);
}
else{
    console.log("nada boss");
}





  

function updateCountdown() {
  const minutes = Math.floor(time/ 60);
  let seconds = time % 60;
  console.log(time + "we can do it!");
  seconds = seconds < 10 ?'0' + seconds : seconds;
  
  time--;
  time = time < 0 ? 0 : time;

  if (time <= 0){
     clearInterval(interval);
        console.log("omg we're super close!");
        const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
        const randomHex = () =>
        Array.from({ length: 6 }, () =>
            "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
        ).join("");
     const viewWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
        const viewHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    
     // string for code
        let str = "";
        // populate string
        for (let i = 0; i < 10; i++) {
            let x = rand(0, viewWidth);
            let y = rand(0, viewHeight);
            let w = rand(10, 50);
            let h = rand(10, 50);
            str += `<div class="mud" style="position:fixed; background-color:#${randomHex()}; width:${w}px; height:${h}px;left: ${x}px; top: ${y}px; 
                z-index:9999999999; cursor: pointer;"></div> \n`;
        }
        console.clear();
        console.log(str);
        // "append" to body
        document.body.insertAdjacentHTML("beforeend", str);
        
        // add click to remove
        let eles = document.querySelectorAll(".mud");
        eles.forEach((ele, i) => {
            ele.addEventListener("click", () => {
                ele.remove();
            });
    });
    

  
  }
}




function timerSubmit(tim){
    time = tim;
    alert("so we def got here...")
    updateCountdown();
    //document.getElementById("countdown").textContent = `${time}`;
    if (interval != undefined){
      clearInterval(interval);
    }
    interval= setInterval(updateCountdown, 1000);
    
  }
  