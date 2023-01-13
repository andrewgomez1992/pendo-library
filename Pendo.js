import { Pendo } from 'pendo-library';
import { v4 as uuidv4 } from 'uuid';

const apiKey = process.env.PENDO_API_KEY;

function generateUniqueIds() {
  const visitorId = uuidv4();
  const accountId = uuidv4();
  return { visitorId, accountId };
}

const { visitorId, accountId } = generateUniqueIds();

localStorage.setItem('visitorId', visitorId);
localStorage.setItem('accountId', accountId);

export const pendo = new Pendo({
  apiKey,
  visitor: {
    id: visitorId,
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
    apiKey,
    visitor: {
      id: `testVisitorId - ${visitorId}`,
    },
    account: {
      id: `testAccountId - ${accountId}`,
    },
  });
})(process.env.PENDO_API_KEY);
