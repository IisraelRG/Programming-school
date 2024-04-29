import "./ContentTableCss.css";
import User from "./../assets/img/user.jpg";

function ContentTable() {
  return (
    <div>
      <div className="contentTable">
        <div className="cardUser">
          <img src={User} alt="" />
          <div className="contentText">
            <h3>Nombre usuario</h3>
            <div className="contentProgres">
              <p>Progreso</p>
              <div className="barraProgress"></div>
            </div>
          </div>
        </div>
        <div className="contentTitleCourses">
          <h3>Algoritmos y estructura de datos</h3>
          <p>Tabla de contenido</p>
        </div>
        <div className="contentTableConent">
          <a href="" className="cardCapCourses">
            <h2>01</h2>
            <h3>Conceptos básicos de algoritmos</h3>
          </a>
          <a href="" className="cardCapCourses">
            <h2>02</h2>
            <h3>Conceptos básicos de algoritmos</h3>
          </a>
          <a href="" className="cardCapCourses">
            <h2>03</h2>
            <h3>Conceptos básicos de algoritmos</h3>
          </a>
          <a href="" className="cardCapCourses">
            <h2>04</h2>
            <h3>Conceptos básicos de algoritmos</h3>
          </a>
          <a href="" className="cardCapCourses">
            <h2>05</h2>
            <h3>Conceptos básicos de algoritmos</h3>
          </a>
          <a href="" className="cardCapCourses">
            <h2>06</h2>
            <h3>Conceptos básicos de algoritmos</h3>
          </a>
          <a href="" className="cardCapCourses">
            <h2>07</h2>
            <h3>Conceptos básicos de algoritmos</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContentTable;
