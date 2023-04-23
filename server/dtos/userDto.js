// Dto = Data Transfer Object

module.exports = class UserDto{
    email
    id
    verified

    constructor(model) {
        this.email = model.email
        this.id = model._id
        this.verified = model.verified
    }
}