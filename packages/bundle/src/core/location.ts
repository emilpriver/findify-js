import 'core-js/features/array/includes';
import { createBrowserHistory } from 'history';
import { parse, stringify } from 'qs';

export const isIE9 = !('pushState' in window.location);

let history = createBrowserHistory();
let historyChanged = false;

export const setHistory = (h) => {
  historyChanged = true;
  history = h;
}

export const getHistory = () => history;
  
export const collectionPath = () => window
  .location
  .pathname
  .replace(/^\/|\/$/g, '')
  .toLowerCase();


      // We are not applying new state if something else in URL QUERY and response from
      // our Server do not contains extra meta
      // // FIX for: UTM Tags
      // if (
      //   !buildQuery(q.toJS()) &&
      //   !Object.keys(state).filter(k => k.includes(config.getIn(['location', 'prefix']))).length
      // ) return;

export const isCollection = (collections, slot?) =>
  collections && collections.includes(
    slot || collectionPath()
  );

export const isSearch = () =>
  window.location.pathname === __root.config.getIn(['location', 'searchUrl']);

export const listenHistory = (cb) => getHistory().listen(cb);


const defaultKeys = ['q', 'limit', 'sort', 'offset', 'filters', 'rules'];

const getReservedKeys = () => {
  const keys = __root.config.getIn(['location', 'keys']);
  return keys ? keys.toJS() : defaultKeys;
}

const getRestOfQuery = (query, prefix) => {
  const keys = getReservedKeys();
  return query
    .slice(query.indexOf('?') + 1)
    .split('&')
    .filter(item => {
      const key = item.split('=')[0];
      const prefixedKey = !!prefix ? key.replace(`${prefix}_`, '') : key;
      return !keys.find(k => prefixedKey.startsWith(k))
    })
    .join('&')
}

export const getQuery = () => {
  const str = getHistory().location.search;
  const keys = getReservedKeys();
  const prefix = __root.config.getIn(['location', 'prefix']);

  const elements = parse(str,
    { decoder: (value) => decodeURIComponent(value.replace(/\+/g, ' ')), ignoreQueryPrefix: true }
  );
  
  return Object.keys(elements).reduce((acc, key) => {
    const _key = prefix ? key.replace(`${prefix}_`, '') : key;
    if (!keys.includes(_key)) return acc;
    return {
      ...acc,
      [_key]: ['limit', 'offset'].includes(_key)
        ? Number(elements[key])
        : elements[key]
    }
  }, {});
};

export const buildQuery = (_query = {}, ignoreRest = false) => {
  const prefix = __root.config.getIn(['location', 'prefix']);
  const search = getHistory().location.search;
  const rest = !ignoreRest && getRestOfQuery(search, prefix) ;

  const query = Object.keys(_query).reduce((acc, key) =>
    ({ ...acc, [`${!!prefix ? prefix + '_' : ''}${key}`]: _query[key] })
  , {});

  const string = stringify(query, {
    encoder: encodeURIComponent,
    addQueryPrefix: true,
    sort: (a, b) => a.localeCompare(b)
  })

  return string + (!!rest ? (!!string ? '&' : '?') + rest : '')
}

export const redirectToSearch = (q) => {
  if (historyChanged) {
    return getHistory().push(
      {
        pathname: __root.config.getIn(['location', 'searchUrl']).replace(document.location.origin, ''),
        search: buildQuery({ q }),
        state: { type: 'FindifyUpdate'}
      }
    )
  }
  window.location.href =
    __root.config.getIn(['location', 'searchUrl']) +
    buildQuery({ q });
};

export const setQuery = (query) => {
  const search = buildQuery(query);
  /* Special for IE9: prevent page reload if query is the same */
  if (isIE9 && search === getHistory().location.search) return;
  return getHistory().push({ search, state: { type: 'FindifyUpdate' } });
};


export const redirectToPage = async (redirect, meta) => {
  await __root.analytics.sendEvent('redirect', {
    ...redirect.toJS(),
    rid: meta.get('rid'),
    suggestion: meta.get('q')
  });
  if (historyChanged) {
    return getHistory().push(redirect.get('url').replace(document.location.origin, ''), { type: 'FindifyUpdate'} )
  }
  document.location.href = redirect.get('url');
}
