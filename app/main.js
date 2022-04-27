const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    });
    mainWindow.loadFile(__dirname + '/index.html');

    function myTimer() {
        var mainWindows = new BrowserWindow({
            height: 200,
            width: 200,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: true,
            }
        });

        mainWindows.loadFile(__dirname + '/index.html');
        mainWindows.setPosition(200, 200)
    }

});