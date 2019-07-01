export function say() {
  console.log('hello vue-webpack-project');
}

export function getData() {
  return new Promise((resolve, reject) => {
      resolve('ok');
  })
}