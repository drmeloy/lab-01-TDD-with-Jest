const {
  isNumber,
  isString,
  isBoolean,
  castToNumber,
  castToString,
  castToBoolean,
  getCaster
} = require('../lib/types.js');

describe('validator module', () => {
  describe('type validation', () => {
    it('input is a number', () => {
      expect(isNumber(3)).toBeTruthy();
      expect(isNumber('hi')).toBeFalsy();
      expect(isNumber([])).toBeFalsy();
      expect(isNumber({})).toBeFalsy();
      expect(isNumber(() => {})).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
    });

    it('input is a string', () => {
      expect(isString('hi')).toBeTruthy();
      expect(isString(3)).toBeFalsy();
      expect(isString([])).toBeFalsy();
      expect(isString({})).toBeFalsy();
      expect(isString(() => {})).toBeFalsy();
      expect(isString(true)).toBeFalsy();
    });

    it('input is a boolean', () => {
      expect(isBoolean(true)).toBeTruthy();
      expect(isBoolean(false)).toBeTruthy();
      expect(isBoolean(3)).toBeFalsy();
      expect(isBoolean('3')).toBeFalsy();
      expect(isBoolean([])).toBeFalsy();
      expect(isBoolean({})).toBeFalsy();
      expect(isBoolean(() => {})).toBeFalsy();
    });
  });

  describe('casters', () => {
    it('can cast values to a number', () => {
      expect(castToNumber(3)).toEqual(3);
      expect(castToNumber('3')).toEqual(3);
      expect(castToNumber(true)).toEqual(1);
      expect(castToNumber(false)).toEqual(0);
    });

    it('throws if value is not castable to number', () => {
      expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
      expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
    });

    it('can cast values to a string', () => {
      expect(castToString(3)).toEqual('3');
      expect(castToString(3.33)).toEqual('3.33');
      expect(castToString(true)).toEqual('true');
      expect(castToString(false)).toEqual('false');
    });

    it('throws if value is not castable to string', () => {
      expect(() => castToString([])).toThrowErrorMatchingSnapshot();
      expect(() => castToString({})).toThrowErrorMatchingSnapshot();
    });

    it('can cast values to a boolean', () => {
      expect(castToBoolean(3)).toEqual(true);
      expect(castToBoolean(0)).toEqual(false);
      expect(castToBoolean('hi')).toEqual(true);
      expect(castToBoolean('')).toEqual(false);
      expect(castToBoolean(NaN)).toEqual(false);
      expect(castToBoolean(undefined)).toEqual(false);
      expect(castToBoolean(null)).toEqual(false);
      expect(castToBoolean([])).toEqual(true);
      expect(castToBoolean({})).toEqual(true);
    });
  });

  it('can get the right caster', () => {
    expect(getCaster(Number)).toEqual(castToNumber);
    expect(getCaster(Promise)).toBeNull();
  });
});
