import { MysqlModel } from "../models/mysql.js"

export class UserController {
    getAllUsers = async (req, res) => {
        const users = await MysqlModel.getAllUsers();

        return res.status(200).json(users);
    }

    createUser = async (req, res) => {
        const input = req.body
        const newUser = await MysqlModel.createUser({ input });

        return res.status(200).json({ message: newUser });
    }

    updateUser = async (req, res) => {
        const input = req.body
        const documento = req.params
        const userUpdated = await MysqlModel.updateUser({ input, documento });

        return res.status(200).json({ message: userUpdated });
    }
}

export const userController = new UserController();
