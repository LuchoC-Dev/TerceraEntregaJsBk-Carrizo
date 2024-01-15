async function getAll(req, res) {
  try {
    const response = await ProductsDao.getAll();
    res.json(CrudMessages.make(response));
  } catch (error) {
    res.json(CrudMessages.error(response));
  }
}

async function getById(req, res) {
  try {
    const { id } = req.params;
    const response = await ProductsDao.read({ _id: id });
    res.json(CrudMessages.make(response));
  } catch (error) {
    res.json(CrudMessages.error(response));
  }
}

async function getByConditions(req, res) {
  res.json(CrudMessages.error());
}

export { getAll, getByConditions, getById };
