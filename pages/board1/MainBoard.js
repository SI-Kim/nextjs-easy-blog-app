import styles from "../../styles/layouts.module.css";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

export default function MainBoard() {
  const mainBoardDatas = [
    {
      id: 1,
      date: "2021-01-01",
      title: "더미 데이터 제목 1",
      content: "터미데이터 내용 1",
      author: "더미데이터",
      link: "/board1/MainBoard"
    },
    {
      id: 2,
      date: "2021-03-03",
      title: "더미데이터 제목 2asdfojhjasdlkfsad",
      content: "더미데이터 내용 2 sdafjlkasjdlfksdfa",
      author: "asdfkljasdllfksjd",
      link: "/board1/MainBoard"
    }
  ];
  return (
    <div className={styles.main}>
      <Table>
        <TableHead>
          <TableCell>번호</TableCell>
          <TableCell>제목</TableCell>
          <TableCell>날짜</TableCell>
          <TableCell>작성자</TableCell>
        </TableHead>
        <TableBody>
          {mainBoardDatas.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.title}</TableCell>
              <TableCell>{data.date}</TableCell>
              <TableCell>{data.author}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
