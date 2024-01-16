import { Router } from 'express';
import UserDao from '../../../daos/UserDao.js';

const usersRouter = Router();
const path = '/api/users/';

usersRouter.post(path + 'register', async (req, res) => {
  const { first_name, last_name, email, age, password } = req.body;
  if (!(first_name && last_name && email && age && password)) {
    return res.status(401).json({ status: 'error', error: 'Incorrect credentials' });
  }
  const exist = await UserDao.read({ email: email });
  if (exist) {
    return res.status(401).json({ status: 'error', error: 'User already exist' });
  }
  const result = await UserDao.create({ first_name, last_name, email, age, password });
  res.json(result);
});

usersRouter.post(path + 'login', async (req, res) => {
  const { email, password } = req.body;
  const result = await UserDao.read({ email: email, password: password });
  if (!result) {
    return res.status(401).json({ status: 'error', error: 'Incorrect credentials' });
  }
  req.session.user = {
    name: `${result.first_name} ${result.last_name}`,
    email: result.email,
    age: result.age,
  };
  res.json(req.session.user);
});

export default usersRouter;
