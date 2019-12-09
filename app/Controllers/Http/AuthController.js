'use strict'

const User = use('App/Models/User')

class AuthController {

  /**
   * Register the user
   * DELETE auth/register
   *
   * @param {object} ctx
   * @param {auth} ctx
   * @param {Response} ctx.response
   */
  async register({ request, auth, response }) {
    let user = await User.create(request.all())

    //generate token for user;
    let token = await auth.generate(user)

    Object.assign(user, token)

    response.status(200).json({
      message: `Registered ${user.email}`,
      data: user
    })
  }

  /**
   * Login the user if matching email
   * DELETE auth/login
   *
   * @param {object} ctx
   * @param {auth} ctx
   * @param {Response} ctx.response
   */
  async login({ request, auth, response }) {

    let { email, password } = request.all();

    try {
      if (await auth.attempt(email, password)) {
        let user = await User.findBy('email', email)
        let token = await auth.generate(user)

        Object.assign(user, token)
        return response.json(user)
      }


    }
    catch (e) {
      return response.json({ message: 'You are not registered!' })
    }
  }
}

module.exports = AuthController
