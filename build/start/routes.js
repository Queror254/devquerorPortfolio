"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/welcome', async ({ view }) => {
    return view.render('welcome');
});
Route_1.default.get('/', "ViewsController.index").as('route.home');
Route_1.default.get('/admin/', "ViewsController.login").as('route.login');
Route_1.default.get('/admin/signup', "ViewsController.signup").as('route.signup');
Route_1.default.get('/details', "ViewsController.details").as('route.details');
Route_1.default.get('/admin/panel_', "ViewsController.admin").as('route.adminPanel');
Route_1.default.post('/create/admin', 'AuthController.signup').as('route.createAdmin');
Route_1.default.post("/admin/login", "AuthController.login").as('route.loginAdmin');
Route_1.default.post('/abouts', 'AboutsController.store');
Route_1.default.put('/abouts/update', 'AboutsController.update');
Route_1.default.delete('/abouts/delete', 'AboutsController.destroy');
Route_1.default.get('/test', 'AboutsController.index');
//# sourceMappingURL=routes.js.map