// TODO: Configure the environment variables
const dotenv = require('dotenv')
dotenv.config()
const mockAPIResponse = require('./mockAPI.js')
const path=('path')
const PORT = 8081

// TODO add Configuration to be able to use env variables

const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'

// TODO: Create an instance for the server
// TODO: Configure cors to avoid cors-origin issue
const cor=require('cors')
// TODO: Configure express to use body-parser as middle-ware.
const express=require('express')
const bodyParser=require('body-parser')
//const { request } = require('express')
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//app.use(cor())

// TODO: Configure express static directory.
app.use(express.static('dist'))
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})
// INFO: a route that handling post request for new URL that coming from the frontend
app.post('/add-url', async (req, res) => {
    try {
        const add=request.body;
        const URL=`${BASE_API_URL}?=key${apiKey}&url=${add}&lang=en`;
        fetch(URL).then(res=>res.json())
        .then(data=>{
            updateInf(data)    
        });
        function updateInf(data){
            const sec=document.getElementsByTagName('section')[1];
            data.forEach(elm=>{
                const {text,agreement,subjectivity,confidence ,irony,score_tag}=elm;
                sec.innerHTML=` <strong>Form Results:</strong>
                <div id="text">${text}</div>
                <div id="agreement">${agreement}</div>
                <div id="subjectivity">${subjectivity}</div>
                <div id="confidence">${confidence}</div>
                <div id="irony">${irony}</div>
                <div id="score_tag">${score_tag}</div>`
            })

        }
        /* TODO:
    1. GET the url from the request body
    
    2. Build the URL it should be something like `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
    3. Fetch Data from API
    4. Send it to the client
    5. REMOVE THIS TODO AFTER DOING IT 😎😎
    server sends only specified data to the client with below codes
     const sample = {
       text: '',
       score_tag : '',
       agreement : '',
       subjectivity : '',
       confidence : '',
       irony : ''
     }
  */
    } catch (error) {
        console.log(error.message)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

// TODO: export app to use it in the unit testing
export {app}