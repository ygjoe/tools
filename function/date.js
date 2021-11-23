// 获取上周六到本周五的时间区间
function getBeforeStaToNowFir () {
  const date = new Date().getDay()
  if (date === 0) {
    return getInRecentDays(2)
  }
  if (date === 6) {
    return getInRecentDays(1)
  }
  return getInRecentDays(2 + date)
}

// 获取近几日时间区间
function getInRecentDays (num) {
  const date = parseTime(new Date()).split(' ')[0]
  const recentDays = new Date(date).getTime() - 1000 * 3600 * 24 * (num - 1)
  const result = parseTime(new Date(recentDays)).split(' ')[0]
  return [`${result} 00:00:00`, `${date} 23:59:59`]
}

// 获取默认期转化时间 期结束时间+3～期结束时间+9天
function getNextSevenDays (endTime) {
  const day1 = new Date(endTime).getTime() + 1000 * 3600 * 24 * 3
  const day2 = new Date(endTime).getTime() + 1000 * 3600 * 24 * 9
  const resultStartTime = parseTime(new Date(day1))
  const resultEndTime = parseTime(new Date(day2))
  return [resultStartTime, resultEndTime]
}

// 获取昨日时间区间
function getYesterday () {
  const date = parseTime(new Date()).split(' ')[0]
  const yesterday = new Date(date).getTime() - 1000 * 3600 * 24
  const result = parseTime(new Date(yesterday)).split(' ')[0]
  return [`${result} 00:00:00`, `${result} 23:59:59`]
}

// 获取今日时间区间 return ['x-x-x 00:00:00', 'x-x-x 23:59:59']
function getNowDate () {
  const date = parseTime(new Date()).split(' ')[0]
  return [`${date} 00:00:00`, `${date} 23:59:59`]
}

// 获取今天的日期
function getTodayDate () {
  const date = parseTime(new Date()).split(' ')[0]
  return `${date} 00:00:00`
}

// 获取近多少个月的时间，number=6默认6个月, hasNowMonth是否包含本月
function getNowBeforeMonth (number = 6, hasNowMonth = true) {
  const date = new Date()
  let y = date.getFullYear()
  const m = hasNowMonth ? date.getMonth() + 1 : date.getMonth()
  let nextM = m
  let beforeM = m - number + 1
  let beforeY = y
  if (beforeM <= 0) {
    beforeM = 12 - (number - m) + 1
    beforeY--
  }
  if (nextM > 12) {
    nextM = nextM - 12
    y++
  }
  beforeM = beforeM < 10 ? '0' + beforeM : beforeM
  const start = `${beforeY}-${beforeM}-01 00:00:00`
  const endT = new Date(y, nextM, 1).getTime() - 1000 * 60 * 60 * 24
  const end = parseTime(new Date(endT)).split(' ')[0] + ' 23:59:59'
  return [start, end]
}

// 获取本周一到今天的时间
function getNowWeekToToday () {
  const date = new Date()
  const week = date.getDay()
  const startT = date.getTime() - 1000 * 60 * 60 * 24 * (week - 1)
  const start = parseTime(startT).split(' ')[0] + ' 00:00:00'
  const end = parseTime(date).split(' ')[0] + ' 23:59:59'
  return [start, end]
}

// 获取本月日期区间 val=可被new Date()解析
function getNowMonth (val = new Date()) {
  const date = new Date(val.replace ? val.replace(/-/g, '/') : val)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  let nextM = m
  if (nextM > 12) {
    nextM -= 12
    y++
  }
  m = m < 10 ? '0' + m : m
  nextM = nextM < 10 ? '0' + nextM : nextM
  const start = `${y}-${m}-01 00:00:00`
  const endT = new Date(y, nextM, 1).getTime() - 1000 * 60 * 60 * 24
  const end = parseTime(new Date(endT)).split(' ')[0] + ' 23:59:59'
  return [start, end]
}

// 获取本月1号到今天的日期区间
function getNowMonthToToday () {
  const date = new Date()
  const y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  const start = `${y}-${m}-01 00:00:00`
  const end = parseTime(date).split(' ')[0] + ' 23:59:59'
  return [start, end]
}

// 获取当月
function getDuringMonth () {
  const date = new Date()
  const y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  return [y, m].join('-')
}

// 获取上月
function getBeforeMonth (res) {
  const time = res || formatDate(new Date().getTime())
  const date = new Date(time.replace(/-/g, '/'))
  let y = date.getFullYear()
  let m = date.getMonth()
  if (m === 0) {
    y = y - 1
    m = 12
  }
  m = m < 10 ? '0' + m : m
  return [y, m].join('-')
}

// return 年-月-日 时:分:秒
function timestampToTime (timestamp) {
  const date = new Date(timestamp) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = date.getFullYear() + '-'
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  const D = date.getDate() + ' '
  const h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':'
  const m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':'
  const s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds())
  return Y + M + D + h + m + s
}

// return 年-月-日 时:分:秒
function parseTime (time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

// return x月x日x时x分 || 年-月-日 时:分:秒
function formatTime (time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

// return 年-月-日
function formatDate (timeStamp) {
  const time = typeof timeStamp === 'string' ? timeStamp.replace(/-/g, '/') : timeStamp
  var date = new Date(time)
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  var d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  return y + '-' + m + '-' + d
}

// 下一天的时间 年-月-日
function nextDay (date, end, arr) {
  arr.push(formatDate(date))
  var d = date + 1000 * 60 * 60 * 24 * 1
  if (d < end) {
    nextDay(d, end, arr)
  }
  return arr
}

// 列举日期区间的所有日期
function getYearAndMonthAndDay (start, end) {
  var result = []
  var start_time = new Date(start.replace(/-/g, '/')).getTime()
  var end_time = new Date(end.replace(/-/g, '/')).getTime()
  result = nextDay(start_time, end_time, [])
  result.push(formatDate(end))
  return result
}

// 列举年份期间的所有月份
function getYearAndMonth (start, end) {
  var result = []
  var startY = new Date(start.replace(/-/g, '/')).getFullYear()
  var endY = new Date(end.replace(/-/g, '/')).getFullYear()
  var startM = new Date(start.replace(/-/g, '/')).getMonth() + 1
  var endM = new Date(end.replace(/-/g, '/')).getMonth() + 1
  var y = endY - startY
  var needM = endM + 12 * y - startM + 1
  for (var i = 0; i < needM; i++) {
    if (startM < 10) {
      startM = '0' + startM
    }
    result.push(`${startY}-${startM}`)
    if (startM === 12) {
      startY++
      startM = 0
    }
    startM++
  }
  if (result.length === 1) {
    result.push(result[0])
  }
  return result
}
