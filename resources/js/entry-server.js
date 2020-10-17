import app from './app'
import router from './router';
import { createApp } from './app';


new Promise((resolve, reject) => {
  const { app, router } = createApp()
  router.push(url);
  router.onReady(() => {
    const matchedComponents = router.getMatchedComponents();
    if (!matchedComponents.length) {
      return reject({ code: 404 });
    }
    resolve(app);
  }, reject);
})
  .then(app => {
    renderVueComponentToString(app, (err, res) => {
      print(res);
    });
  })
  .catch((err) => {
    print(err);
  });