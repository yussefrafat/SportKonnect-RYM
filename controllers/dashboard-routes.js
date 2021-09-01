const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment, Like } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    
})