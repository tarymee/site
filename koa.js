const path = require('path')
const Koa = require('koa')
const serve = require('koa-static')

const app = new Koa()

app.on('error', (err, ctx) => {
  console.error('server error', err)
})

// 静态资源
// https://www.npmjs.com/package/koa-static
const static = serve(path.join(__dirname))
app.use(static)

app.listen(12300)


console.log('Listening at \x1B[36mhttp://localhost:12300\x1B[0m')
