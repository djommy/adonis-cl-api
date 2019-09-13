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
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.get('clubs', 'App/Controllers/Http/ClubController.index')
  Route.post('clubs', 'App/Controllers/Http/ClubController.store')
  Route.get('clubs/:id', 'App/Controllers/Http/ClubController.show')
  Route.delete('clubs/:id', 'App/Controllers/Http/ClubController.destroy')
}).prefix('api')
