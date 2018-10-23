import {
    Meteor
} from 'meteor/meteor';
import {
    Mongo
} from 'meteor/mongo';
import {
    check
} from 'meteor/check';


const jwt = require('jsonwebtoken');
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.CODE_CRYPTR);

export const Users = new Mongo.Collection('users');

Meteor.methods({
    'users.insert'({
        username,
        password
    }) {
        check(username, String);
        check(password, String);

        try {
            Users.insert({
                username: username,
                password: cryptr.encrypt(password)
            });
            return true;
        } catch (err) {
            if (err) {
                if (err.code === 11000) {
                    throw new Meteor.Error("There is an user with that username.");
                } else {
                    throw new Meteor.Error("There was an error. Please try again.");
                }
            }
        }

    },
    'users.validateUser'({
        username,
        password
    }) {
        check(username, String);
        check(password, String);

        let user = Users.findOne({
            username: username
        });

        if (!user) {
            throw new Meteor.Error('There is not an user with that username.');
        } else {
            if (cryptr.decrypt(user.password) !== password) {
                throw new Meteor.Error('The inserted password is not correct.');
            }
        }

        delete user.clave;

        let token = jwt.sign(user, process.env.CODE_TOKEN);

        return token;
    },
    'users.decodificate'(token) {
        let user = decodificateToken(token);
        if (user) {
            let nUser = Users.findOne({
                _id: user._id
            });

            if (nUser) {
                delete nUser.clave;
                return nUser;
            } else {
                return null
            }
        } else {
            return null;
        }
    }
});

function decodificateToken(token) {
    return token ? jwt.verify(token, process.env.CODE_TOKEN) : null;
}