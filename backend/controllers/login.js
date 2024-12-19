const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');
const Joi = require('joi')

const router = express.Router();
const SECRET_KEY = 'hidroponikUntukMasaDepan';

let registerValidate = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(255).required(),
  })
module.exports = {
    register : async (req, res) => {
        const { firstname, lastname, email, password } = req.body
        const query = 'SELECT * FROM users WHERE email = ?';
        try {
        const validate = await registerValidate.validate(req.body)
        if(validate.error){
            return res.status(400).json({
                status: 'error',
                message: validate.error.message
            })
        }
        const [results, fields] = await pool.query(query, [email])
        if(results.length > 0){
            return res.status(402).json({status: 'failed', message: "user sudah ada bro!"})
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const queryPost = 'INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)';
            const [result, fields] = await pool.query(queryPost, [firstname, lastname, email, hashedPassword]);
            console.log(result);
            
            return res.status(200).json({ message: 'berhasil', deta: req.body });
        }
            
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    login : async(req, res) => {
        const { email, password } = req.body;
        const query = 'SELECT * FROM users WHERE `email` = ?';
        try{
        if (!email || !password) {
            return res.status(400).json({ message: 'Semua field wajib diisi!' });
        }
        const [results] = await pool.query(query, [email])
        const user = results[0]
        const checkPassword =  bcrypt.compare(password, user.password);
        if (!checkPassword) {
            return res.status(401).json({ message: 'Password salah!' });
        }
        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
            return res.status(200).json({ message: 'Login berhasil!', token });
        }
        catch(err){
            res.status(500).json({ message: err.message });
            
        }
    }
}
