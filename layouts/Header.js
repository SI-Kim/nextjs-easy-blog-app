import styles from "../styles/layouts.module.css";
import Link from "next/link";
import $ from "jquery";

export default function Header() {
  let sidebarFlag = false;
  let clickFlag = false;
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

  const handleHambergerMenu = () => {
    if (clickFlag) return;
    clickFlag = true;
    let sidebar = $("aside");
    let widthPercent = "20%";

    if (sidebarFlag) {
      widthPercent = "0%";
      sidebarFlag = false;
    } else {
      widthPercent = "20%";
      sidebarFlag = true;
    }

    sidebar.animate(
      {
        width: widthPercent
      },
      1000,
      function () {
        clickFlag = false;
      }
    );
  };

  const hambergerUrl = "/hamberger_menu.png";
  const logoUrl = "/logo.png";

  return (
    <header className={styles.header}>
      <div className={styles.logoZone}>
        <img src={logoUrl} alt="logo" className={styles.logo} />
      </div>
      <nav className={styles.navigation}>
        <img
          className={styles.hamberger}
          onClick={() => handleHambergerMenu()}
          src={hambergerUrl}
          alt="hamberger"
        />
        {headerNav.map((data) => (
          <div key={data.id} className={styles.item}>
            <Link href={data.link}>
              <b>{data.name}</b>
            </Link>
          </div>
        ))}
        {/* <div className={styles.item}><Link href="/board1/MainBoard">MainBoard</Link></div> */}
      </nav>
    </header>
  );
}
