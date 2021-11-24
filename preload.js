const ejf = require('edit-json-file')
// const Server = require('./src/server/server')


document.addEventListener('DOMContentLoaded', function(){
    
    // const srv = new Server()

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
        console.log('startstop');
    })
    connect.addEventListener('click',function(event){
        event.preventDefault()
        console.log(address.value);
    })
    server.addEventListener('change',function(event){
        console.log('server');
    })
    mousemove.addEventListener('click',function(event){
        console.log('mousemove');
    })
    mousedrag.addEventListener('click',function(event){
        console.log('mousedrag');
    })
    mousewheel.addEventListener('click',function(event){
        console.log('mousewheel');
    })
    mouseclick.addEventListener('click',function(event){
        console.log('mouseclick');
    })
    mousedown.addEventListener('click',function(event){
        console.log('mousedown');
    })
    mouseup.addEventListener('click',function(event){
        console.log('mouseup');
    })
    keyup.addEventListener('click',function(event){
        console.log('keyup');
    })
    keydown.addEventListener('click',function(event){
        console.log('keydown');
    })
})