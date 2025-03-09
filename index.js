addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  url.hostname = '77.37.65.136'; // IP سرور x-ui
  url.port = '10000'; // پورت سرور x-ui
  const newRequest = new Request(url, event.request);
  event.respondWith(fetch(newRequest));
});