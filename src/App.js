import "./App.css";
import GitHubLogo from "./images/github-mark-white.svg";
import LinkedinLogo from "./images/linkedin-icon.png";
import EmailLogo from "./images/Mail-Icon.png";
import ImageCard from "./images/undraw_programming_re_kg9v.svg";

import HtmlIcom from "./images/html5-logo.png";
import CssIcon from "./images/CSS3_logo.svg";
import JSIcon from "./images/JavaScript-logo.png";
import ReactIcon from "./images/React-icon.png";
import TsIcon from "./images/TypescriptLogo.png";
import StyleIcon from "./images/StyledComponents.jpg";

import PhytonIcon from "./images/python-logo.png";
import MySQLIcon from "./images/mysql-logo.png";

import OfficeIcon from "./images/Office_logo.png";
import CanvaIcon from "./images/canva-logo.png";
import GitIcon from "./images/Git-Icon.png";
import FigmaIcon from "./images/Figma-logo.svg";

import PokedexImage from "./images/pokedexImage.png";
import EuroMilhoesImage from "./images/euromilhoesImage.png";
import InterpretadorImage from "./images/tradutorMorseImage.png";
import SaexImage from "./images/SaexImage.png";

function App() {
  return (
    <div className="App">
      <nav id="AnchorNav">
        <h1>&#60; Maximiliano /&#62;</h1>
        <ul>
          <li>
            <a href="#HabilitiesSection">Habilidades</a>
          </li>
          <li>
            <a href="#ProjectsSection">Projetos</a>
          </li>
          <li>
            <a href="#QualificationsSection">Qualificações</a>
          </li>
          <li>
            <a href="#ContactSection">Contato</a>
          </li>
        </ul>
      </nav>
      <main>
        <div id="firstCards">
          <div id="leftCard" className="backgroundCard">
            <p id="leftCardTitle" className="cardTitle">
              Desenvolvedor Júnior
            </p>
            <p id="leftCardText">
              Sou um desenvolvedor front-end júnior em busca de oportunidades
              para continuar desenvolvendo minhas habilidades e crescer
              profissionalmente.
            </p>
            <span id="socialContent">
              <a href="https://github.com/Monster1001" target="__blank">
                <img src={GitHubLogo} className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/maximilianomarqueslopes/" target="__blank">
                <img src={LinkedinLogo} className="icon" />
              </a>
              <a href="mailto:maxlopes365@gmail.com?subject=Vi seu portfólio!&body=Olá! Quero conectar com você!" target="__blank">
                <img src={EmailLogo} className="icon" />
              </a>
            </span>
          </div>
          <div id="RightCard" className="backgroundCard">
            <img src={ImageCard} />
            <a className="btnShow" href="#ProjectsSection">Meus projetos</a>
          </div>
        </div>
        <div id="HabilitiesSection">
          <h1 id="habilitiesTitle" className="cardTitle">Habilidades</h1>
          <p>Nível técnico</p>
          <div id="areaCardHabilities">
            <div id="FrontEndCard" className="backgroundCard">
              <h1>Front-end</h1>
              <span>
                <img src={HtmlIcom} className="icon" />
                <img src={CssIcon} className="icon" />
                <img src={JSIcon} className="icon" />
                <img src={ReactIcon} className="icon" />
                <img src={TsIcon} className="icon" />
                <img src={StyleIcon} id="StyleIcon" className="icon" />
              </span>
            </div>
            <div id="BackEndCard" className="backgroundCard">
              <h1>Back-end</h1>
              <span>
                <img src={PhytonIcon} className="icon" />
                <img src={MySQLIcon} className="icon" />
              </span>
            </div>
            <div id="FerramentasCard" className="backgroundCard">
              <h1>Ferramentas</h1>
              <span>
                <img src={OfficeIcon} className="icon" />
                <img src={CanvaIcon} className="icon" />
                <img src={GitIcon} className="icon" />
                <img src={FigmaIcon} className="icon" id="figmaIcon"/>
              </span>
            </div>
            <div id="IdiomasCard" className="backgroundCard">
              <h1>Idiomas</h1>
              <span>
              <p>Português - C2<br/>
              Inglês - B2</p>
              </span>
            </div>
          </div>
        </div>
        <div id="ProjectsSection">
          <h1 className="cardTitle">Projetos</h1>
          <div id="areaToCards">
            <div className="ProjectCard backgroundCard">
              <img src={PokedexImage} />
              <p>Pokedéx</p>
              <a className="btnShow" href="https://monster1001.github.io/Pokedex/" target="__blank">Ver</a>
            </div>
            <div className="ProjectCard backgroundCard">
              <img src={EuroMilhoesImage} />
              <p>Euro milhões</p>
              <a className="btnShow" href="https://monster1001.github.io/euromilhoesReact/" target="__blank">Ver</a>
            </div>
            <div className="ProjectCard backgroundCard">
              <img src={InterpretadorImage} />
              <p>Tradutor Morse</p>
              <a className="btnShow" href="https://monster1001.github.io/TradutorParaMorse/" target="__blank">Ver</a>
            </div>
            <div className="ProjectCard backgroundCard">
              <img src={SaexImage} />
              <p>SAEX</p>
              <a className="btnShow" href="https://www.saexaeronautica.com.br" target="__blank">Ver</a>
            </div>
          </div>
        </div>
        <div id="QualificationsSection">
          <div id="AcademicExp">
            <h1 className="cardTitle">Experiência Acadêmica</h1>
            <ol className="dottedBar">
              <li className="backgroundCard">
                <p>2019 - 2021</p>
                <p>
                  Ensino médio
                  <br />
                  Escola Técnica Estadual Parobé
                </p>
              </li>
              <li className="backgroundCard">
                <p>2021 Nov. - 2022 Maio </p>
                <p>
                  Dev the Dev's
                  <br />
                  Programação básica com Java.
                </p>
              </li>
              <li className="backgroundCard">
                <p>2022 Agosto - Atualmente</p>
                <p>
                  Instituto Politécnico da Maia
                  <br />
                  Licenciatura em Tecnologia da Informação, web e multimédia.
                </p>
              </li>
              <li className="backgroundCard">
                <p>2022 Nov. - Dez.</p>
                <p>
                  Orange Tech+
                  <br />
                  Bootcamp promovido pelo Inter e DIO.
                </p>
              </li>
            </ol>
          </div>
          <div id="ProfessionalExp" >
            <h1 className="cardTitle">Experiência Profissional</h1>
            <ol className="dottedBar">
              <li className="backgroundCard">
                <p>2018 - 2020</p>
                <p>
                  Refrigeração Lopes <br />
                  Auxiliar técnico de lavadoras e refrigeração.
                </p>
              </li>
              <li className="backgroundCard">
                <p>2020 - 2022</p>
                <p>
                  Dvoskinkulkes Joalheria <br />
                  Auxiliar administrativo
                </p>
              </li>
            </ol>
          </div>
        </div>
        <div id="ContactSection">
          <h1 className="cardTitle">Contatos</h1>
          <p>Converse comigo!</p>
          <span id="ContactContent" className="backgroundCard">
            <a href="https://github.com/Monster1001" target="__blank">
              <img src={GitHubLogo} className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/maximilianomarqueslopes/" target="__blank">
              <img src={LinkedinLogo} className="icon" />
            </a>
            <a href="mailto:maxlopes365@gmail.com?subject=Vi seu portfólio!&body=Olá! Quero conectar com você!" target="__blank">
              <img src={EmailLogo} className="icon" />
            </a>
          </span>
        </div>
      </main>
      <footer>
        <h1>&#60; Maximiliano /&#62;</h1>
        <ul>
          <li>
            <a href="#AnchorNav">Início</a>
          </li>
          <li>
            <a href="#HabilitiesSection">Habilidades</a>
          </li>
          <li>
            <a href="#ProjectsSection">Projetos</a>
          </li>
          <li>
            <a href="#QualificationsSection">Qualificações</a>
          </li>
          <li>
            <a href="#ContactSection">Contato</a>
          </li>
        </ul>
        <p id="footerNote">2023 - Maximiliano Lopes</p>
      </footer>
    </div>
  );
}

export default App;
