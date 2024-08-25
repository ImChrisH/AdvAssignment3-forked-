import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import employees from "./employees";
import StatTable from "./StatTable";

function Card(props) {
  return (
    <div className="cStyle">
      <img src={props.imgURL} width={"400px"} />
      <h1 className="cName">{props.name}</h1>
      <h2 className="cPos">{props.position}</h2>
      <p className="cardDesc">
        {props.label}
        {props.description1}
      </p>
    </div>
  );
}

function createEmpCard(ourEmp) {
  return (
    <Card
      key={ourEmp.empID}
      name={ourEmp.name}
      position={ourEmp.position}
      description1={ourEmp.hobby}
      imgURL={ourEmp.imgURL}
      label="Hobby: "
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="cardWrap">{employees.map(createEmpCard)}</div>
      <div className="tableWrap">
        <StatTable />
      </div>
      <Footer />
    </div>
  );
}

export default App;
