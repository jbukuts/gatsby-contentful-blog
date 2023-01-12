import React from "react"
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import * as styles from './Layout.module.scss';

const { main } = styles;

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className={main}>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout;