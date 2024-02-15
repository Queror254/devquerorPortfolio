import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import About from 'App/Models/About';
import Project from 'App/Models/Project';

export default class ViewsController {
    public async index({ view }: HttpContextContract) {
        // Render the 'home.edge' template
        try {
            const project_App = await Project.query().where('category', 'app')
            const project_Web = await Project.query().where('category', 'web')
            const project_Card = await Project.query().where('category', 'card')
            const project_Api = await Project.query().where('category', 'api')
            const about = await About.all();
            return view.render('home', { about, project_App, project_Web, project_Card, project_Api });
        } catch (error) {
            console.log('error fetching project data', error)
            return { error };
        }
    }

    public async comingsoon({ view }: HttpContextContract) {
        // Render the 'details.edge' template
        return view.render('comingsoon');
    }

    public async details({ view }: HttpContextContract) {
        // Render the 'details.edge' template
        return view.render('details');
    }

    public async signup({ view }: HttpContextContract) {
        // Render the 'signup.edge' template
        return view.render('auth/signup');
    }

    public async login({ view }: HttpContextContract) {
        // Render the 'login.edge' template
        return view.render('auth/login');
    }

    public async admin({ view }: HttpContextContract) {
        const project = await Project.all();
        return view.render('dashboard/admindash', { project });
    }
}
