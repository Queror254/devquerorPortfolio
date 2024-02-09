import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//const fs = require('fs');
import About from 'App/Models/About'

export default class AboutsController {
  // GET /abouts
  public async index({ }: HttpContextContract) {
    const about = await About.query().firstOrFail()
    console.log(about);
    return about;
  }

  // POST /abouts {store}
  public async store({ request }: HttpContextContract) {
    const data = request.only(['title', 'intro', 'website', 'phone', 'city', 'age', 'level', 'email', 'freelance', 'content',])
    const about = await About.create(data)
    return about
  }

  // PUT /abouts/:id{update}
  public async update({ params, request }: HttpContextContract) {
    const data = request.only(['title', 'intro', 'website', 'phone', 'city', 'age', 'level', 'email', 'freelance', 'content'])

    const about = await About.findOrFail(params.id)

    about.merge(data)
    await about.save()
    return about
  }

  // DELETE /abouts/:id
  public async destroy({ params }: HttpContextContract) {
    const about = await About.findOrFail(params.id)
    await about.delete()
    return { message: 'About deleted successfully' }
  }
}
