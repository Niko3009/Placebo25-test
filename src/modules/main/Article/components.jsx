import Animation from '@/containers/Animation'

import styles from './styles/Article.module.scss'

export function Text({ children }) {
  return (
    <div className={styles.text}>
      <Animation
        duration={1000}
        animation={'fade-up'}
        className={styles['text-sub-box']}
      >
        {children}
      </Animation>
    </div>
  )
}
