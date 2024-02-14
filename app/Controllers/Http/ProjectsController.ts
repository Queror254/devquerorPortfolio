// @ts-nocheck
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Project from 'App/Models/Project'

export default class ProjectsController {
    public async index({ view, }: HttpContextContract) {
        return view.render('portfolio/create');
    }

    public async store({ request, response }: HttpContextContract) {
        try {
            // Extracting required data from the request
            const data = request.only(['title', 'content', 'slug', 'github', 'category', 'skills'])

            // Move the uploaded image to the 'images' directory in the public folder
            const image = request.file('image')
            await image.move('public/images')

            // If the image was moved successfully, update the data object with the file name
            if (!image) {
                throw image.error()
            }
            data.image = image.fileName

            // Create a new project with the validated data and image file name
            await Project.create(data)

            // Redirect back with success message
            return response.redirect().toPath('/admin/panel_')
        } catch (error) {
            // Handle any errors that occur during file move or project creation
            console.error(error)
            return { error }
        }
    }

    public async more({ params, view }: HttpContextContract) {

        try {
            const ProjectE = await Project.query().where('slug', params.slug);
            return view.render('details', { ProjectE });
        } catch (error) {
            return { error }
        }
    }

    public async edit({ params, view }: HttpContextContract) {
        try {
            const ProjectE = await Project.query().where('slug', params.slug);
            return view.render('portfolio/edit', { ProjectE });
        } catch (error) {
            return { error }
        }
    }

    public async update({ request, params, response }: HttpContextContract) {
        try {
            console.log(params.slug);
            const data = request.only(['title', 'content', 'category', 'github', 'skills', 'image']);
            await Project.query().where('slug', params.slug).update(data);

            // Redirect back with success message
            return response.redirect().toPath('/admin/panel_')
        } catch (error) {
            console.error(error)
            return { error }
        }
    }

    public async delete({ params, response }: HttpContextContract) {
        try {
            const project = await Project.findByOrFail('slug', params.slug)
            await project.delete()

            // Redirect back with success message
            return response.redirect().back()
        } catch (error) {
            console.error(error)
            return { error }
        }
    }
}
