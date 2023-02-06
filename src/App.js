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
import JavaIcon from "./images/JavaIcon.png";

import OfficeIcon from "./images/Office_logo.png";
import CanvaIcon from "./images/canva-logo.png";
import GitIcon from "./images/Git-Icon.png";
import FigmaIcon from "./images/Figma-logo.svg";

import PokedexImage from "./images/pokedexImage.png";
import EuroMilhoesImage from "./images/euromilhoesImage.png";
import InterpretadorImage from "./images/tradutorMorseImage.png";
import SaexImage from "./images/SaexImage.png";
import JogoDaForcaImage from "./images/JogoDaForcaImage.png";



import EnglishTranslate from "./data/languages/en.json"
  
export function Translate(){
    

  function changeLang(){
    var LangSelect = document.getElementById("LangSelect")
    var portugueseCheck = document.getElementById("Portuguese")

    var main = document.getElementById("mainID")
    var nav = document.getElementById("AnchorNav")
  
    nav.classList.remove("blurEffect")
    main.classList.remove("blurEffect")

    if (portugueseCheck.checked){
      LangSelect.style.cssText = 'display:none'

      
    }else{
      
      for(let id in EnglishTranslate){
        let content = EnglishTranslate[id] 
        document.getElementById(`${id}`).innerHTML = content     
         
    }
    LangSelect.style.cssText = 'display: none'
  }
}

  return(
    <div id="LangSelect">
        <p>Choose a language!</p>
        <fieldset>
        <div>
          <input type="radio" id="Portuguese" name="drone" value="Portuguese" defaultChecked/>
                
          <label for="Portuguese">Português</label>
        </div>

        <div>
          <input type="radio" id="English" name="drone" value="English"/>
          <label for="English">English</label>
        </div>
    </fieldset>
      <button onClick={changeLang}>Select</button>
    </div>
  )
}




