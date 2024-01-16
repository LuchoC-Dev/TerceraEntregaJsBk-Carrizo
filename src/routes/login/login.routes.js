import { Router } from 'express';

const loginRouter = Router();
const path = '/login';

loginRouter.get(path, async (req, res) => {
  res.render('login', {});
});

export default loginRouter;
