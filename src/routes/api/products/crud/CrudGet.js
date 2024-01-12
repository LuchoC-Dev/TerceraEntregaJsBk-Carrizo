class CrudGet {
  static async getAll(req, res) {
    try {
      const result = await ProductDao.getAll();
      res.json(CrudMessages.make(result));
    } catch (error) {
      res.json(CrudMessages.error(result));
    }
  }
}

export default CrudGet;
