'use client'

import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import Image from '@/ui/Image'

import styles from './styles/Header.module.scss'

export default function Logo() {
  const [scrollY, setScrollY] = useState(0)

  const isSmallForm = scrollY >= smallFormLimit
  const handleScroll = () => setScrollY(window.scrollY)

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true })
    }
  }, [])

  return (
    <div className={styles['logo-line']}>
      <div
        className={classNames(styles.logo, {
          [styles['logo-small-form']]: isSmallForm,
        })}
      >
        <Image
          src={'/img/Logo.svg'}
          fill
          priority
          style={{ objectFit: 'contain' }}
          alt={'Logo'}
          sizes="100%"
        />
      </div>
    </div>
  )
}
export { Logo }

export const smallFormLimit = styles['small-form-limit-px']
