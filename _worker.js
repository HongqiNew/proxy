    export default {
      async fetch(request, env) {
        let url = new URL(request.url);
        if (url.pathname.startsWith('/')) {
          url.hostname = 'newhongqi.org' //在这里填写需要反代的网站，不加"HTTP(S)"。 Entry the website you need to proxy without "HTTP(S)".
          let new_request = new Request(url, request);
          return fetch(new_request);
        }
        return env.ASSETS.fetch(request);
      },
    };
