import Image from '@/ui/Image'

import styles from './styles/Footer.module.scss'

export default function () {
  return (
    <div className={styles['logo-line']}>
      <div className={styles.logo}>
        <Image
          src={'/img/Logo.svg'}
          fill
          priority
          style={{ objectFit: 'contain' }}
          alt={'Logo'}
          sizes="100%"
        />
      </div>
    </div>
  )
}
