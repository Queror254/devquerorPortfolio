import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class About extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public intro: string

  @column()
  public website: string

  @column()
  public phone: string

  @column()
  public city: string

  @column()
  public age: number

  @column()
  public level: string

  @column()
  public email: string

  @column()
  public freelance: string

  @column()
  public content: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
