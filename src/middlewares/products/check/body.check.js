import Errors from '../Errors';

function checkBody(req, res, next) {
  try {
    const { title, description, price, thumbnail, code, stock, category } = req.body;
    if (!hasAnyPropertie(title, description, price, thumbnail, code, stock, category)) {
      next();
    }
    const hasValidProperties = check(title, description, price, thumbnail, code, stock, category);
    if (!hasValidProperties) {
      throw new Error('Invalid properties');
    }
    if (hasAllProperties(title, description, price, thumbnail, code, stock, category)) {
      req.body.isFull = true;
    }
    next();
  } catch (error) {
    res.json(Errors.json(error));
  }
}

function hasAnyPropertie(title, description, price, thumbnail, code, stock, category) {
  return title || description || price || thumbnail || code || stock || category;
}

function hasAllProperties(title, description, price, thumbnail, code, stock, category) {
  return title && description && price && thumbnail && code && stock && category;
}

function check(title, description, price, thumbnail, code, stock, category) {
  return (
    checkTitle(title) &&
    checkDescription(description) &&
    checkPrice(price) &&
    checkThumbnail(thumbnail) &&
    checkCode(code) &&
    checkStock(stock) &&
    checkCategory(category)
  );
}

function checkTitle(title) {
  if (!title) {
    return true;
  }
  return title.length > 5;
}

function checkDescription(description) {
  if (!description) {
    return true;
  }
  return description.length > 5;
}

function checkPrice(price) {
  if (!price) {
    return true;
  }
  return isIntNatural(price);
}

function isIntNatural(string) {
  const regNaturalNumber = /^(0|[1-9]\d*)$/;
  return regNaturalNumber.test(string);
}

function checkThumbnail(thumbnail) {
  if (!thumbnail) {
    return true;
  }
  try {
    const links = JSON.parse(thumbnail);
    return Array.isArray(links);
  } catch (error) {
    return false;
  }
}

function checkCode(code) {
  if (!code) {
    return true;
  }
  const regCode = /^[a-zA-Z0-9]{6,15}$/;
  return regCode.test(code);
}

function checkStock(stock) {
  if (!stock) {
    return true;
  }
  return isIntNatural(stock);
}

function checkCategory(category) {
  if (!category) {
    return true;
  }
  return category.length > 2;
}

export default checkBody;
