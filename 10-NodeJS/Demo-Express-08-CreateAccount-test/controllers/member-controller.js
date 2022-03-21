const bcryt = require('bcrypt');
const { log } = require('console');
const res = require('express/lib/response');
const memberModel = require('../models/member-model');

const memberController = {

    registerGET: (req, res) => {

        res.render('member/register');
    },

    registerPOST: (req, res) => {
        // TODO Ajouter un schema de validation
        const { email, pseudo, pwd } = req.body;

        const passwordHash = bcryt.hashSync(pwd + process.env.PWD_PEPPER, 10);

        memberModel.insert({
            email, pseudo, passwordHash
        })
            .then((id) => {
                console.log(`Account ${id} create !!!`);
                res.redirect('/');
            });
    },

    // TODO Add methode for "Login"
    loginGET: (req, res) => {
        res.render('member/login');
    },

    loginPOST: (req, res) => {
        // TODO Ajouter un schema de validation.
        const { email, pwd } = req.body;

        memberModel.getByEmail(email)
            .then(member => {
                // Si le membre est valide.
                if (member !== null) {
                    return bcryt.compare(pwd + process.env.PWD_PEPPER, member.passwordHash);
                }
                return Promise.resolve(false);
            })
            .then(isOk => {
                // Le login est valide.
                if (isOk) {
                    // Gestion de la session.
                    res.redirect('/');
                }
                // Le login est invalide.
                else {
                    // TODO Ajouter l'email dans la page login renvoyer.
                    res.render('member/login');
                }
            });
    },

    logout: (req, res) => {
        // gestion de la session (destruction).
        res.redirect('/');
    }
};

module.exports = memberController;