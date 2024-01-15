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
      prevLink: responseJson.prevLink,
      nextLink: responseJson.nextLink,
      payload: responseJson.payload,
    };
  }
  static error(responseJson) {
    return {
      status: 'Unimplements Method',
    };
  }
}

export default CrudMessages;
