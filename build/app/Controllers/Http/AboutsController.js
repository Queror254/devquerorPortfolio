"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const About_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/About"));
class AboutsController {
    async index({}) {
        const about = await About_1.default.query().firstOrFail();
        console.log(about);
        return about;
    }
    async store({ request, response }) {
        try {
            const data = request.only(['title', 'intro', 'website', 'phone', 'city', 'age', 'level', 'email', 'freelance', 'content',]);
            await About_1.default.create(data);
            return response.redirect().back();
        }
        catch (error) {
            return { error };
        }
    }
    async update({ params, request }) {
        const data = request.only(['title', 'intro', 'website', 'phone', 'city', 'age', 'level', 'email', 'freelance', 'content']);
        const about = await About_1.default.findOrFail(params.id);
        about.merge(data);
        await about.save();
        return about;
    }
    async destroy({ params }) {
        const about = await About_1.default.findOrFail(params.id);
        await about.delete();
        return { message: 'About deleted successfully' };
    }
}
exports.default = AboutsController;
//# sourceMappingURL=AboutsController.js.map