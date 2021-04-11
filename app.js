const {app, BrowserWindow} = require('electron')

function createWindow () {
  const mainWindow = new BrowserWindow({
    minWidth: 1280,
    minHeight: 800,
    maxWidth: 1920,
    maxHeight: 1080,
    show: false,
    frame: true,
    fullscreen: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.maximize()
  mainWindow.setMenuBarVisibility(false)
  mainWindow.loadFile('app/public/html/app.html')
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  })
}

app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

//electron-packager . --platform=win32  --archi=ia32 --icon="C:\Users\Allan Scala\Documents\Application\app\img\banknotes-32.ico"
//electron-packager . --platform=darwin  --arch=x64 --icon="/Users/admin/Documents/Projetos/my-money-application/app/img/moneybox-32.icns"