import classNames from 'classnames'

import 'aos/dist/aos.css'
import '@/global/assets/animations.scss'
import styles from './Animation.module.scss'

export default function Animation({
  children,
  className = '',
  animation,
  delay = 0,
  duration = 1000,
  anchor = null,
  anchorPlacement = null,
}) {
  return (
    <div
      className={classNames(styles.wrapper, className)}
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-anchor={anchor}
      data-aos-anchor-placement={anchorPlacement}
      suppressHydrationWarning
    >
      {children}
    </div>
  )
}
export { Animation }
