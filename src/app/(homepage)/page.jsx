import Title from '@/modules/main/Title'
import Article from '@/modules/main/Article'
import AOS from '@/containers/Animation/Observer'

import styles from './page.module.scss'

export default function () {
  return (
    <AOS>
      <div className={styles.modules}>
        <Title />
        <Article />
      </div>
    </AOS>
  )
}
