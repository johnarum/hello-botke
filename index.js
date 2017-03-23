'use strict'
const express = require('express')
const bodyParser =require('request')

const app =express()

app.set('port',(process.env.PORT || 5000))

// Allows us to process the data 
app.use(bodyParser.urlencoded({extend:false}))
app.use(bodyParser.json())

// ROUTES

app.get('/',fuction(req, res){
	res.send("Hi iam a chatbot")
})

//Facebook
app.get('/webhook/', function(req,res){
	if (req.query['hub.verify_token']==="blondiebytes"){
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong token")
})

//start serer listen request

app.listen(app.get('port') function(){
	console.log("running: port")
