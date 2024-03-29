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
Route.get('/admin/', "ViewsController.login").as('route.login')
Route.get('/admin/signup', "ViewsController.signup").as('route.signup')
Route.get('/details', "ViewsController.details").as('route.details')
Route.get('/admin/panel_', "ViewsController.admin").as('route.adminPanel')
Route.get('/comingsoon', "ViewsController.comingsoon").as('route.comingsoon')


//post request : 
Route.post('/create/admin', 'AuthController.signup').as('route.createAdmin')
Route.post("/admin/login", "AuthController.login").as('route.loginAdmin')

//
// Route for storing new about data
Route.post('/abouts', 'AboutsController.store')

// Route for updating existing about data
Route.put('/abouts/update', 'AboutsController.update')

// Route for deleting existing about data
Route.delete('/abouts/delete', 'AboutsController.destroy')

//test 
Route.get('/test', 'AboutsController.index')

///============== Portfolio Route ===================///

//View all the projects
Route.get('/new_project', 'ProjectsController.index').as('project.create')

//Create a portfolio item
Route.post('/store_project', 'ProjectsController.store').as('project.store')

//Update an existing portfolio item
Route.patch('/update_project/:slug', 'ProjectsController.update').as('project.update')

//Delete an existing portfolio item 
Route.delete('/delete_project/:slug', 'ProjectsController.delete').as('project.delete');


//edit an existing portfolio item 
Route.get('/edit_project/:slug', 'ProjectsController.edit').as('project.edit');

//open the details page : 
Route.get('/details/:slug', 'ProjectsController.more').as('project.detail');

//error handling test routes : 
Route.get('/500', async ({ view }) => {
  return view.render('errors/server-error')
})
Route.get('/404', async ({ view }) => {
  return view.render('errors/not-found')
})


