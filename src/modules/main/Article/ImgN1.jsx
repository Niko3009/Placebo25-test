import Image from '@/ui/Image'
import Animation from '@/containers/Animation'

import styles from './styles/Article.module.scss'

export default function ImgN1() {
  return (
    <div className={styles['img-N1']}>
      <div className={styles['img-N1-photo']}>
        <Animation
          duration={1000}
          animation={'zoom-out-right'}
          anchorPlacement={'top-center'}
          anchor={`.${styles['img-N1-photo']}`}
        >
          <Image
            alt={'title-photo'}
            src={'/img/photo (1).png'}
            fill
            priority
            style={{ objectFit: 'contain' }}
            sizes="100%"
          />
        </Animation>
      </div>

      <div className={styles['img-N1-doc']}>
        <Animation
          delay={500}
          animation={'zoom-out'}
          anchorPlacement={'top-center'}
          anchor={`.${styles['img-N1-photo']}`}
        >
          <Image
            alt={'title-stamp'}
            src={'/img/photo (2).png'}
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
