async function deleteById(req, res) {
  try {
    const { id } = req.params;
    const { data } = req.body;
    const response = await ProductsDao.delete({ _id: id }, data);
    res.json(CrudMessages.make(response));
  } catch (error) {
    res.json(CrudMessages.error(response));
  }
}

async function deleteAll(req, res) {
  try {
    const { status } = req.body;
    if (!status) {
      throw new Error('Status undefinded');
    }
    const response = await ProductsDao.deleteAll();
    res.json(CrudMessages.make(response));
  } catch (error) {
    res.json(CrudMessages.error(response));
  }
}

export { deleteAll, deleteById };
