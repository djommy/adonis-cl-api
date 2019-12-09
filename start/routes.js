'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world' }
})

Route.group(() => {
  Route.get('clubs', 'App/Controllers/Http/ClubController.index')
  Route.post('clubs', 'App/Controllers/Http/ClubController.store')
  Route.get('clubs/winners', 'App/Controllers/Http/ClubController.fetchWinners')
  Route.get('clubs/winners/:season', 'App/Controllers/Http/ClubController.fetchWinnersForSeason')
  Route.get('clubs/:id', 'App/Controllers/Http/ClubController.show')
  Route.delete('clubs/:id', 'App/Controllers/Http/ClubController.destroy')
  Route.patch('clubs/:id', 'App/Controllers/Http/ClubController.update')
}).prefix('api')

Route.group(() => {
  Route.post('register', 'App/Controllers/Http/AuthController.register')
  Route.post('login', 'App/Controllers/Http/AuthController.login')
}).prefix('auth')
