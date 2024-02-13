"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const About_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/About"));
class ViewsController {
    async index({ view }) {
        const about = await About_1.default.all();
        return view.render('home', { about });
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
        const about = await About_1.default.all();
        return view.render('dashboard/admindash', { about });
    }
}
exports.default = ViewsController;
//# sourceMappingURL=ViewsController.js.map