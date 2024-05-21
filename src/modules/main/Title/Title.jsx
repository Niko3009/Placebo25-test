import TitleImg from './TitleImg'
import TitleText from './TitleText'

import styles from './styles/Title.module.scss'

export default function Title() {
  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <TitleImg />
        <TitleText />
      </div>
    </div>
  )
}
export { Title }
