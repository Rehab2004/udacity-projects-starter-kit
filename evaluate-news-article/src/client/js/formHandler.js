const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

const handleSubmit = async () => {
    /**
     * TODO
     *  - Get Value of the input for URL
     
     *  - Check if it's URL or not
     *      yes
     *          send it to the backend
     *      no
     *          show user message it's not valid URL
     * 
     */
    var myUrl=document.getElementById("article-url").Value;
    Client.chekUrl(myUrl);
    if(myUrl){
        post('/add-url',url);
    }else{
        alert("not valid url");
    }
}

export default handleSubmit
