"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'abouts';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('title').notNullable();
            table.string('intro').notNullable();
            table.string('website').notNullable();
            table.string('phone').notNullable();
            table.string('city').notNullable();
            table.integer('age').notNullable();
            table.string('level').notNullable().notNullable();
            table.string('email', 100).notNullable();
            table.string('freelance').notNullable();
            table.text('content').notNullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1707288669457_abouts.js.map