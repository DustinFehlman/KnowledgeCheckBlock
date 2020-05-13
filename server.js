const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('api/public'))

app.get('/api/getQuestion', (req, res) => {
    res.send({
        text: 'What is this a picture of?',
        answers: [
            {
                id: 1,
                text: "Cookies and coffee",
                isCorrect: true,
                blurb: "I just love cookies and a warm cup of coffee!",
            },
            {
                id: 2,
                text: "Donuts and cider",
                isCorrect: false,
                blurb: "I love donuts but never seen one like that!",
            }
        ],
        imgUrl: "image/kcImage.gif"
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));