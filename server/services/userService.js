const db = require('./../models');

module.exports = {
    findUsers: async(username) => {
        try {
            return await db.user.findOne(
                {
                    where: {
                        username
                    }
                }
            )
        } catch (error) {
            return(error)
        }
    },

    findUserId: async(id) => {
        try {
            return await db.user.findOne(
                {
                    where: {
                        id
                    }
                }
            )
        } catch (error) {
            return error
        }
    },

    findUserEmail: async(email) => {
        try {
            return await db.user.findOne(
                {
                    where: {email}
                }
            )
        } catch (error) {
            return error
        }
    },

    passwordUpdate: async(hashedPassword, id) => {
        try {
            return await db.user.update(
                {
                    password: hashedPassword
                },
                {
                    where: {
                        id
                    }
                }
            )
        } catch (error) {
            console.log(`from password update in service`, error);
            return error
        }
    }
}