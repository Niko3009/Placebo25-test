import Image from '@/ui/Image'
import Animation from '@/containers/Animation'
import { Text } from './components'
import styles from './styles/Article.module.scss'

export default function Article() {
  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <Text>
          <p>
            {`Атмосферный бордель на Олдрич-стрит был домом для мафиози, чиновников, коллекционеров, богачей Гонконга и гостей мегаполиса. Особняк изобиловал опиумом, дурманящими напитками и роскошными азиатками — лучшими в городе.`}
          </p>
          <p>
            {`В конце пути, из-за ужесточения законов, смены власти и преображения социальной среды, как и многие проститутки, Roche — просветлела.`}
            <br />
            {`С этого самого момента всю свою энергию, открывшиеся знания и время она посвятила изучению культуры высокой кухни.`}
          </p>
        </Text>

        <ImgN1 />

        <Text>
          <p>
            {`Бурное прошлое наложило на ее дом-ресторан некоторые особенности: она всегда не против как следует выпить и станцевать с гостями под лучшую эклектичную музыку со всего света.`}
          </p>
        </Text>

        <ImgN2 />

        <Text>
          <p>
            {`Основное меню представлено актуальным и авторским comfort-food, построенным на захватывающих вкусовых сочетаниях соусов и высококачественных овощах, мясе и морепродуктах.`}
          </p>
        </Text>
      </div>
    </div>
  )
}

export function ImgN1() {
  return (
    <div className={styles['img-N1']}>
      <div className={styles['img-N1-photo']}>
        <Animation duration={1000} animation={'zoom-out-right'}>
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
        <Animation delay={500} animation={'zoom-out'}>
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

export function ImgN2() {
  return (
    <div className={styles['img-N2']}>
      <div className={styles['img-N2-photo']}>
        <Animation duration={1000} animation={'zoom-out-right'}>
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
        <Animation delay={500} animation={'zoom-out'}>
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
