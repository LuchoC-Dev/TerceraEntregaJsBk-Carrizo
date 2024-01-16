class Errors {
  static json(responseJson) {
    return { status: 'Unimplements method', error: responseJson };
  }
}

export default Errors;
