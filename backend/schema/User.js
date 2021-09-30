// return User Schema
function UserSchema() {
    return {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        rule: {
            type: String,
            enum: ['admin','user','publisher'],
            default: 'user'
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
}

module.exports = UserSchema();