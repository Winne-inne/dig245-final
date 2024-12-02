let realSites = [];
let realTime = [];
(async function(){

    const stored = await chrome.storage.local.get(['s1', 's2', 't1', 't2','siteArray','timeArray']);

    realSites = stored.siteArray || [];
    realTime = stored.timeArray || [];

    let s1= document.getElementById("site1");
    let t1= document.getElementById("time1");
    let s2= document.getElementById("site2");
    let t2= document.getElementById("time2");

    s1.placeholder = stored.s1 || '';
    t1.placeholder = stored.t1 || '';
    s2.placeholder = stored.s2 || '';
    t2.placeholder = stored.t2 || '';


    let sites ={};

 

    document.getElementById("sub1").addEventListener("click", function () {
        let oneSite= document.getElementById("site1").value;
        oneSite = new URL(oneSite).hostname;
        let oneTime= document.getElementById("time1").value;
        chrome.storage.local.set({ s1: oneSite, t1: oneTime });

        realSites[0]= oneSite;
        realTime[0]= oneTime;

        chrome.storage.local.set({ siteArray: realSites, timeArray: realTime });

        console.log('Updated realSites:', realSites);
        console.log('Updated realTime:', realTime);

        sites[oneSite] = oneTime;

   

        chrome.tabs.query({ active:true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {type: 'INPUT', data: sites })
        });
});

document.getElementById("sub2").addEventListener("click", function () {
    let twoSite= document.getElementById("site2").value;
        twoSite = new URL(twoSite).hostname;
        let twoTime= document.getElementById("time2").value;
        chrome.storage.local.set({ s2: twoSite, t2: twoTime });

        realSites[1]= twoSite;
        realTime[1]= twoTime;

        chrome.storage.local.set({ siteArray: realSites, timeArray: realTime });

        sites[twoSite] = twoTime;

   

        chrome.tabs.query({ active:true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {type: 'INPUT', data: sites })
        });
});




let inputTime= document.querySelector("#timer");
localStorage.setItem("timerSubmit", document.querySelector("#timerSubmit"));


document.getElementById("bookButton").addEventListener("click", function(){
    document.getElementById("inside").style.display = "block";
})

})()
