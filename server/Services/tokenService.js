const jwt = require('jsonwebtoken')
const Token = require('../Models/Token')

module.exports = {
    generateTokens: (payload) => {
        const accessToken = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.SECRET_REFRESH_KEY, {expiresIn: '30d'}) 
        return {
            accessToken,
            refreshToken
        }
    },
    saveToken: async (userId, refreshToken) => {
        const tokenData = await Token.findOne({user: userId})
        if(tokenData) {
            tokenData.refreshToken = refreshToken
            tokenData.save()
        }
        const token = new Token({
            user: userId,
            refreshToken: refreshToken
        }) 

        await token.save()
    }
};