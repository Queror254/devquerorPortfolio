"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Project_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Project"));
class ProjectsController {
    async index({ view, }) {
        const project = await Project_1.default.all();
        return project;
    }
    async store({ request, response }) {
        try {
            const data = request.only(['title', 'content', 'website', 'slug']);
            const image = request.file('image');
            await image.move('public/images');
            if (!image.moved()) {
                throw image.error();
            }
            data.image = image.fileName;
            await Project_1.default.create(data);
            return response.redirect().back();
        }
        catch (error) {
            console.error(error);
            return { error: 'Error creating project' };
        }
    }
    async edit({ params, view }) {
        const project = await Project_1.default.findByOrFail('slug', params.slug);
        return view.render('edit', { project });
    }
    async update({ request, params, response }) {
        try {
            const data = request.only(['title', 'content', 'website', 'slug']);
            const project = await Project_1.default.findByOrFail('slug', params.slug);
            const image = request.file('image');
            await image.move('public/images');
            if (!image.moved()) {
                throw image.error();
            }
            data.image = image.fileName;
            project.merge(data);
            await project.save();
            return response.redirect().back();
        }
        catch (error) {
            console.error(error);
            return { error: 'Error updating project' };
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
            return { error: 'Error deleting project' };
        }
    }
}
exports.default = ProjectsController;
//# sourceMappingURL=ProjectsController.js.map