const apiRequest = async (url, optionsObj, errorMsg) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error("Please reload the app");
  } catch (error) {
    errorMsg = error.Message;
  } finally {
    return errorMsg;
  }
};

export default apiRequest;
