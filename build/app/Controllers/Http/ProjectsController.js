"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Project_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Project"));
class ProjectsController {
    async index({ view, }) {
        return view.render('portfolio/create');
    }
    async store({ request, response }) {
        try {
            const data = request.only(['title', 'content', 'slug', 'github', 'category', 'skills']);
            const image = request.file('image');
            await image.move('public/images');
            if (!image) {
                throw image.error();
            }
            data.image = image.fileName;
            await Project_1.default.create(data);
            return response.redirect().toPath('/admin/panel_');
        }
        catch (error) {
            console.error(error);
            return { error };
        }
    }
    async more({ params, view }) {
        try {
            const ProjectE = await Project_1.default.query().where('slug', params.slug);
            return view.render('details', { ProjectE });
        }
        catch (error) {
            return { error };
        }
    }
    async edit({ params, view }) {
        try {
            const ProjectE = await Project_1.default.query().where('slug', params.slug);
            return view.render('portfolio/edit', { ProjectE });
        }
        catch (error) {
            return { error };
        }
    }
    async update({ request, params, response }) {
        try {
            console.log(params.slug);
            const data = request.only(['title', 'content', 'category', 'github', 'skills', 'image']);
            await Project_1.default.query().where('slug', params.slug).update(data);
            return response.redirect().toPath('/admin/panel_');
        }
        catch (error) {
            console.error(error);
            return { error };
        }
    }
    async delete({ params, response }) {
        try {
            const project = await Project_1.default.findByOrFail('slug', params.slug);
            await project.delete();
            return response.redirect().back();
        }
        catch (error) {
            console.error(error);
            return { error };
        }
    }
}
exports.default = ProjectsController;
//# sourceMappingURL=ProjectsController.js.map