const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { User } = require('../../../../model');
const response = require('../../../../response');
const findUserByEmail = require('../service.register/findUserByEmail');

const createUser = async (req, res) => {
    const { name, email, password } = req.body;    
    console.log('회원가입 라우팅 확인')
    try {

        const existedUser = await findUserByEmail(email);

        if(existedUser) {
            return response(res, 400, '가입된 유저가 존재하여 회원가입 할 수 없습니다.');
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Password hashing

        const user = await User.create({
            name : name,
            email: email,
            password: hashedPassword
        });

        return response(res, 200, user);
    } catch (err) {
        console.error(err);
        return response(res, 500, 'Failed to Create User');
    }
};

module.exports = {
    createUser
};
