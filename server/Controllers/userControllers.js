const User = require('../Models/User')
const userService = require('../Services/userService')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY

module.exports = {
    getAll: async (req, res) => {
        // try {
        //     const candidates = await User.find()
        //     User.find({}, (error, candidates) => {
        //         if (error) {
        //             console.log(error)
        //             res.status(400).json({
        //                 message: "Ошибка при запросе всех пользователей"
        //             })
        //         }
        //         res.status(200)
        //         for (let candidate of candidates) {
        //           res.json({
        //             email: candidate.email
        //           })
        //         }
              
        //         mongoose.connection.close();
        //       });
        // } catch (error) {
        //     console.log(error)
        //     res.status(400).json({
        //         message: "Ошибка при запросе всех пользователей"
        //     })
        // }
    },
    register: async (req, res) => {
        try {
            const {password, email} = req.body
            const userData = await userService.registration(email, password, res)

            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            res.status(200).json(userData)
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Ошибка при регистрации"
            })
        }
    },
    // Не доделан
    login: async (req, res) => {
        const candidate = await User.findOne({email: req.body.email})
        if (candidate) {
            if (await bcrypt.compare(req.body.password,  candidate.password)) {
                const payload = {
                    email: req.body.email
                }
                // Сделать refresh token
                const token = jwt.sign(payload, SECRET_KEY, {expiresIn: '7d'})
                res.status(200).json(`Bearer ${token}`)
            } else {
                res.status(409).json({
                    message: "Пароль введён неверно"
                })
            }
        } else {
            res.status(404).json({
                message: "Пользователь с такой почтой не найден"
            })
        }
    },
    logout: async (req, res, next) => {

    },
    activate: async (req, res, next) => {
        try {
            const activationLink = req.params.link
            await userService.activate(activationLink, res)
            res.redirect(process.env.CLIENT_URL)
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Ошибка при активации аккаунта"
            })
        }

    },
    refresh: async (req, res, next) => {
        
    }
}