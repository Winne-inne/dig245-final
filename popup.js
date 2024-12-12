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

document.getElementById("sub3").addEventListener("click", function () {
    let threeSite= document.getElementById("site3").value;
        threeSite = new URL(threeSite).hostname;
        let threeTime= document.getElementById("time3").value;
        chrome.storage.local.set({ s3: threeSite, t3: threeTime });

        realSites[2]= threeSite;
        realTime[2]= threeTime;

        chrome.storage.local.set({ siteArray: realSites, timeArray: realTime });

        sites[threeSite] = threeTime;

   

        chrome.tabs.query({ active:true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {type: 'INPUT', data: sites })
        });
});

document.getElementById("sub4").addEventListener("click", function () {
    let fourSite= document.getElementById("site4").value;
        fourSite = new URL(fourSite).hostname;
        let fourTime= document.getElementById("time4").value;
        chrome.storage.local.set({ s4: fourSite, t4: fourTime });

        realSites[3]= fourSite;
        realTime[3]= fourTime;

        chrome.storage.local.set({ siteArray: realSites, timeArray: realTime });

        sites[fourSite] = fourTime;

   

        chrome.tabs.query({ active:true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {type: 'INPUT', data: sites })
        });
});

document.getElementById("sub5").addEventListener("click", function () {
    let fiveSite= document.getElementById("site5").value;
        fiveSite = new URL(fiveSite).hostname;
        let fiveTime= document.getElementById("time5").value;
        chrome.storage.local.set({ s5: fiveSite, t5: fiveTime });

        realSites[4]= fiveSite;
        realTime[4]= fiveTime;

        chrome.storage.local.set({ siteArray: realSites, timeArray: realTime });

        sites[fiveSite] = fiveTime;

   

        chrome.tabs.query({ active:true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {type: 'INPUT', data: sites })
        });
});





localStorage.setItem("timerSubmit", document.querySelector("#timerSubmit"));


document.getElementById("bookButton").addEventListener("click", function(){
    document.getElementById("inside").style.display = "block";
})

document.getElementById("infoButton").addEventListener("click", function(){
    document.getElementById("infoIn").style.display = "block";
})

document.getElementById("close1").addEventListener("click", function(){
    document.getElementById("infoIn").style.display = "none";
})

document.getElementById("close2").addEventListener("click", function(){
    document.getElementById("inside").style.display = "none";
})

})()
