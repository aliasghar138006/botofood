import Link from "next/link";
import styles from "./layout.module.css"
function Layout({children}) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Link href="/"><span>BotoFood</span></Link>
                </div>
                <div className={styles.right}>
                    <Link href="/menu/"><span>Menu</span></Link>
                    <Link href="/categories/"><span>Categories</span></Link>
                </div>
            </div>
            <div className={styles.content}>
                {children}
            </div>
            <div className={styles.footer}>
                <span><Link href="https://botostart.ir" style={{color:'#2d660a'}}>Botostart</Link>Next.js course|BotoFood Project &copy;</span>
            </div>
        </div>
    );
}

export default Layout;