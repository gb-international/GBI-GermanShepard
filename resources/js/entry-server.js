import app from './app'
import router from './router';
import { createApp } from './app';


new Promise((resolve, reject) => {
  const { app, router,store } = createApp()
  const meta = app.$meta();

  router.push(url);
  router.onReady(() => {

    app.rendered = () =>{
      app.state = store.state;
    };
    
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