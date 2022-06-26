// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)

import {Rockets} from "./components/rockets/Rockets";

function App() {
    return (
        <div>
          <Rockets/>
        </div>
    );
}

export default App;