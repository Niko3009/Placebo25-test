import Animation from '@/containers/Animation'
import Logo from './Logo'

import styles from './styles/Footer.module.scss'

export default function () {
  return (
    <footer className={styles.module}>
      <Animation duration={1000} animation={'fade-up'}>
        <div className={styles.wrapper}>
          <Logo />

          <div className={styles['text-box']}>
            <div className={styles.text}>
              <p>{`Основное меню представлено актуальным и авторским comfort-food`}</p>
            </div>

            <div className={styles.links}>
              <p>
                <a href="#">{`Whatsapp`}</a>
              </p>
              <p>
                <a href="#">{`Telegram`}</a>
              </p>
            </div>
          </div>
        </div>
      </Animation>
    </footer>
  )
}
