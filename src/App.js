import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Footer from './components/shared/footer/Footer';
import KangarooNavbar from './components/shared/navbar/KangarooNavbar';
import ReseniaCreate from './components/resenia/reseniaCreate/ReseniaCreate';
import ReseniaList from './components/resenia/reseniaList/ReseniaList';
import { reseniaListData } from './tempData/reseniaData';

function App() {
  return (
    <div className="App">
      <KangarooNavbar/>
      <div className='body--test'>
        {/*<ReseniaCreate/>*/}
        <ReseniaList info={reseniaListData}/>
      </div>
      {/*<Footer/>*/}
    </div>
  );
}

export default App;
