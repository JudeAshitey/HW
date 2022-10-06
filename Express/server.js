const morgan =  require('morgan')
const express = require('express');


const app = express();
const PORT = 3000;

app.get("/greeting/:name",(req, res) => {

    const{name} = req.params
    res.send(`Good Day ${name}, The Day is full of opportunities`);
})

app.get('/tip/:total/:tipPercentage',(req,res) =>
{
    let {total, tipPercentage} = req.params;
    let tip = total *= (tipPercentage/100)
    res.send(`Your tip is ${tip}`) 
}
)

app.get('/magic/:ask', (req,res) =>{
    let {ask} = req.params

    const possibleAnswers = ["It is certain", "It is decidedly so", "Without a doubt",
     "Yes definitely","You may rely on it", "As I see it yes",
      "Most likely", "Outlook good","Yes",
       "Signs point to yes", "Reply hazy try again",
        "Ask again later","Better not tell you now", 
        "Cannot predict now", "Concentrate and ask again",
        "Don't count on it", "My reply is no", "My sources say no",
        "Outlook not so good", "Very doubtful"]

         let response = possibleAnswers[Math.floor(Math.random()*qArray.length)]

         res.send(`${ask} : ${response} `)
    })


app.listen(PORT, () =>{
    console.log(`Server is running on port : ${PORT }`);
})
