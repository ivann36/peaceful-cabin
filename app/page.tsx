"use client"
import styles from "./page.module.css"
import { Inter } from 'next/font/google'
import { CldImage } from 'next-cloudinary';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${styles.main} ${inter.className}`}>

      <div className={styles.containerOut}>
        <CldImage width='1080' height='929'
          className={styles.houseImg}
          src={"house"} alt="Image of house close to nature" />
        <div className={styles.containerIn}>
          <h1 className={styles.heading1}>
            Spend your weekend in a <span className={styles.emphasize}>beautiful</span> house.
          </h1>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            felis eget nunc luctus condimentum. Donec vitae libero auctor, aliquet
            libero sit amet, fringilla nunc. Nullam eget felis eget nunc luctus
            condimentum. Donec vitae libero auctor, aliquet libero sit amet.
          </p>
          <button className={`${styles.bookButton} ${inter.className}`}>
            Book now
          </button>
        </div>
      </div>
      <div className={styles.about}></div>
    </main>
  );
}
