import { useState } from "react";
import Navbar from "./component/navbar";
import Container from "react-bootstrap/esm/Container";
import Cards from "./component/cards";
import Gategorays from "./component/gategoray";
import Header from "./component/header";
import { data } from "./data"
function App() {
  const [myData, setMyData] = useState(data);

  //put the type of categoray in arr 

  const arrTypeCat = ["الكل", ...new Set(data.map((e) => e.gategoray))]

  //filter by categoray 
  const filterbyCategory = (cat) => {
    if (cat === "الكل") {
      setMyData(data)
    } else {
      const categ = data.filter((e) => e.gategoray === cat)
      setMyData(categ)
    }
  }

  //filter by search
  const filterbysearch = (word) => {
    if (word != "") {
      const newArr = data.filter((e) => e.title === word)
      setMyData(newArr)
    }
  }
  return (
    <>
      <Navbar filterbysearch={filterbysearch} />
      <Container>
        <Header />
        <Gategorays filterbyCategory={filterbyCategory} arrTypeCat={arrTypeCat} />
        <Cards data={myData} />
      </Container>
    </>
  );
}

export default App;
