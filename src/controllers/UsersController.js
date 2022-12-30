import Users from '../models/Users'
import {passwordHash} from '../services/auth'

class repoUsuario {

    async index(req, res) {
        try {
            const { id } = req.params;
            const user = await Users.find()
            if (!user) {
                return res.status(404).json({ message: 'User not found' })
            }
            return res.json(user)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Error server' })
        }
    }

    async showUser(req, res) {
        try {
            const { id } = req.params;
            const user = await Users.findById(id)
            if (!user) {
                return res.status(404).json({ message: 'User not found' })
            }
            return res.json(user)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Error server' })
        }
    }

    async userCreate(req, res) {
        try {
            const { id } = req.params;
            const { email, password } = req.body;
            const user = await Users.findOne({ id })
            if (user) {
                return res.status(404).json({ message: 'User already ' })
            }


            const encPwd = await passwordHash(password)
            
            const newUser = await Users.create(
                { email, password :encPwd }
            )
            return res.status(200).json(newUser)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Error server' })
        }
    }

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { email, password } = req.body
            const user = await Users.findById(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found ' });
            }
            const updateUsuario = await Users.updateOne(
                { email, password }
            )
            return res.json(updateUsuario);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Error server' });
        }
    }

    async delUser(req, res) {
        try {
            
        const { id } = req.params;
        const {email, password} = req.body
        const user = await Users.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found ' });
        }

        const delUser = await Users.deleteOne({
           id
        })

        return res.json(delUser)
        } catch (error) {
            console.log(error);
            return res.status(500).json('Internal server error')
        }
    }
}

export default new repoUsuario()