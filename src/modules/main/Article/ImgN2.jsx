import Image from '@/ui/Image'
import Animation from '@/containers/Animation'

import styles from './styles/Article.module.scss'

export default function ImgN2() {
  return (
    <div className={styles['img-N2']}>
      <div className={styles['img-N2-photo']}>
        <Animation
          duration={1000}
          animation={'zoom-out-right'}
          anchorPlacement={'top-center'}
          anchor={`.${styles['img-N2-photo']}`}
        >
          <Image
            alt={'title-photo'}
            src={'/img/photo (3).png'}
            fill
            priority
            style={{ objectFit: 'contain' }}
            sizes="100%"
          />
        </Animation>
      </div>

      <div className={styles['img-N2-doc']}>
        <Animation
          delay={500}
          animation={'zoom-out'}
          anchorPlacement={'top-center'}
          anchor={`.${styles['img-N2-photo']}`}
        >
          <Image
            alt={'title-stamp'}
            src={'/img/photo (4).png'}
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
