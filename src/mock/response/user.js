import Mock from 'mockjs'
const Random = Mock.Random

export const getUserInfo = (options) => {
  const template = {
    'str|2-4': '小余',
    'name|5': '小新',
    'age|+2': 18,
    'num|0-10': 0,
    'float|3-10.2-5': 0,
    'bool|1': true, // 获得true值1/2
    'bool1|1-9': true, // 概率  min/(min+max)
    'obj|1-2': {// 随机抽取一到两个结果进去
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'arr|2-4': [1, 2, 3],
    'arr|2': [4, 5, 6],
    'func': () => {
      return 'this is a function'
    },
    'reg': /[1-9][a-z]/,
    'email': Mock.mock('@email'),
    range: Random.range(3, 10, 2),
    data: Random.date('yyyy-MM-dd'),
    time: Random.time('HH:mm:ss'),
    dateTime: Random.datetime('yyyy-MM-dd  HH:mm:ss'),
    now: Random.now('second', 'yyyy-MM-dd  HH:mm:ss'),
    img: Random.image('200x300', '#eeffaa', '#000000', '小余'),
    img_base64: Random.dataImage(),
    text: Random.cname(),
    _url: Random.url(),
    region: Random.region(),
    province: Random.province(),
    city: Random.city(true),
    county: Random.county(true),
    _zip: Random.zip(),
    // fruit:Random.fruit(),
    fruit3: Random.fruit(),
    fruit2: '@fruit'
  }
  // let i=3
  // let arr=[]
  // while(i--){
  // arr.push(template)
  // }
  return Mock.mock(template)
}

export const login = () => {
  return {
    code: 200,
    data: {
      token: 'xxx'
    },
    mes: ''
  }
}

export const authorization = () => {
  return {
    code: 200,
    data: {
      token: 'xxx',
      rules: {
        page: {
          home: true,
          home_index: true,
          about: true,
          argu: true,
          count_to: true,
          menu_page: true,
          upload: true,
          form: false,
          folder_tree: true,
          table_page: true,
          params: true,
          component: true,
          render_page: true,
          split_pane: true,
          parent: true,
          child: true,
          named_view: true,
          store: true,
          main: true
        },
        component: {
          edit_button: true,
          publish_button: false
        }
      }
    },
    mes: ''
  }
}
