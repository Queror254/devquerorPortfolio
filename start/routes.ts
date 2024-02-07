/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/welcome', async ({ view }) => {
  return view.render('welcome')
})

//Get request :
Route.get('/', "ViewsController.index").as('route.home')
Route.get('/admin/login', "ViewsController.login").as('route.login')
Route.get('/admin/signup', "ViewsController.signup").as('route.signup')
Route.get('/details', "ViewsController.details").as('route.details')
Route.get('/admin/panel_', "ViewsController.admin").as('route.adminPanel')


//post request : 
Route.post('/create/admin', 'AuthController.signup').as('route.createAdmin')
Route.post("/admin/login", "AuthController.login").as('route.loginAdmin')