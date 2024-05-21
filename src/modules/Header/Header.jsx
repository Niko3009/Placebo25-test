import Logo from './Logo'

import styles from './styles/Header.module.scss'

export default function Header() {
  return (
    <header className={styles.module}>
      <div className={styles.wrapper}>
        <div className={styles['head-description']}>
          <p>
            {`В старый особняк на `}
            <a href="#">{`Кожевнической 16с4`}</a>
            {` обычно заезжали гости со всего света. Зная секретный код `}
            <a href="#">{`+7-999-2102222`}</a>
            {`, распрастранявшийся через местных пьяниц, каждый из них попадал в
            тайную команту…`}
          </p>
        </div>

        <Logo />
      </div>
    </header>
  )
}
export { Header }
