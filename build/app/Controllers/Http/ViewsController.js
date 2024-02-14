"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const About_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/About"));
const Project_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Project"));
class ViewsController {
    async index({ view }) {
        try {
            const project_App = await Project_1.default.query().where('category', 'app');
            const project_Web = await Project_1.default.query().where('category', 'web');
            const project_Card = await Project_1.default.query().where('category', 'card');
            const project_Api = await Project_1.default.query().where('category', 'api');
            const about = await About_1.default.all();
            return view.render('home', { about, project_App, project_Web, project_Card, project_Api });
        }
        catch (error) {
            console.log('error fetching project data', error);
            return { error };
        }
    }
    async details({ view }) {
        return view.render('details');
    }
    async signup({ view }) {
        return view.render('auth/signup');
    }
    async login({ view }) {
        return view.render('auth/login');
    }
    async admin({ view }) {
        const project = await Project_1.default.all();
        return view.render('dashboard/admindash', { project });
    }
}
exports.default = ViewsController;
//# sourceMappingURL=ViewsController.js.map