const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

const Calendar = ({ year = 2026, month = 10, highlightDay = 24 }) => {
  const firstDay = new Date(year, month - 1, 1).getDay()
  const daysInMonth = new Date(year, month, 0).getDate()
  const daysInPrevMonth = new Date(year, month - 1, 0).getDate()

  const days = []
  for (let i = 0; i < firstDay; i++) {
    days.push({ day: daysInPrevMonth - firstDay + i + 1, isCurrent: false })
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, isCurrent: true, isHighlight: i === highlightDay })
  }
  const remaining = 42 - days.length
  for (let i = 1; i <= remaining; i++) {
    days.push({ day: i, isCurrent: false })
  }

  const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <p className="text-center text-sm font-medium text-gray-600 mb-4">
        {year}년 {monthNames[month - 1]}
      </p>
      <div className="grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map((d) => (
          <div key={d} className="text-xs text-gray-400 font-medium py-1">
            {d}
          </div>
        ))}
        {days.map(({ day, isCurrent, isHighlight }, i) => (
          <div
            key={i}
            className={`py-2 text-sm rounded-lg ${
              isHighlight
                ? 'bg-primary text-white font-bold'
                : isCurrent
                  ? 'text-gray-700'
                  : 'text-gray-300'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
