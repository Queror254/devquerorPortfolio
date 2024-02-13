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
            const data = request.only(['title', 'content', 'website', 'slug']);
            const image = request.file('image');
            await image.move('public/images');
            if (!image) {
                throw image.error();
            }
            data.image = image.fileName;
            await Project_1.default.create(data);
            return response.redirect().back();
        }
        catch (error) {
            console.error(error);
            return { error };
        }
    }
    async edit({ params, view }) {
        const ProjectE = await Project_1.default.findByOrFail('slug', params.slug);
        return view.render('portfolio/edit', { ProjectE });
    }
    async update({ request, params, response }) {
        try {
            const data = request.only(['title', 'content']);
            const project = await Project_1.default.findByOrFail('slug', params.slug);
            const image = request.file('image');
            await image.move('public/images');
            if (!image()) {
                throw image.error();
            }
            data.image = image.fileName;
            project.merge(data);
            await project.save();
            return response.redirect().back();
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