import Animation from '@/containers/Animation'
import Image from '@/ui/Image'

import styles from './styles/Title.module.scss'

export default function TitleImg() {
  return (
    <div className={styles['title-img']}>
      <div className={styles.photo}>
        <Animation
          duration={1000}
          animation={'flip-right'}
          anchorPlacement={'top-center'}
          anchor={`.${styles.photo}`}
        >
          <Image
            alt={'title-photo'}
            src={'/img/Title-photo.png'}
            fill
            priority
            style={{ objectFit: 'contain' }}
            sizes="100%"
          />
        </Animation>
      </div>

      <div className={styles.stamp}>
        <Animation
          delay={1000}
          duration={200}
          animation={'zoom-out'}
          anchorPlacement={'top-center'}
          anchor={`.${styles.photo}`}
        >
          <Image
            alt={'title-stamp'}
            src={'/img/Title-stamp.png'}
            fill
            priority
            style={{ objectFit: 'contain' }}
            sizes="100%"
          />
        </Animation>
      </div>

      <div className={styles.description}>
        <Animation
          delay={1200}
          duration={200}
          animation={'zoom-out'}
          anchorPlacement={'top-center'}
          anchor={`.${styles.photo}`}
        >
          <p>{`Madame Roche`}</p>
        </Animation>
      </div>
    </div>
  )
}
export { TitleImg }
