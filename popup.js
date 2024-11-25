let realSites = [];
let realTime = [];
(async function(){



    let s1= document.getElementById("site1");
    let t1= document.getElementById("time1");
    let s2= document.getElementById("site2");
    let t2= document.getElementById("time2");
    chrome.storage.local.set({ siteArray: realSites })
    chrome.storage.local.set({ timeArray: realTime })
    await chrome.storage.local.get([sitesArray])
    await chrome.storage.local.get(["s1"]).then((result) => {
        s1.placeholder = result.s1
    })
    await chrome.storage.local.get(["t1"]).then((result) => {
        t1.placeholder = result.t1
    })
    await chrome.storage.local.get(["s2"]).then((result) => {
        s2.placeholder = result.s2
    })
    await chrome.storage.local.get(["t2"]).then((result) => {
        t2.placeholder = result.t2
    })



    await chrome.storage.local.get(["s1"]).then((result) => {
        alert("Value is " + result.s1);
    });

    let sites ={
        
    };



document.getElementById("sub1").addEventListener("click", function () {
    let oneSite= document.getElementById("site1").value;
    oneSite = new URL(oneSite);
    oneSite= oneSite.hostname;
    let oneTime= document.getElementById("time1").value;
    chrome.storage.local.set({ s1: oneSite });
    chrome.storage.local.set({ t1: oneTime });
    chrome.storage.local.get(["s1"]).then((result) =>{
        s1.placeholder = result.s1
        realSites[0]= result.s1
    });
    chrome.storage.local.get(["t1"]).then((result) =>{
        t1.placeholder = result.t1
        realTime[0]= result.t1
    });
    sites[oneSite]=oneTime;
   

    chrome.tabs.query({ active:true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {type: 'INPUT', data: sites })
    });
});

document.getElementById("sub2").addEventListener("click", function () {
    let twoSite= document.getElementById("site2").value;
    twoSite = new URL(twoSite);
    twoSite= twoSite.hostname;
    let twoTime= document.getElementById("time2").value;
    chrome.storage.local.set({ s2: twoSite });
    chrome.storage.local.set({ t2: twoTime });
    chrome.storage.local.get(["s2"]).then((result) =>{
        s2.placeholder = result.s2
        realSites[1]= result.s2
    });
    chrome.storage.local.get(["t1"]).then((result) =>{
        t2.placeholder = result.t2
        realTime[1]= result.t2
    });


    chrome.tabs.query({ active:true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {type: 'INPUT', data: sites })
    });
});




let inputTime= document.querySelector("#timer");
localStorage.setItem("timerSubmit", document.querySelector("#timerSubmit"));


//console.log(JSON.stringify(block));
//alert(block[0].site);

})()
