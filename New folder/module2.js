window.addEventListener('load',()=>{
    const params= (new URL(document.location)).searchParams;
    const mail45=params.get('mail45');
    document.getElementById('fill_mail').innerHTML=mail45;
})