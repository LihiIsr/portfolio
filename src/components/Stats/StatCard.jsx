import React from 'react'
import CountUp from '../UI/CountUp'

export default function StatCard({children, from, to, duration}) {
  return (
    <div className="clients-stats">
          <div className="count-up-num">
          <CountUp
          from={from}
          to={to}
          separator=","
          direction="up"
          duration={duration}
          startCounting={true}
        />
            +
            </div>

          <div className="count-up-text">{children}</div>
        </div>
  )
}
