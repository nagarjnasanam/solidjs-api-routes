import server$ from 'solid-start/server'
export const logOnServer = server$(async (msg)=>{
        console.log('msg',msg)
    })