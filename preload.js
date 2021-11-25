const ejf = require('edit-json-file')
const {ipcRenderer} = require('electron')

document.addEventListener('DOMContentLoaded', function(){

    let file = ejf(`${__dirname}/config.json`)

    let startstop = document.getElementById('startstop')
    let connect = document.getElementById('connect')
    let server = document.getElementById('server')
    let address = document.getElementById('address')
    let mousemove = document.getElementById('mousemove')
    let mousedrag = document.getElementById('mousedrag')
    let mousewheel = document.getElementById('mousewheel')
    let mouseclick = document.getElementById('mouseclick')
    let mouseup = document.getElementById('mouseup')
    let mousedown = document.getElementById('mousedown')
    let keyup = document.getElementById('keyup')
    let keydown = document.getElementById('keydown')
    let serverState = ipcRenderer.sendSync('server-state')

    server.checked = file.get('server')
    address.value = file.get('address')
    mousemove.checked = file.get('mousemove')
    mousedrag.checked = file.get('mousedrag')
    mousewheel.checked = file.get('mousewheel')
    mouseclick.checked = file.get('mouseclick')
    mouseup.checked = file.get('mouseup')
    mousedown.checked = file.get('mousedown')
    keyup.checked = file.get('keyup')
    keydown.checked = file.get('keydown')

    startstop.addEventListener('click',function(event){
        event.preventDefault()
        // starts or stops server if server checkbox is enabled
        ipcRenderer.send('start-stop-server', 'ok')
        serverState = ipcRenderer.sendSync('server-state')
        console.log(serverState);
    })
    connect.addEventListener('click',function(event){
        event.preventDefault()
        console.log(address.value);
    })
    server.addEventListener('change',function(event){
        console.log('server');
        // enable startstop and disable the connect
    })

})