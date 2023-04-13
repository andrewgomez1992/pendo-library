const config = {
  visitorId: 'MY_VISITOR_ID',
  accountId: 'MY_ACCOUNT_ID',
};

export const getConfig = (apiKey) => {
  return {
    ...config,
    apiKey,
  };
};
