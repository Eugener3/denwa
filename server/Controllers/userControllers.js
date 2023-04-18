const User = require('../Models/User')
const bcrypt = require('bcrypt')

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
    login: async (req, res) => {
        const candidate = await User.findOne({email})
    }
}