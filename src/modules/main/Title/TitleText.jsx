import Animation from '@/containers/Animation'
import Image from '@/ui/Image'

import styles from './styles/Title.module.scss'

export default function TitleText() {
  return (
    <div className={styles['title-text']}>
      <div className={styles.text}>
        <Animation
          delay={1000}
          duration={1500}
          animation={'fade-up'}
          anchorPlacement={'top-center'}
          anchor={`.${styles.sign}`}
        >
          <h1>
            {`The guest house of the mysterious Asian woman in the heart of the Eurasian world`}
          </h1>
        </Animation>
      </div>

      <div className={styles.sign}>
        <Animation
          duration={1000}
          animation={'zoom-out-right'}
          anchorPlacement={'top-center'}
          anchor={`.${styles.sign}`}
        >
          <Image
            alt={'Sign'}
            src={'/img/Title-sign.svg'}
            fill
            priority
            style={{ objectFit: 'contain' }}
            sizes="100%"
          />
        </Animation>
      </div>
    </div>
  )
}
export { TitleText }
