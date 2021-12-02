const freezeForThreeSeconds = (blockingHandler, unBlockingHandler) => {
  blockingHandler();
  setTimeout(() => {
    unBlockingHandler();
  }, 3000);
};

export default freezeForThreeSeconds;
