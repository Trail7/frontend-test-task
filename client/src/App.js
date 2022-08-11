import './App.css';
import {io} from 'socket.io-client'
import {useSelector} from "react-redux";

import {updateScores} from "./store/hourses/thunk";
import store from "./store";
import {Horse} from "./components/horse/horse";


function App() {
    function getData() {
        const socket = io.connect('http://localhost:3002');
        socket.emit('start');
        socket.on('ticker', function (response) {
            const res = Array.isArray(response) ? response : [response];
            store.dispatch(updateScores(res))
        });
    }

    const state = useSelector((state) => state.scoresReducer)

    return (
        <>
            <button className='btn btn-primary m-4' onClick={() => getData()}>start</button>
            {state.map((item, index) => {
                return <Horse key={index} name={item.name} distance={item.distance}/>
            })}
        </>
    );
}

export default App;
