import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import OfertaDetail from './components/oferta/ofertaDetail/OfertaDetail';
import Footer from './components/shared/footer/Footer';
import KangarooNavbar from './components/shared/navbar/KangarooNavbar';
import { ofertaDetail } from './tempData/ofertaDetailData';

function App() {
  return (
    <div className="App">
      <main>
        {/* <OfertaDetail info={ofertaDetail}/> */}
      </main>
      <KangarooNavbar/>
      <div className='body--test'>
        Ullamco ullamco ex id non ipsum nulla aliqua ipsum minim sint fugiat. Proident aliquip ut minim elit sint magna aliquip sunt ea sint non. Do laboris aliquip sit reprehenderit consequat in. Sunt eu nostrud nulla aute tempor deserunt eu dolor qui velit est nulla.

Duis anim velit duis in qui sint duis deserunt do deserunt dolore enim veniam nostrud. Voluptate reprehenderit laboris quis nulla non consequat non ad minim in nulla tempor minim ipsum. Aliqua est officia ad incididunt excepteur mollit incididunt consequat incididunt. Eu aliqua tempor aliqua dolore magna laboris ex excepteur pariatur quis commodo.

Elit incididunt irure Lorem ut ullamco esse nostrud in et ea deserunt ex ad. Quis occaecat sit Lorem ad irure ipsum mollit amet non reprehenderit ipsum anim aliqua consectetur. Labore Lorem aliquip dolor magna tempor ipsum sunt reprehenderit. Velit ex Lorem ex tempor ex. Occaecat deserunt do incididunt sit in incididunt reprehenderit nulla sunt.

Eu laboris nostrud nulla amet fugiat qui incididunt id consectetur Lorem irure. Nostrud labore ex ex consequat dolore excepteur. Eiusmod nulla excepteur mollit dolor voluptate duis in consequat Lorem. Ullamco id ad reprehenderit qui qui veniam aute.

Quis aliquip sunt occaecat quis nostrud aliquip veniam ex elit nisi laboris. Esse veniam ad minim aute amet. Non dolor Lorem labore occaecat officia aliquip aliquip quis aliqua. Qui velit nisi fugiat officia veniam in consequat. Aliqua et proident ullamco exercitation voluptate consectetur eu cupidatat tempor commodo nisi adipisicing excepteur mollit.

Non in velit officia reprehenderit duis voluptate eu non reprehenderit anim officia voluptate dolor veniam. Amet ea eu ullamco ad est dolor nulla cillum laboris magna. Culpa ipsum do ipsum velit. Commodo magna officia laborum elit non nisi et velit pariatur sunt ea cillum eiusmod.

Esse elit culpa do anim labore enim eiusmod fugiat commodo cillum reprehenderit quis eiusmod ut. Aliquip ullamco incididunt incididunt in dolore ipsum minim fugiat magna elit. Voluptate dolore esse qui nostrud duis amet enim sint tempor magna et.

Proident dolore consequat do velit et nostrud irure ad excepteur elit irure velit. Cupidatat eu labore eiusmod ad dolore excepteur. Consequat sunt id sit culpa aliqua cupidatat ut ipsum. Esse dolore deserunt eiusmod laborum occaecat. Officia sunt dolor laboris aliquip.

Nostrud sit minim sint eiusmod adipisicing. Anim in esse incididunt commodo est pariatur voluptate. Cillum non magna excepteur eu eiusmod est amet duis laborum culpa proident qui cupidatat officia. Duis commodo commodo magna voluptate culpa ullamco officia eu quis ullamco. Et sint sint nisi do ad adipisicing laborum duis Lorem sunt do. Consequat excepteur ex laboris nulla Lorem cupidatat nostrud ad qui officia qui.

Laborum qui cupidatat sint officia mollit ea. Laborum elit incididunt non laboris aliquip officia incididunt voluptate in. Reprehenderit excepteur fugiat do enim nostrud et minim. Sit ea sint veniam nisi adipisicing. Nostrud fugiat in culpa duis id voluptate cillum minim aute ullamco cillum aliqua consequat.
      </div>
      <Footer/>
    </div>
  );
}

export default App;
