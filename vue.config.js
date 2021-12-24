module.exports = {
  configureWebpack:{
    devServer:{
      //修改文件后要重启项目才会生效
      before(app){
        // app.get('请求地址',(req,res)=>{
        //   res.json({
        //     xinxi
        //   })
        // })
        //注册接口
        //用户信息池
        let userpool=[
          {username:'xiaod',password:'123456'},
          {username:'tim',password:'123456'}
        ]
        app.get("/api/register",(req,res)=>{
          const {username, password} = req.query
          const userlength = userpool.filter(v=>v.username == username).length
          if(userlength>0){
            res.json({
              success:false,
              message:'用户名已经存在'
            })
          }else{
            res.json({
              success:true,
              message:'注册成功'
            })
          }   
        });
        //登录接口
        let tokenkey = 'xdclass'
        app.get('/api/login',(req,res)=>{
          const {username, password} = req.query
          if(username == 'xiaod' && password == '123456' || 
          username == 'tim' && password == '123456'){
            res.json({
              code:0,
              message:'登录成功',
              token:tokenkey+'-'+username+'-'+(new Date().getTime()+60*60*1000)
            })
          }else{
            res.json({
              code:1,
              message:'账号或密码错误',
            })
          }
        })
        //首页轮播图数据接口
        app.get('/api/banner',(req,res)=>{
          res.json({
            data:[
                {
                  url: 'http://www.didichuxing.com/',
                  image: 'https://www.researchgate.net/profile/Alfredo-Lamberti-2/publication/283209961/figure/fig2/AS:613952052551695@1523388984318/Schematic-representation-of-the-Bragg-wavelength-shift-calculation-between-R-and-R-by.png'
                },
                {
                  url: 'http://www.didichuxing.com/',
                  image: 'https://www.researchgate.net/publication/343632772/figure/fig1/AS:924053418291202@1597322911315/The-principles-and-wavelength-shift-of-fiber-Bragg-grating-FBG-sensors.png'
                },
                {
                  url: 'http://www.didichuxing.com/',
                  image: 'https://static-01.hindawi.com/articles/sv/volume-2019/9858125/figures/9858125.fig.002.svgz'
                }],
          })
        })
        //滑动分类接口
        app.get('/api/rollinglist',(req,res)=>{
          res.json({
            data:[
              [{
                url: 'http://www.didichuxing.com/',
                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                label:'分类一'
              },
              {
                url: 'http://www.didichuxing.com/',
                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                label:'分类一'
              },
              {
                url: 'http://www.didichuxing.com/',
                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png',
                label:'分类一'
              }],
              [{
                url: 'http://www.didichuxing.com/',
                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
                label:'分类一'
              },
              {
                url: 'http://www.didichuxing.com/',
                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png',
                label:'分类一'
              },
              {
                url: 'http://www.didichuxing.com/',
                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png',
                label:'分类一'
              }]
            ]
          })
        })
        //获取分类页的分类接口
        app.get('/api/classify',(req,res)=>{
          switch(req.query.type){
            case '0':
              res.json({
                data:[
                  {
                    image:'https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/223751/7/319/107971/61badfd8E40af99da/29707cc251ae52ec.jpg',
                    label:'休闲裤'
                  },
                  {
                    image:'https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/141632/25/20593/73481/618b3533E24bde946/e0c065a10e2e51fe.jpg',
                    label:'手机'
                  },
                ]
              });
              break;
            case '1':
              res.json({
                data:[
                  {
                    image:'https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/141632/25/20593/73481/618b3533E24bde946/e0c065a10e2e51fe.jpg',
                    label:'手机'
                  },
                  {
                    image:'https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/223751/7/319/107971/61badfd8E40af99da/29707cc251ae52ec.jpg',
                    label:'休闲裤'
                  },
                  {
                    image:'https://img.alicdn.com/bao/uploaded/i1/2086254883/O1CN01ushOvw1lwSVYRdMhn_!!0-item_pic.jpg_200x200q90.jpg_.webp',
                    label:'收纳盒'
                  },
                ]
              });
              break;
            case '2':
              res.json({
                data:[
                  {
                    image:'https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/223751/7/319/107971/61badfd8E40af99da/29707cc251ae52ec.jpg',
                    label:'休闲裤'
                  },
                  {
                    image:'https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/141632/25/20593/73481/618b3533E24bde946/e0c065a10e2e51fe.jpg',
                    label:'手机'
                  },
                ]
              });
              break;
            case '3':
              res.json({
                data:[
                  {
                    image:'https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/223751/7/319/107971/61badfd8E40af99da/29707cc251ae52ec.jpg',
                    label:'休闲裤'
                  },
                  {
                    image:'https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/141632/25/20593/73481/618b3533E24bde946/e0c065a10e2e51fe.jpg',
                    label:'手机'
                  },
                ]
              });
              break;
            case '4':
              res.json({
                data:[
                  {
                    image:'https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/223751/7/319/107971/61badfd8E40af99da/29707cc251ae52ec.jpg',
                    label:'休闲裤'
                  },
                  {
                    image:'https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/141632/25/20593/73481/618b3533E24bde946/e0c065a10e2e51fe.jpg',
                    label:'手机'
                  },
                ]
              });
              break;
            case '5':
              res.json({
                data:[
                  {
                    image:'https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/223751/7/319/107971/61badfd8E40af99da/29707cc251ae52ec.jpg',
                    label:'休闲裤'
                  },
                  {
                    image:'https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/141632/25/20593/73481/618b3533E24bde946/e0c065a10e2e51fe.jpg',
                    label:'手机'
                  },
                ]
              });
            break;
            case '6':
              res.json({
                data:[
                  {
                    image:'https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/223751/7/319/107971/61badfd8E40af99da/29707cc251ae52ec.jpg',
                    label:'休闲裤'
                  },
                  {
                    image:'https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/141632/25/20593/73481/618b3533E24bde946/e0c065a10e2e51fe.jpg',
                    label:'手机'
                  },
                ]
              });
              break;
            case '7':
              res.json({
                data:[
                  {
                    image:'https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/223751/7/319/107971/61badfd8E40af99da/29707cc251ae52ec.jpg',
                    label:'休闲裤'
                  },
                  {
                    image:'https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/141632/25/20593/73481/618b3533E24bde946/e0c065a10e2e51fe.jpg',
                    label:'手机'
                  },
                ]
              });
              break;
            case '8':
              res.json({
                data:[
                  {
                    image:'https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/223751/7/319/107971/61badfd8E40af99da/29707cc251ae52ec.jpg',
                    label:'休闲裤'
                  },
                  {
                    image:'https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/141632/25/20593/73481/618b3533E24bde946/e0c065a10e2e51fe.jpg',
                    label:'手机'
                  },
                ]
              });
              break;
            case '9':
              res.json({
                data:[
                  {
                    image:'https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/223751/7/319/107971/61badfd8E40af99da/29707cc251ae52ec.jpg',
                    label:'休闲裤'
                  },
                  {
                    image:'https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/141632/25/20593/73481/618b3533E24bde946/e0c065a10e2e51fe.jpg',
                    label:'手机'
                  },
                ]
              });
              break;
            case '10':
                res.json({
                  data:[
                    {
                      image:'https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/223751/7/319/107971/61badfd8E40af99da/29707cc251ae52ec.jpg',
                      label:'休闲裤'
                    },
                    {
                      image:'https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/141632/25/20593/73481/618b3533E24bde946/e0c065a10e2e51fe.jpg',
                      label:'手机'
                    },
                  ]
                });
                break;
            case '11':
              res.json({
                data:[
                  {
                    image:'https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/223751/7/319/107971/61badfd8E40af99da/29707cc251ae52ec.jpg',
                    label:'休闲裤'
                  },
                  {
                    image:'https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/141632/25/20593/73481/618b3533E24bde946/e0c065a10e2e51fe.jpg',
                    label:'手机'
                  },
                ]
              });
              break;
            case '12':
              res.json({
                data:[
                  {
                    image:'https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/223751/7/319/107971/61badfd8E40af99da/29707cc251ae52ec.jpg',
                    label:'休闲裤'
                  },
                  {
                    image:'https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/141632/25/20593/73481/618b3533E24bde946/e0c065a10e2e51fe.jpg',
                    label:'手机'
                  },
                ]
              });
              break;
            case '13':
              res.json({
                data:[
                  {
                    image:'https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/223751/7/319/107971/61badfd8E40af99da/29707cc251ae52ec.jpg',
                    label:'休闲裤'
                  },
                  {
                    image:'https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/141632/25/20593/73481/618b3533E24bde946/e0c065a10e2e51fe.jpg',
                    label:'手机'
                  },
                ]
              });
              break;          
          }    
        })
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
