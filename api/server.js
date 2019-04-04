const express = require('express');
const authRouter = require('../auth/auth-router');
const authMiddleware = require('./auth-middleware')
const userRouter = require('../users/users-router')

const server = express();

server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api', authMiddleware, userRouter)

server.get('/', (req,res)=> {
    res.send(<h1> Hello it's me </h1>)
})

module.exports = server