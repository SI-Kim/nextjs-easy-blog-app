import styles from "../styles/layouts.module.css";
import Link from "next/link";
import $ from "jquery";
import { Button } from "@material-ui/core";
import useState from "react";

export default function Header() {
  const headerNav = [
    {
        id: 1,
        name: "Home",
        link: "/"    
    },
    {
      id: 2,
      name: "Board",
      link: "/board1/MainBoard"
    },
    {
      id: 3,
      name: "Dummy",
      link: "/board1/MainBoard"
    }
  ];

  const onhoverMenu = (event) => {
    console.log(event);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        {headerNav.map((data) => (
          <div
            key={data.id}
            className={styles.item}
            onMouseOver={() => onhoverMenu()}
          >
            <Link href={data.link}>
              <Button style={{ color: "white;" }}><b>{data.name}</b></Button>
            </Link>
          </div>
        ))}
        {/* <div className={styles.item}><Link href="/board1/MainBoard">MainBoard</Link></div> */}
      </nav>
    </header>
  );
}
