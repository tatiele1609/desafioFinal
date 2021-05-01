const express = require('express');
const transactionRouter = express.Router();


import {TransactionModel} from '../models/TransactionModel.js';

const app = express();

app.get('/transaction', async (req, res) =>{
    try {
        const transaction =  await TransactionModel.find({});

        res.send(transaction);
    } catch (error) {
        res.status(500).send(error);
    }
 });
 

module.exports = transactionRouter;
