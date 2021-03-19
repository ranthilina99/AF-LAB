const Koa=require('koa');
const HomeRoutes=require('./routers/home.router');
const app = new Koa();
const bodyParser=require('koa-bodyparser');
const PostRouter=require('./routers/post.routes');
app.use(bodyParser());

app.use(PostRouter.routes())
    .use(PostRouter.allowedMethods());

app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods());

app.listen(3000);
console.log('Application is running on port 3000');