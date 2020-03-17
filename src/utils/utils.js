export const generateRandomId = () => {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
};

export const formatDate = timeStamp => {
  const formattedDate = new Date(timeStamp);
  return formattedDate.toLocaleString();
};
