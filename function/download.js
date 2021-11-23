// 保存图片
function downloadImage (imgUrl, name) {
  if (window.navigator.msSaveOrOpenBlob) {
    const bstr = atob(imgUrl.split(',')[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    const blob = new Blob([u8arr])
    window.navigator.msSaveOrOpenBlob(blob, name)
  } else {
    // 这里就按照chrome等新版浏览器来处理
    const a = document.createElement('a')
    a.href = imgUrl
    a.setAttribute('download', name)
    a.click()
  }
}

// 点击下载图片，使用canvas，解决a标签是跳转而不是下载
function downImage (imgUrl, name = 'image') {
  var img = new Image()
  img.onload = function () {
    var canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    var ctx = canvas.getContext('2d')
    // 将img中的内容画到画布上
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    // 将画布内容转换为base64
    var base64 = canvas.toDataURL()
    // 创建a链接
    var a = document.createElement('a')
    a.href = base64
    a.download = name
    // 触发a链接点击事件，浏览器开始下载文件
    a.click()
  }
  img.src = imgUrl
  // 必须设置，否则canvas中的内容无法转换为base64
  img.setAttribute('crossOrigin', 'Anonymous')
}
