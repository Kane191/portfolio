import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ContactMailIcon from '@material-ui/icons/ContactMail';
// import ViewComfyAltIcon from '@material-ui/icons/ViewComfyAlt';
// import ViewCompactAltIcon from '@material-ui/icons/ViewCompactAlt';
// import ViewCompactAltIcon from '@mui/icons-material/ViewCompactAlt';
import AppsIcon from '@material-ui/icons/Apps';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

function App() {
  return (
    <div className="App">
      <div className="hero row">
        <div className="col-6 header">PORTFOLIO</div>
        <div className="col-6 floating-boxes">
          <div><ContactMailIcon/></div>
          <div><AppsIcon/></div>
          <div><SportsEsportsIcon/></div>
        </div>
      </div>

      <div class="sun"> 
      </div>

    </div>
  );
}

export default App;
