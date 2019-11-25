import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import React from 'react'

export default function Calendar() {
  return (
    <div>
<FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
    </div>
  )
}
