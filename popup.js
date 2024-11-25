(async function(){

    let s1= document.getElementById("site1");
    let t1= document.getElementById("time1");
    s1.placeholder = localStorage.getItem("S1");
    t1.placeholder = localStorage.getItem("T1");

    await chrome.storage.local.set({ s1: "123" })
        
    await chrome.storage.local.get(["s1"]).then((result) => {
        alert("Value is " + result.s1);
    });

    let s2= document.getElementById("site2");
    let t2= document.getElementById("time2");
    s2.placeholder = localStorage.getItem("S2");
    t2.placeholder = localStorage.getItem("T2");


    let sites ={
        
    };



document.getElementById("sub1").addEventListener("click", function () {
    let oneSite= document.getElementById("site1").value;
    oneSite = new URL(oneSite);
    oneSite= oneSite.hostname;
    let oneTime= document.getElementById("time1").value;
    chrome.storage.local.set({ s1: oneSite });
    //localStorage.setItem("S1", oneSite);
    chrome.storage.local.set({ t1: oneTime });
    //localStorage.setItem("T1", oneTime);
    chrome.storage.local.get(["s1"]).then((result) =>{
        s1.placeholder = result.s1
    });
    //s1.placeholder = localStorage.getItem("S1");
    chrome.storage.local.get(["t1"]).then((result) =>{
        t1.placeholder = result.t1
    });
    //t1.placeholder = localStorage.getItem("T1");


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
    localStorage.setItem("S2", twoSite);
    localStorage.setItem("T2", twoTime);
    s2.placeholder = localStorage.getItem("S2");
    t2.placeholder = localStorage.getItem("T2");


    sites[twoSite]=twoTime;
    alert(twoSite);

    chrome.tabs.query({ active:true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {type: 'INPUT', data: sites })
    });
});




let inputTime= document.querySelector("#timer");
localStorage.setItem("timerSubmit", document.querySelector("#timerSubmit"));


//console.log(JSON.stringify(block));
//alert(block[0].site);

})()
