// import { v4 as uuidv4 } from 'uuid';

const apiKey = '8b61ff73-e191-4939-795c-c1f1817cc348';

function generateUniqueIds() {
  const visitorId = 'Joe Rogan';
  const accountId = 'Joe Rogan';
  return { visitorId, accountId };
}

const { visitorId, accountId } = generateUniqueIds();

localStorage.setItem('visitorId', visitorId);
localStorage.setItem('accountId', accountId);

let pendoInstance;

(function (apiKey) {
  (function (p, e, n, d, o) {
    var v, w, x, y, z;
    o = p[d] = p[d] || {};
    o._q = [];
    v = ['initialize', 'identify', 'updateOptions', 'pageLoad'];
    for (w = 0, x = v.length; w < x; ++w) {
      (function (m) {
        o[m] =
          o[m] ||
          function () {
            o._q[m === v[0] ? 'unshift' : 'push'](
              [m].concat([].slice.call(arguments, 0))
            );
          };
      })(v[w]);
    }
    y = e.createElement(n);
    y.async = true;
    y.src = 'https://cdn.pendo.io/agent/static/' + apiKey + '/pendo.js';
    z = e.getElementsByTagName(n)[0];
    z.parentNode.insertBefore(y, z);
  })(window, document, 'script', 'pendo');

  pendo.initialize({
    apiKey,
    visitor: {
      id: visitorId,
      package: ['MC20000', 'MC10000'],
    },
    account: {
      id: accountId,
    },
  });
})(apiKey);

pendoInstance = pendo;

export { pendoInstance };
