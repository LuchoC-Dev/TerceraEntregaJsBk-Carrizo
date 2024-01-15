async function update(req, res) {
  try {
    const { id } = req.params;
    const { data } = req.body;
    const response = await ProductsDao.updateOne({ _id: id }, data);
    res.json(CrudMessages.make(response));
  } catch (error) {
    res.json(CrudMessages.error(response));
  }
}

export { update };
