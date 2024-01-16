import { Router } from 'express';
import UserDao from '../../../daos/UserDao';

const usersRouter = Router();
const path = '/api/users/';

usersRouter.post(path + '/register', async (req, res) => {
  const { first_name, last_name, email, age, password } = req.body;

  const exist = await UserDao.read({ email: email });
  if (exist) {
    return res.json({ status: error, error: 'User already exist' });
  }
  const result = await UserDao.create({ first_name, last_name, email, age, password });
  res.json(result);
});

usersRouter.post(path + '/login', async (req, res) => {
  const { email, password } = req.body;

  const result = await UserDao.read({ email: email, password: password });
  if (!result) {
    return res.json({ status: error, error: 'Incorrect credentials' });
  }
  req.session.user = {
    name: `${result.first_name} ${result.last_name}`,
    email: result.email,
    age: result.age,
  };
  res.json(req.session.user);
});

export default usersRouter;
