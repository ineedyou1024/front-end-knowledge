const isEmptyObject = (obj) => {
  if (!(obj instanceof Object)) {
    throw "传入的不是一个对象";
  }
  const arr = Object.keys(obj);
  return !arr.length;
};
export { isEmptyObject };
