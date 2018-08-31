var time = (date, strategy = [
    // w/ in 24 hrs
    {
      range: [0, 86400000],
      format: 'HH:mm'
    },
    // 24 - 48 hrs...and so on
    {
      range: [86400000 + 1, 86400000 * 2],
      format: '昨天 HH:mm'
    },
    {
      range: [86400000 * 2 + 1, 86400000 * 3],
      format: '前天 HH:mm'
    },
    {
      range: [86400000 * 3 + 1, Infinity],
      format: 'MM-DD'
    }
  ]) => {
    if (!date) return ''
    date = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date
    let format
    for (let [, v] of strategy.entries()) {
      if (Math.max(...v.range) > Date.now() - date) {
          format = v.format
          break
      }
    }
    
    return format
  }