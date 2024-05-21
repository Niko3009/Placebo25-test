'use client'

import AOS from 'aos'
import { useEffect, useState } from 'react'

export default function Observer({ children, once = true }) {
  const [isAosInitialize, setAosInitialize] = useState(false)

  useEffect(() => {
    if (!isAosInitialize) {
      AOS.init({ once })
      setAosInitialize(true)
      const refresh = () => AOS.refresh()
      const target = document.body
      target
        .querySelectorAll('div')
        .forEach((div) => div.addEventListener('scroll', refresh, false))
    }
  }, [isAosInitialize])

  return children
}
