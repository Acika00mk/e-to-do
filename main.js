const {
    app,
    BrowserWindow
} = require('electron')
const path = require('path')
const url = require('url')
let win

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        toolbar: false
    })

    win.loadURL(url.format({
//        pathname: path.join(__dirname, '/ea-ionic/www/index.html'),
        pathname: path.join(__dirname, '/app/index.html'),
        protocol: 'file:'
    }))
    // Open the DevTools.
    //  win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