function App() {
  return (
    <div className="App" id="AppElement">
      <Translate/>
      <nav id="AnchorNav" className="blurEffect">
        <h1>&#60; Maximiliano /&#62;</h1>
        <ul>
          <li>
            <a href="#HabilitiesSection" id="HabilitiesNav">Habilidades</a>
          </li>
          <li>
            <a href="#ProjectsSection"  id="ProjectsNav">Projetos</a>
          </li>
          <li>
            <a href="#QualificationsSection"  id="QualificationsNav">Qualificações</a>
          </li>
          <li>
            <a href="#ContactSection"  id="ContactNav">Contato</a>
          </li>
        </ul>
      </nav>
      <main id="mainID" className="blurEffect">
        <div id="firstCards">
          <div id="leftCard" className="backgroundCard">
            <p id="leftCardTitle" className="cardTitle">
              Desenvolvedor Júnior
            </p>
            <p id="leftCardText">
              Sou um desenvolvedor front-end júnior em busca de oportunidades
              para continuar aprimorando minhas habilidades e crescer
              profissionalmente.
            </p>
            <span id="socialContent">
              <a href="https://github.com/Monster1001" target="__blank">
                <img src={GitHubLogo} className="icon" alt="GitHub"/>
              </a>
              <a href="https://www.linkedin.com/in/maximilianomarqueslopes/" target="__blank">
                <img src={LinkedinLogo} className="icon" alt="Linkedin"/>
              </a>
              <a href="mailto:maxlopes365@gmail.com?subject=Vi seu portfólio!&body=Olá! Quero conectar com você!" target="__blank">
                <img src={EmailLogo} className="icon" alt="Gmail"/>
              </a>
            </span>
          </div>
          <div id="RightCard" className="backgroundCard">
            <img src={ImageCard} alt="Using a PC."/>
            <a className="btnShow" href="#ProjectsSection" id="myprojects">Meus projetos</a>
          </div>
        </div>
        <div id="HabilitiesSection">
          <h1 id="habilitiesTitle" className="cardTitle">Habilidades</h1>
          <p id="HabilitiesSubTitle">Nível técnico</p>
          <div id="areaCardHabilities">
            <div id="FrontEndCard" className="backgroundCard">
              <h1>Front-end</h1>
              <span>
                <img src={HtmlIcom} className="icon" alt="HTML"/>
                <img src={CssIcon} className="icon" alt="CSS"/>
                <img src={JSIcon} className="icon" alt="Javascript"/>
                <img src={ReactIcon} className="icon" alt="React"/>
                <img src={TsIcon} className="icon" alt="Typescript"/>
                <img src={StyleIcon} id="StyleIcon" className="icon" alt="Styled Components"/>
              </span>
            </div>
            <div id="BackEndCard" className="backgroundCard">
              <h1>Back-end</h1>
              <span>
                <img src={PhytonIcon} className="icon" alt="Phyton" />
                <img src={MySQLIcon} className="icon" alt="MySQL"  />
                <img src={JavaIcon} className="icon"  alt="Java" />
              </span>
            </div>
            <div id="FerramentasCard" className="backgroundCard">
              <h1 id="FerramentasCardTitle">Ferramentas</h1>
              <span>
                <img src={OfficeIcon} className="icon" alt="Office 365"/>
                <img src={CanvaIcon} className="icon" alt="Canva"/>
                <img src={GitIcon} className="icon" alt="Git"/>
                <img src={FigmaIcon} className="icon" id="figmaIcon" alt="Figma"/>
              </span>
            </div>
            <div id="IdiomasCard" className="backgroundCard">
              <h1 id="IdiomasCardtitle">Idiomas</h1>
              <span>
              <p  id="textLanguages">Português - C2<br/>
              Inglês - B2</p>
              </span>
            </div>
          </div>
        </div>
        <div id="ProjectsSection">
          <h1 className="cardTitle" id="projectTitle">Projetos</h1>
          <div id="areaToCards">
            <div className="ProjectCard backgroundCard">
              <img src={PokedexImage} alt="Pokedex prévia."/>
              <p>Pokedéx</p>
              <a className="btnShow" href="https://maximiliano-lopes.github.io/Pokedex/" target="__blank">Ver</a>
            </div>
            <div className="ProjectCard backgroundCard">
              <img src={EuroMilhoesImage} alt="EuroMilhões prévia."/>
              <p>Euro milhões</p>
              <a className="btnShow" href="https://maximiliano-lopes.github.io/euromilhoesReact/" target="__blank">Ver</a>
            </div>
            <div className="ProjectCard backgroundCard">
              <img src={InterpretadorImage} alt="Interpretador Morse prévia."/>
              <p id="morseTranslator">Tradutor Morse</p>
              <a className="btnShow" href="https://maximiliano-lopes.github.io/TradutorParaMorse/" target="__blank">Ver</a>
            </div>
            <div className="ProjectCard backgroundCard">
              <img src={SaexImage} alt="SAEX prévia."/>
              <p>SAEX</p>
              <a className="btnShow" href="https://www.saexaeronautica.com.br" target="__blank">Ver</a>
            </div>
            <div className="ProjectCard backgroundCard">
              <img src={JogoDaForcaImage} alt="Jogo da Forca prévia."/>
              <p id="hangman">Jogo da Forca</p>
              <a className="btnShow" href="https://maximiliano-lopes.github.io/jogoDaForcaApp/" target="__blank">Ver</a>
            </div>
          </div>
        </div>
        <div id="QualificationsSection">
          <div id="AcademicExp">
            <h1 className="cardTitle" id="AcademicExpTitle">Experiência Acadêmica</h1>
            <ol className="dottedBar">
              <li className="backgroundCard">
                <p>2019 - 2021</p>
                <p id="SchoolText">
                  Ensino médio
                  <br />
                  Escola Técnica Estadual Parobé
                </p>
              </li>
              <li className="backgroundCard">
                <p id="DevTheDevsDate">2021 Nov. - 2022 Maio </p>
                <p id="DevTheDevsText">
                  Dev the Dev's
                  <br />
                  Programação básica com Java.
                </p>
              </li>
              <li className="backgroundCard">
                <p id="ipMaiaDate">2022 Agosto - Atualmente</p>
                <p id="ipMaiaText">
                  Instituto Politécnico da Maia
                  <br />
                  Licenciatura em Tecnologia da Informação, web e multimédia.
                </p>
              </li>
              <li className="backgroundCard">
                <p id="OrangeTechDate">2022 Nov. - Dez.</p>
                <p id="OrangeTechText">
                  Orange Tech+
                  <br />
                  Bootcamp promovido pelo Inter e DIO.
                </p>
              </li>
            </ol>
          </div>
          <div id="ProfessionalExp" >
            <h1 className="cardTitle" id="ProfessionalExpTitle">Experiência Profissional</h1>
            <ol className="dottedBar">
              <li className="backgroundCard">
                <p>2018 - 2020</p>
                <p id="RefrigeracaoText">
                  Refrigeração Lopes <br />
                  Auxiliar técnico de lavadoras e refrigeração.
                </p>
              </li>
              <li className="backgroundCard">
                <p>2020 - 2022</p>
                <p id="DvoskinkulkesText">
                  Dvoskinkulkes Joalheria <br />
                  Auxiliar administrativo
                </p>
              </li>
            </ol>
          </div>
        </div>
        <div id="ContactSection">
          <h1 className="cardTitle" id="ContactTitle">Contatos</h1>
          <p id="ContactMeText">Converse comigo!</p>
          <span id="ContactContent" className="backgroundCard">
            <a href="https://github.com/Monster1001" target="__blank">
              <img src={GitHubLogo} className="icon" alt="Github"/>
            </a>
            <a href="https://www.linkedin.com/in/maximilianomarqueslopes/" target="__blank">
              <img src={LinkedinLogo} className="icon" alt="Linkedin"/>
            </a>
            <a href="mailto:maxlopes365@gmail.com?subject=Vi seu portfólio!&body=Olá! Quero conectar com você!" target="__blank">
              <img src={EmailLogo} className="icon" alt="Gmail"/>
            </a>
          </span>
        </div>
      </main>
      <footer>
        <h1>&#60; Maximiliano /&#62;</h1>
        <ul>
          <li>
            <a href="#AnchorNav" id="HomeLi">Início</a>
          </li>
          <li>
            <a href="#HabilitiesSection" id="Habilitiesli">Habilidades</a>
          </li>
          <li>
            <a href="#ProjectsSection" id="Projectsli">Projetos</a>
          </li>
          <li>
            <a href="#QualificationsSection" id="Qualificationsli">Qualificações</a>
          </li>
          <li>
            <a href="#ContactSection" id="Contactli">Contato</a>
          </li>
        </ul>
        <p id="footerNote">2023 - Maximiliano Lopes</p>
      </footer>
    </div>
  );
}

export default App;
