import Header from '@/modules/Header'
import Footer from '@/modules/Footer'

import '@/global/styles.scss'
import styles from './layout.module.scss'

export default function ({ children }) {
  return (
    <html lang="en">
      <body>
        <div id={'layout'} className={styles.layout}>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
