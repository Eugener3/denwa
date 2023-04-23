const User = require('../Models/User')
const mailService = require('./mailService')
const tokenService = require('./tokenService')
const UserDto = require('../dtos/userDto')
const uuid = require('uuid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    registration: async (email, password, res) => {
        const candidate = await User.findOne({email: email})
            if (candidate) {
                res.status(409).json({
                    message: "Пользователь с такой почтой уже существует"
                })
            } else {
                    const salt = await bcrypt.genSalt(10)
                    const hashPassword = await bcrypt.hash(password, salt)
                    const activationLink = uuid.v4()
                    const user = new User({
                        email: email,
                        password: hashPassword,
                        activationLink
                    })
                    await user.save()
                    await mailService.sendActivatonMail(email, `${process.env.API_URL}/api/user/activate/${activationLink}`)
                    const userDto = new UserDto(user) // id, email, isActivated
                    const tokens = tokenService.generateTokens({...userDto})
                    await tokenService.saveToken(userDto.id, tokens.refreshToken)

                    return {
                        ...tokens,
                        user: userDto
                    }
            }
    },
    activate: async (activationLink, res) => {
        const user = await User.findOne({activationLink: activationLink}).exec()
        if(!user) {
            res.status(404).json({
                message: "Такого пользователя не существует"
            })
        }
        user.verified = true
        await user.save()
    }
}