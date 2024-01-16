import { Router } from 'express';

const rootRouter = Router();
const path = '/';

rootRouter.get(path, async (req, res) => {
  res.redirect('/login');
});

export default rootRouter;
