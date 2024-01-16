class CrudMessages {
  static make(responseJson) {
    return {
      status: responseJson.status,
      totalPages: responseJson.totalPages,
      prevPage: responseJson.prevPage,
      nextPage: responseJson.nextPage,
      page: responseJson.page,
      hasPrevPage: responseJson.hasPrevPage ?? null,
      hasNextPage: responseJson.hasNextPage ?? null,
      prevLink: responseJson.prevLink ?? null,
      nextLink: responseJson.nextLink ?? null,
      payload: responseJson.docs,
    };
  }
  static error(error) {
    return {
      status: 'Error',
      error: error,
    };
  }
}

export default CrudMessages;
