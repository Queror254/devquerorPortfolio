import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'projects'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('title').notNullable();
      table.string('content').notNullable();
      table.string('slug', 100).unique();
      table.string('image').nullable();
      table.string('github').notNullable();
      table.string('category').notNullable();
      table.string('skills').notNullable
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
