function UserDto(user) {
    return {
        name: user.name,
        email: user.email,
        rule: user.rule,
        createdAt:user.createdAt
    }
}

module.exports = {UserDto};