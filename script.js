let isWindowOpen = false;
function toggleWindow(windowId, frameId, app) {
    console.log("function toggleWindow called");
    const allWindows = document.querySelectorAll('iframe, textarea');
    const allFrames = document.querySelectorAll('.framehidden, .frameshown');

    // If any window is already open and the current window is not the same as the one being toggled
    if (isWindowOpen && !document.getElementById(windowId).classList.contains('windowshown')) {
        console.log("Another window is already open.");
        return; // Prevent opening another window
    }

    // Hide all other windows
    allWindows.forEach(win => {
        if (win.id !== windowId) {
            win.classList.remove('windowshown');
            win.classList.add('windowhidden');
        }
    });

    // Hide all other frames
    allFrames.forEach(frame => {
        if (frame.id !== frameId) {
            frame.classList.remove('frameshown');
            frame.classList.add('framehidden');
        }
    });

    const windowElement = document.getElementById(windowId);
    const frameElement = document.getElementById(frameId);

    if (windowElement.classList.contains('windowhidden')) {
        windowElement.classList.remove('windowhidden');
        windowElement.classList.add('windowshown');
        frameElement.classList.remove('framehidden');
        frameElement.classList.add('frameshown');
        isWindowOpen = true; // Update the global state
        document.getElementById('app').innerHTML = app;
    } else {
        windowElement.classList.remove('windowshown');
        windowElement.classList.add('windowhidden');
        frameElement.classList.remove('frameshown');
        frameElement.classList.add('framehidden');
        isWindowOpen = false; // Update the global state
    }
}
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    if (document.getElementById(elmnt.id + "header")) {
        // If present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // Otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // Get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // Call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
    
        // calculate the new position of the element:
        let newPosX = elmnt.offsetLeft - pos1;
        let newPosY = elmnt.offsetTop - pos2;
    
        // get the dimensions of the screen:
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
    
        // ensure that the element stays within the bounds of the screen:
        if (newPosX < 0) {
            newPosX = 0;
        } else if (newPosX > screenWidth - elmnt.offsetWidth) {
            newPosX = screenWidth - elmnt.offsetWidth;
        }
    
        if (newPosY < 0) {
            newPosY = 0;
        } else if (newPosY > screenHeight - elmnt.offsetHeight) {
            newPosY = screenHeight - elmnt.offsetHeight;
        }
    
        // set the element's new position:
        elmnt.style.left = newPosX + "px";
        elmnt.style.top = newPosY + "px";
    }
    

    function closeDragElement() {
        // Stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
dragElement(document.getElementById("gframe"));


document.addEventListener("dblclick", function() {
    console.log("DBL CLICK DETECTED");
    document.getElementById("app").innerHTML = "Finder";
});

function updateDateTime() {
    const timeElement = document.getElementById('datetime');
    const now = new Date();

    // Format the time
    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    const time = now.toLocaleTimeString('en-US', timeOptions);

    // Format the date
    const dateOptions = {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    };
    let date = now.toLocaleDateString('en-US', dateOptions);
    date = date.replace(',', ''); // Remove the comma

    timeElement.innerHTML = `${date} &nbsp; &nbsp; ${time}`;
}

// Update the time every second
setInterval(updateDateTime, 1000);

// Initial call to set the time immediately on page load
updateDateTime();