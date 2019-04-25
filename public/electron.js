// ./main.js
const {app, BrowserWindow} = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

let win = null;

function createWindow() {
  win = new BrowserWindow({ width: 1000, height: 600, frame: false, show:false, backgroundColor: '#FFF'});
  win.loadURL(isDev ? 'http://localhost:3000' :`file:///${path.join(__dirname, '../build/index.html')}`);
  win.once('ready-to-show', () => {
    win.show()
  })

  // win.setIgnoreMouseEvents(true)
  // win.webContents.openDevTools()


  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });
}


app.on('ready', function () {

  createWindow();

});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
