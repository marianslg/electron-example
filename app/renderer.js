const os = require('os');
const nodeDiskInfo = require('node-disk-info');


document.getElementById('but-new-window2').onclick = function() {

    var width = screen.width - 200;
    var height = screen.height - 200;

    console.log(height + " - " + width);
    var params = 'height=200,width=200,top=' + height + ',left=' + width + ',frame=true,nodeIntegration=no';
    var win = window.open(document.getElementById("text-web").value, '_blank', params);
    //console.log(win);
    var num = 0;

    /*const id = setInterval(() => {
        num += 5;
        win.moveTo(win.window.left, win.screenLeft--);

        if (num > 200) {
            clearInterval(id);
        }
    }, 10);*/


};

document.getElementById('but-new-window').onclick = function() {
    var params = 'height=500,width=500,frame=true,nodeIntegration=no';
    window.open(document.getElementById("text-web").value, '_blank', params)
};



document.getElementById('but-new-notification').onclick = function() {
    new Notification("NOTIFICATION_TITLE", { body: document.getElementById("text-notificacion").value })
        .onclick = () => document.getElementById("output").textContent = "CLICK_MESSAGE"
};

loadData();

function loadData() {
    var mem = document.getElementById("memory-chart");
    var usage_mem = parseInt(((os.totalmem() - os.freemem()) * 100 / os.totalmem()), 10);

    mem.style = "--p: " + usage_mem;
    mem.textContent = usage_mem + "%";

    document.getElementById("memory-used").textContent = ((os.totalmem() - os.freemem()) / 1024 / 1024).toFixed(2) + " MB";
    document.getElementById("memory-free").textContent = (os.freemem() / 1024 / 1024).toFixed(2) + " MB";

    nodeDiskInfo.getDiskInfo()
        .then(disks => {
            var diskinfo = "";

            for (const disk of disks) {
                var div = document.createElement("div");
                var subDiv1 = document.createElement("div");
                subDiv1.className = "pie";
                subDiv1.style = "--p: " + disk.capacity.replace('%', '');
                subDiv1.textContent = disk.capacity;

                var subDiv2 = document.createElement("div");
                subDiv2.textContent = disk.filesystem + " (" + disk.mounted + ")";
                div.style = "position: relative; display: inline-grid; margin-right: 5px;margin-bottom: 5px;"
                div.appendChild(subDiv2);
                div.appendChild(subDiv1);

                document.getElementById("disk-info").appendChild(div);
            }
        })
        .catch(reason => {
            console.error(reason);
        });
}