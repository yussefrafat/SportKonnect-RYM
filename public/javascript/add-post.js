async function newFormHandler(event){
    event.preventDefault();
    
    const reponse = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({
            title, post_url
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok){
        document.location.replace('/')
    }else {
        alert(response.statusText);
    }
}