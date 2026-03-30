import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export const academicCalendarItems = [
  { name: 'DBbatu', path: '/academics/academic_calendar/dbbatu' },
  { name: 'KITSP', path: '/academics/academic_calendar/kitsp' },
]

export default function Academic_Calendar() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', handleOutside)
    return () => document.removeEventListener('click', handleOutside)
  }, [])

  return (
    <div className="academic-calendar-dropdown" ref={ref}>
      <button
        className="dropdown-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        Academic Calendar <span className="caret">▾</span>
      </button>

      {open && (
        <ul className="dropdown-menu">
          {academicCalendarItems.map((item, idx) => (
            <li key={idx} className="dropdown-item">
              <Link to={item.path} onClick={() => setOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
