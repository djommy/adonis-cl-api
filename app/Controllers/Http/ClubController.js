'use strict'

const Club = use('App/Models/Club')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with clubs
 */
class ClubController {
  /**
   * Show a list of all clubs.
   * GET clubs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ response }) {
    const clubs = await Club.all()

    response.json({
      data: clubs
    })
  }

  /**
   * Create/save a new club.
   * POST clubs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const payload = request.all()
    const club = await Club.create(payload)

    response.status('200').json({
      message: 'Successfully saved club',
      data: club
    })
  }

  /**
   * Display a single club.
   * GET clubs/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async show ({ params: {id}, response }) {
    const club = await Club.find(id)

    response.status(200).json({
      data: club
    })
  }

  /**
   * Update club details.
   * PUT or PATCH clubs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a club with id.
   * DELETE clubs/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroy ({ params: { id }, response }) {
    const club = await Club.find(id)

    await club.delete()

    response.status(200).json({
      message: `Deleted ${club.name}`,
      data: club
    })
  }
}

module.exports = ClubController
