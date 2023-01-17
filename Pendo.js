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

let pendoInstance;

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
    y.src =
      'https://cdn.pendo.io/agent/static/' +
      '8b61ff73-e191-4939-795c-c1f1817cc348' +
      '/pendo.js';
    z = e.getElementsByTagName(n)[0];
    z.parentNode.insertBefore(y, z);
  })(window, document, 'script', 'pendo');
  pendo.initialize({ apiKey: '8b61ff73-e191-4939-795c-c1f1817cc348' });
})(apiKey);

pendoInstance = pendo;

pendo.initialize({
  apiKey: '8b61ff73-e191-4939-795c-c1f1817cc348',
  visitor: {
    id: visitorId,
  },
});

export { pendoInstance };
