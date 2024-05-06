// based on https://codesandbox.io/s/hamburger-menu-with-framer-motion-iwxtp
import { motion } from "framer-motion";
import styles from './hamburger.module.css';
import { useState } from "react";

export default function Hamburger(
  { className, clickCallback, isOpened, toggle }:
    { className?: string, clickCallback: Function, isOpened: boolean, toggle?: Function }
) {


  const top = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: 45,
      translateY: 2
    }
  };
  const center = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: -45,
      translateY: -2
    }
  };
  const strokeWidth = 4
  const width = 64
  const height = 24
  const unitHeight = 4
  const unitWidth = (unitHeight * (width)) / (height);
  const lineProps = {
    strokeWidth: strokeWidth,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: isOpened ? "opened" : "closed",
    transition: { ease: "easeOut", duration: 0.2 },
    height: height,
    width: width,
  }


  return (

    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      className={`${styles.hamburger} ${className}`}
      onClick={() => {
        if (clickCallback)
          clickCallback()
      }}
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  )
}