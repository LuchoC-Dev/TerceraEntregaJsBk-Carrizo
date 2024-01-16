class Parser {
  static parseQuery(object) {
    const { limit, page, sort, query } = object;
    return { limit: parseLimit(limit), page: parsePage(page), sort: parseSort(sort), query: parseQuery(query) };

    function parseLimit(limit) {
      if (!limit) {
        return 10;
      }
      return Number(limit);
    }

    function parsePage(page) {
      if (!page) {
        return 1;
      }
      return Number(page);
    }

    function parseSort(sort) {
      if (sort === 'asc') {
        return 1;
      } else if (sort === 'desc') {
        return -1;
      }
    }

    function parseQuery(query) {
      if (typeof query === 'object') {
        return query;
      }
      return JSON.parse(query);
    }
  }

  static stringifyCrud(object) {
    const { limit, page, sort, query } = object;
    return {
      limit: stringifyLimit(limit),
      page: stringifyPage(page),
      sort: stringifySort(sort),
      query: stringifyQuery(query),
    };

    function stringifyLimit(limit) {
      if (!limit) {
        return '10';
      }
      return String(limit);
    }

    function stringifyPage(page) {
      if (!page) {
        return '1';
      }
      return String(page);
    }

    function stringifySort(sort) {
      if (sort === 1) {
        return 'asc';
      } else if (sort === -1) {
        return 'desc';
      }
    }

    function stringifyQuery(query) {
      return JSON.stringify(query);
    }
  }
}

export default Parser;
