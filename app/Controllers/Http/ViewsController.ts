import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ViewsController {
    public async index({ view }: HttpContextContract) {
        // Render the 'home.edge' template
        return view.render('home');
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
        // Render the 'admindash.edge' template
        return view.render('dashboard/admindash');
    }
}
