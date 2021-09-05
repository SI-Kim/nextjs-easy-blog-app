import styles from "../../styles/layouts.module.css";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

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

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover
      }
    }
  }))(TableRow);

  return (
    <div className={styles.main}>
      <TableContainer component={Paper} style={{ margin: "10px" }}>
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>번호</StyledTableCell>
              <StyledTableCell>제목</StyledTableCell>
              <StyledTableCell>날짜</StyledTableCell>
              <StyledTableCell>작성자</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {mainBoardDatas.map((data) => (
              <StyledTableRow key={data.id}>
                <StyledTableCell>{data.id}</StyledTableCell>
                <StyledTableCell>{data.title}</StyledTableCell>
                <StyledTableCell>{data.date}</StyledTableCell>
                <StyledTableCell>{data.author}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
