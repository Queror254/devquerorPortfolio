import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'abouts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.string('intro').notNullable()
      table.string('website').notNullable()
      table.string('phone').notNullable()
      table.string('city').notNullable()
      table.integer('age').notNullable()
      table.string('level').notNullable().notNullable()
      table.string('email', 100).notNullable()
      table.string('freelance').notNullable()
      table.text('content').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
