const isNumber = val => typeof val === 'number';
const isString = val => typeof val === 'string';
const isBoolean = val => typeof val === 'boolean';

const castToNumber = val => {
  if(isNumber(val)) return val;
  const number = Number(val);
  if(isNaN(number)) throw new CastError(Number, val);
  return number;
};

const castToString = val => {
  if(isString(val)){
    return val;
  } else if(typeof val === 'object'){
    throw new CastError(String, val);
  }
  const string = String(val);
  return string;
};

const castToBoolean = val => {
  if(isBoolean(val)) return val;
  const bool = Boolean(val);
  return bool;
};

class CastError extends Error {
  constructor(Type, value) {
    const type = Type.name;
    super(`Cannot cast >>${value}<< to ${type}`);
    this.type = type;
    this.value = value;
  }
}

const casters = {
  Number: castToNumber
};

const getCaster = Type => {
  return casters[Type.name] || null;
};

module.exports = {
  isNumber,
  isString,
  isBoolean,
  CastError,
  getCaster,
  castToNumber,
  castToString,
  castToBoolean
};
