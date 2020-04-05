let sum = (a) => {
  return (b) => {
    return b ? sum(a + b) : a;
  };
};
