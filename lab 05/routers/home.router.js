const Router=require('@koa/router');
const router = new Router({
   prefix:'/home'
});

router.get('/',ctx=>{
    ctx.body="Hello world";
});

router.post('/', ctx => {
    ctx.body = 'Hello World';
});

module.exports = router;