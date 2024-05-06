"use client"
import Link from "next/link"
import Hamburger from "../hamburger/hamburger"
import styles from "./header.module.css"
import { motion, useCycle } from "framer-motion"

export default function Header() {
  const [isOpen, toggle] = useCycle(false, true)
  const clickCallback = () => {
    toggle()
  }
  const variants = {
    open: {
      width: "100%",
      opacity: 1,
      transition: {
        type: "tween",
      }
    },
    closed: {
      width: "0%",
      transition: {
        type: "tween",
      },
    }
  };
  return (
    <header className={styles.header} >
      <div className={styles.emphasisLine} />
      <div className={styles.logoAndBurger}>
        <span className={styles.logoText}>Blossom</span>
        <Hamburger className={styles.burger} isOpened={isOpen} clickCallback={clickCallback} />
      </div>
      <motion.nav
        className={styles.sidenav}
        variants={variants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <Link href="/" className={styles.link} onClick={() => toggle()}>Home</Link>
        <Link href="/book" className={styles.link} onClick={() => toggle()}>Book now</Link>
      </motion.nav>
    </header >
  )
}