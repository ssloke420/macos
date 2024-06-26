let output = document.getElementById("output");
let input = document.getElementById("input");
let handleCommands = (event) => {
  if (event.keyCode == 13) {
    output.innerHTML = ""
    let val = input.value;
    if (val == "shlek") {
      output.innerHTML = "Welcome lord!";
    } else if (val == "SYSTEM OVERRIDE") {
      output.innerHTML = "You have now unlocked admin features" ;
    } else if (val == "caffeine") {
      output.innerHTML = "Justin will now be deployed in the system files after a glass of coffee.";
    } else if (val == "brain") {
      output.innerHTML = "Skbidi Toilet Gang Mode Activated";
    } else if (val == "date" || val == "time" || val == "datetime") {
      date = new Date();
      output.innerHTML = date;
    } else {
      output.innerHTML = "ERROR: Unknown Command";
    }
  }
}

document.addEventListener("keydown", handleCommands)
// IP
// function findIP(onNewIP) { //  onNewIp - your listener function for new IPs
//   var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection; //compatibility for firefox and chrome
//   var pc = new myPeerConnection({iceServers: []}),
//     noop = function() {},
//     localIPs = {},
//     ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
//     key;
//     //window.saveIP = pc;
//     //window.saveIP = localIPs; // Returns [object, object] or JSON.stringfy returns {}

//   function ipIterate(ip) {
//     if (!localIPs[ip]) onNewIP(ip);
//     localIPs[ip] = true;  
//   }
//   pc.createDataChannel(""); //create a bogus data channel
//   pc.createOffer(function(sdp) {
//     sdp.sdp.split('\n').forEach(function(line) {
//       if (line.indexOf('candidate') < 0) return;
//       line.match(ipRegex).forEach(ipIterate);
// });
//     pc.setLocalDescription(sdp, noop, noop);
//   }, noop); // create offer and set local description
//   pc.onicecandidate = function(ice) { //listen for candidate events
//     if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
//     ice.candidate.candidate.match(ipRegex).forEach(ipIterate);
//   };
// }


// var ul = document.createElement('ul');
// ul.textContent = 'Your IPs are: '
// document.body.appendChild(ul);

// function addIP(ip) {
//   console.log('got ip: ', ip);
//   var li = document.createElement('li');
//   li.textContent = ip;
//   window.saveIP = ip;  // <--value captured is [object HTMLParagraph]; JSON.stringify returns {}
//   ul.appendChild(li);
// }
