"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Admin_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Admin"));
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class AuthController {
    async signup({ request, response, auth }) {
        const adminSchema = Validator_1.schema.create({
            email: Validator_1.schema.string([Validator_1.rules.email(), Validator_1.rules.trim()]),
            password: Validator_1.schema.string([Validator_1.rules.minLength(8)]),
        });
        try {
            const data = await request.validate({ schema: adminSchema });
            console.log('Received data:', data);
            const admin = await Admin_1.default.create(data);
            console.log('User created successfully:', admin.toJSON());
            await auth.login(admin);
            console.log('User logged in successfully.');
            return response.redirect().toPath('/admin');
        }
        catch (error) {
            console.error('Error during registration:', error.message);
            return response.status(500).send({ error: 'Failed to create user.' });
        }
    }
    async login({ request, response, session, auth }) {
        const { email, password } = request.only(['email', 'password']);
        try {
            await auth.attempt(email, password);
        }
        catch (_error) {
            console.log('error', _error);
            session.flash('error', 'Email or Password is incorrect');
            return response.redirect().back();
        }
        return response.redirect().toPath('/admin/panel_');
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map