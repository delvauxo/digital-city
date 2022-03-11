const yup = require('yup');

const schemaContact = yup.object().shape({
    pseudo: yup.string().trim().required(),
    email: yup.string().email().required(),
    firstname: yup.string(),
    lastname: yup.string(),
    message: yup.string()
});

module.exports = { schemaContact };