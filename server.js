import express from 'express'
// const express= require('express')
// const { default: mongoose } = require('mongoose')
const port=2030 
export const app=express()


// CONNECTION A LA BASE DE DONNÉE
import mongoose from 'mongoose'
// const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://takparasoulemane:SOUL229@cluster0.tooqy.mongodb.net/bookAPi')
.then(()=> console.log('suis connecté, envoi tes données'))

app.listen( port,()=>{
  console.log('continue...')
})