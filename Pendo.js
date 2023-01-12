import Pendo from 'pendo-library';

export const pendo = new Pendo({
  apiKey: 'YOUR_API_KEY',
  visitor: {
    id: 'UNIQUE_VISITOR_ID',
  },
  account: {
    id: 'ACCOUNT_ID',
  },
  options: {
    accountName: 'ACCOUNT_NAME',
  },
});

(function (apiKey) {
  (function (p, e, n, d, o) {
    var v, w, x, y, z;
    o = p[d] = p[d] || {};
    o._q = [];
    v = ['initialize', 'identify', 'updateOptions', 'pageLoad'];
    for (w = 0, x = v.length; w < x; ++w)
      (function (m) {
        o[m] =
          o[m] ||
          function () {
            o._q[m === v[0] ? 'unshift' : 'push'](
              [m].concat([].slice.call(arguments, 0))
            );
          };
      })(v[w]);
    y = e.createElement(n);
    y.async = !0;
    y.src = 'https://cdn.pendo.io/agent/static/' + apiKey + '/pendo.js';
    z = e.getElementsByTagName(n)[0];
    z.parentNode.insertBefore(y, z);
  })(window, document, 'script', 'pendo');

  // Call this whenever information about the current user becomes available
  // Please use the actual values for the user's id, email, and name
  pendo.initialize({
    apiKey: apiKey,
    visitor: {
      id: 'UNIQUE_VISITOR_ID', // Required if user is logged in
      //   email: 'EMAIL', // Optional
      //   role: 'ROLE', // Optional
      //   name: 'NAME', // Optional
    },
    account: {
      id: 'ACCOUNT_ID', // Required for account scoping
      //   name: 'ACCOUNT_NAME', // Optional
      //   industry: 'INDUSTRY', // Optional
      //   planLevel: 'PLAN_LEVEL', // Optional
      //   planPrice: 'PLAN_PRICE', // Optional
      //   createdAt: 'CREATED_AT', // Optional
    },
  });
})('YOUR_API_KEY');
