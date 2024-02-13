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
            const data = request.only(['title', 'content', 'website', 'slug'])

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
            return response.redirect().back()
        } catch (error) {
            // Handle any errors that occur during file move or project creation
            console.error(error)
            return { error }
        }
    }

    public async edit({ params, view }: HttpContextContract) {
        const ProjectE = await Project.findByOrFail('slug', params.slug)
        return view.render('portfolio/edit', { ProjectE })
    }

    public async update({ request, params, response }: HttpContextContract) {
        try {
            const data = request.only(['title', 'content'])
            const project = await Project.findByOrFail('slug', params.slug)

            // Move the uploaded image to the 'images' directory in the public folder
            const image = request.file('image')
            await image.move('public/images')
            if (!image()) {
                throw image.error()
            }
            data.image = image.fileName

            // Update the project with the new data
            project.merge(data)
            await project.save()

            // Redirect back with success message
            return response.redirect().back()
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
