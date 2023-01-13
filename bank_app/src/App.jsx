import React from 'react'
import styles from './style'


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        Here a navigation bar will appear
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Hero part of the page comes here
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      Stats
      Business
      Billing
      CardDeal
      Testimonial
      Clients
      CTA
      Footer

    </div>


  </div>
);


export default App