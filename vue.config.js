const path = require('path')
const mockData = require("./mock.json");

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },
  devServer: {
    port:8080,
    before(app){
      app.get('/api/menubar',(req,res,next)=>{
        res.json(mockData)
      })
      // app.post('/api/menubar', (req, resp) => {
      //   resp.json(mockData)
      // })
    }
  }
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/imports.styl'),
      ],
    })
}