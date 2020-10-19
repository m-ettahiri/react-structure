const combineJson = (files) => {
  let newJson = {};
  Object.values(files).forEach((file) => {
    newJson = { ...newJson, ...file };
  });
  return JSON.stringify(newJson);
};

export default combineJson;
