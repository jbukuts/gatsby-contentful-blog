import React from "react"
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import * as styles from './Layout.module.scss';
import { m, AnimatePresence, LazyMotion, domAnimation } from "framer-motion"

const { main } = styles;

interface LayoutProps {
  children: React.ReactNode
  path: string;
}

const PAGE_TRANSITIONS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    type: 'spring',
    mass: 0.75,
    stiffness: 80,
    duration: 0.1
  }
}

const Layout = (props: LayoutProps) => {
  const { children, path } = props;
  return (
    <LazyMotion features={domAnimation}>
      <Header currentPath={path}/>
      <AnimatePresence exitBeforeEnter>
        <m.main
          {...PAGE_TRANSITIONS}
          key={path} 
          className={main}>
          {children}
        </m.main>
      </AnimatePresence>
      <Footer/>
    </LazyMotion>
  )
}

export default Layout;