import './App.css';
import AtriCard from './components/AtriCard';
import InfoCard from './components/InfoCard/';
import PointsCard from './components/PointsCard';

function App() {

  const racas = [
    {
      id: "rac_01",
      nome: "Humano"
    },
    {
      id: "rac_02",
      nome: "Anão"
    },
    {
      id: "rac_03",
      nome: "Dahllan"
    },
    {
      id: "rac_04",
      nome: "Elfo"
    },
    {
      id: "rac_05",
      nome: "Goblin"
    },
    {
      id: "rac_06",
      nome: "Lefou"
    },
    {
      id: "rac_07",
      nome: "Minotauro"
    },
    {
      id: "rac_08",
      nome: "Qareen"
    },
    {
      id: "rac_09",
      nome: "Golem"
    },
    {
      id: "rac_10",
      nome: "Hynne"
    },
    {
      id: "rac_11",
      nome: "Kliren"
    },
    {
      id: "rac_12",
      nome: "Medusa"
    },
    {
      id: "rac_13",
      nome: "Osteon"
    },
    {
      id: "rac_14",
      nome: "Sereia/Tritão"
    },
    {
      id: "rac_15",
      nome: "Sílfide"
    },
    {
      id: "rac_16",
      nome: "Suraggel (Aggelus)"
    },
    {
      id: "rac_17",
      nome: "Suraggel (Sulfure)"
    },
    {
      id: "rac_18",
      nome: "Trog"
    }
  ]

  const classes = [
    {
      id: "cla_01",
      nome: "Arcanista"
    },
    {
      id: "cla_02",
      nome: "Bárbaro"
    },
    {
      id: "cla_03",
      nome: "Bardo"
    },
    {
      id: "cla_04",
      nome: "Bucaneiro"
    },
    {
      id: "cla_05",
      nome: "Caçador"
    },
    {
      id: "cla_06",
      nome: "Cavaleiro"
    },
    {
      id: "cla_07",
      nome: "Clérigo"
    },
    {
      id: "cla_08",
      nome: "Druida"
    },
    {
      id: "cla_09",
      nome: "Guerreiro"
    },
    {
      id: "cla_10",
      nome: "Inventor"
    },
    {
      id: "cla_11",
      nome: "Ladino"
    },
    {
      id: "cla_12",
      nome: "Lutador"
    },
    {
      id: "cla_13",
      nome: "Nobre"
    },
    {
      id: "cla_14",
      nome: "Paladino"
    }
  ]

  const origens = [
    {
      id: "ori_01",
      nome: "Acólito"
    },
    {
      id: "ori_02",
      nome: "Amigo dos Animais"
    },
    {
      id: "ori_03",
      nome: "Amnéstico"
    },
    {
      id: "ori_04",
      nome: "Aristocrata"
    },
    {
      id: "ori_05",
      nome: "Artesão"
    },
    {
      id: "ori_06",
      nome: "Artista"
    },
    {
      id: "ori_07",
      nome: "Assitente de Lab"
    },
    {
      id: "ori_08",
      nome: "Batedor"
    },
    {
      id: "ori_09",
      nome: "Capanga"
    },
    {
      id: "ori_10",
      nome: "Charlatão"
    },
    {
      id: "ori_11",
      nome: "Circense"
    },
    {
      id: "ori_12",
      nome: "Criminoso"
    },
    {
      id: "ori_13",
      nome: "Curandeiro"
    },
    {
      id: "ori_14",
      nome: "Eremita"
    },
    {
      id: "ori_15",
      nome: "Escravo"
    },
    {
      id: "ori_16",
      nome: "Estudioso"
    },
    {
      id: "ori_17",
      nome: "Fazendeiro"
    },
    {
      id: "ori_18",
      nome: "Forasteiro"
    },
    {
      id: "ori_19",
      nome: "Gladiador"
    },
    {
      id: "ori_20",
      nome: "Guarda"
    },
    {
      id: "ori_21",
      nome: "Herdeiro"
    },
    {
      id: "ori_22",
      nome: "Herói Camponês"
    },
    {
      id: "ori_23",
      nome: "Marujo"
    },
    {
      id: "ori_24",
      nome: "Mateiro"
    },
    {
      id: "ori_25",
      nome: "Membro de Guilda"
    },
    {
      id: "ori_26",
      nome: "Mercador"
    },
    {
      id: "ori_27",
      nome: "Minerador"
    },
    {
      id: "ori_28",
      nome: "Nômade"
    },
    {
      id: "ori_29",
      nome: "Pivete"
    },
    {
      id: "ori_30",
      nome: "Refugiado"
    },
    {
      id: "ori_31",
      nome: "Seguidor"
    },
    {
      id: "ori_32",
      nome: "Selvagem"
    },
    {
      id: "ori_33",
      nome: "Soldado"
    },
    {
      id: "ori_34",
      nome: "Taverneiro"
    },
    {
      id: "ori_35",
      nome: "Trabalhador"
    },
  ]

  const divindades = [
    {
      id: "div_01",
      nome: "Aharadak"
    },
    {
      id: "div_02",
      nome: "Allihanna"
    },
    {
      id: "div_03",
      nome: "Arsenal"
    },
    {
      id: "div_04",
      nome: "Azgher"
    },
    {
      id: "div_05",
      nome: "Hyninn"
    },
    {
      id: "div_06",
      nome: "Kallyadranoch"
    },
    {
      id: "div_07",
      nome: "Khalmyr"
    },
    {
      id: "div_08",
      nome: "Lena"
    },
    {
      id: "div_09",
      nome: "Lin-Wu"
    },
    {
      id: "div_10",
      nome: "Marah"
    },
    {
      id: "div_11",
      nome: "Megalokk"
    },
    {
      id: "div_12",
      nome: "Nimb"
    },
    {
      id: "div_13",
      nome: "Oceano"
    },
    {
      id: "div_14",
      nome: "Sszzaas"
    },
    {
      id: "div_15",
      nome: "Tanna-Toh"
    },
    {
      id: "div_16",
      nome: "Tenebra"
    },
    {
      id: "div_17",
      nome: "Thwor"
    },
    {
      id: "div_18",
      nome: "Thyatis"
    },
    {
      id: "div_19",
      nome: "Valkaria"
    },
    {
      id: "div_20",
      nome: "Wynna"
    },
  ]

  return (
    <div className="App">
      <InfoCard
        racas={racas}
        classes={classes}
        origens={origens}
        divindades={divindades} 
      />
      <AtriCard />
      <PointsCard />
    </div>
  );
}

export default App;
