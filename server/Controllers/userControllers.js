const User = require('../Models/User')
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
            const candidate = await User.findOne({email: req.body.email})
            if (candidate) {
                res.status(409).json({
                    message: "Пользователь с такой почтой уже существует"
                })
            } else {
                if (req.body.password) {
                    const salt = await bcrypt.genSalt(10)
                    const hashPassword = await bcrypt.hash(req.body.password, salt)
                    const user = new User({
                        email: req.body.email,
                        password: hashPassword
                    })
                    await user.save()
                    res.status(200).json({
                        message: "Регистрация прошла успешно"
                    })
                } else {
                    res.status(409).json({
                        message: "Заполните пароль"
                    })
                }
            }
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
    }
}