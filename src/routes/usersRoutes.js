import {Router} from 'express'
import UsersController from '../controllers/UsersController'

const routes = new Router()

routes.get('/users', UsersController.index)
routes.get('/users/:id', UsersController.showUser)
routes.post('/users',UsersController.userCreate)
routes.put('/users/:id',UsersController.updateUser)
routes.delete('/users/:id', UsersController.delUser)

export default routes 