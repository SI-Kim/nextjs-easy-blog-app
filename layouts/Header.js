import styles from '../styles/layouts.module.css';
import Link from 'next/link';
import headerNav from '../dumy-datas/headerDatas';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoZone}>
                empty space for logo
            </div>
            <nav className={styles.navigation}>
            <div className={styles.item}><Link href="/board1/MainBoard">MainBoard</Link></div>
            </nav>
        </header>
    );
}