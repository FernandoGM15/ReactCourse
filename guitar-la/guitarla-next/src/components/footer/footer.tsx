import { APP_LINKS } from "@/app/constants"
import NavLink from "../navlink/navlink"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.content} container`}>
        <nav className={styles.navigation}>
          {APP_LINKS.map(link => <NavLink key={link.path} {...link} />)}
        </nav>

        <p className={styles.copyright}>All the rights are reserved {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
export default Footer