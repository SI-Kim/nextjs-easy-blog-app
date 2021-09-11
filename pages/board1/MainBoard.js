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
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Header from "../../layouts/Header";

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
    },
    {
      id: 3,
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
    <>
    <Header />
    <div className={styles.main}>
      <div className={styles.boardBox}>
      {mainBoardDatas.map((data) => {
        
        return (
          <Card
            className={styles.cardItem}
            key={data.id}
            elevation={2}
          >
            <CardHeader
              title={data.title.substr(0, 10)}
              subheader={data.date}
              className={styles.cardHeader}
            ></CardHeader>
            <CardMedia
              image="/logo2.png"
              title="logo2"
              className={styles.cardMedia}
            />
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={styles.cardContent}
              >
                {data.content}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
      </div>
    </div>
    </>
  );
}
