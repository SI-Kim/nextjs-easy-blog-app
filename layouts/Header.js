import styles from "../styles/layouts.module.css";
import Link from "next/link";
import $ from "jquery";
import { Button } from "@material-ui/core";
import useState from "react";

export default function Header() {
  const headerNav = [
    {
      id: 1,
      name: "메인게시판",
      link: "/board1/MainBoard"
    },
    {
      id: 2,
      name: "더미버튼",
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
              <Button />
            </Link>
          </div>
        ))}
        {/* <div className={styles.item}><Link href="/board1/MainBoard">MainBoard</Link></div> */}
      </nav>
    </header>
  );
}
