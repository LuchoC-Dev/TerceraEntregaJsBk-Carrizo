import { Router } from 'express';

const registerRouter = Router();
const path = '/register';

registerRouter.get(path, async (req, res) => {
  res.render('register', {});
});

export default registerRouter;
