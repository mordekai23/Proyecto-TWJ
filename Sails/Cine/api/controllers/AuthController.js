/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


var Passwords = require('machinepack-passwords');
var jwt = require('jsonwebtoken');

module.exports = {
  logIn: function (req, res) {
    var parametros = req.allParams()

    if (parametros.correo && parametros.password) {
      Usuario
        .findOne({
          correo: parametros.correo
        })
        .exec(function (err, usuarioEncontrado) {
          if (err) return res.serverError("Error", err);
          if (!usuarioEncontrado) {
            return res.notFound("Usuario no Encontrado");
          } else {
            Passwords.checkPassword({
              passwordAttempt: parametros.password,
              encryptedPassword: usuarioEncontrado.password
            })
              .exec({
                error: function (err) {
                  return res.serverError(err);
                },
                incorrect: function () {
                  return res.badRaquest("Datos Invalidos")
                },
                success: function () {
                  // devolver la credencial
                  var token = jwt
                    .sign(
                      {
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: {
                          id: usuarioEncontrado.id,
                          nombre: usuarioEncontrado.nombre,
                          correo: usuarioEncontrado.correo
                        }
                      },
                      'leninAmaACorrea');
                  return res.ok(token);
                }
              });
          }

        });
    } else {

      return res.badRequest("No envia correo y pass");

    }
  }
};
