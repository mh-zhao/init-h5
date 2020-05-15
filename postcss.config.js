
module.exports = ({ file }) => {
  //当设计稿是750 使用此判断
  // let isVant = file && file.dirname && file.dirname.indexOf("vant") > -1;
  // let rootValue = isVant ? 37.5 : 75; // 判断条件 请自行调整
  // let rootValue = 37.5;
  // return {
  //     plugins: {
  //         autoprefixer: {},
  //         "postcss-pxtorem": {
  //             rootValue: rootValue,
  //             propList: ["*"]
  //         }
  //     }
  // }
  return {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ['Android >= 4.0', 'iOS >= 8'],
      },
      'postcss-pxtorem': {
        rootValue: 37.5,
        propList: ['*'],
      },
    },
  }
}
