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
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

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
      <Card style={{ maxWidth: "240px", margin: "20px" }}>
        <CardHeader
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        ></CardHeader>
        <CardMedia image="/logo2.png" title="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
