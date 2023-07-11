import React, {useState} from 'react';
import './App.css';
import { Button } from './components/button.component';
import {Input} from "./components/input.component";
import {Watch, Watches} from "./components/watches.component"


const builtInTimeZones = [
    'CET',
    'CST6CDT',
    'Cuba',
    'EET',
    'EST',
    'EST5EDT',
    'Egypt',
    'Eire',
    'GB',
    'GB-Eire',
    'GMT',
    'GMT+0',
    'GMT-0',
    'GMT0',
    'Greenwich',
    'HST',
    'Hongkong',
    'Iceland',
    'Iran',
    'Israel',
    'Jamaica',
    'Japan',
    'Kwajalein',
    'Libya',
    'MET',
    'MST',
    'MST7MDT',
    'NZ',
    'NZ-CHAT',
    'Navajo',
    'PRC',
    'PST8PDT',
    'Poland',
    'Portugal',
    'ROC',
    'ROK',
    'Singapore',
    'Turkey',
    'UCT',
    'UTC',
    'Universal',
    'W-SU',
    'WET',
    'Zulu',
];

type watch = {
    name: string,
    timeZone: string
}

function App() {

    const [watches, setWatches] = useState<watch[]>([])

    const [watch, setWatch] = useState<watch>({
        name: '',
        timeZone: ''
    })

    const handleClick = (e: React.ChangeEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setWatches([...watches, {name: watch.name, timeZone: watch.timeZone}])
        setWatch({
            name: '',
            timeZone: ''
        })
    }

    const handleDelete = (name: any) => {
        setWatches(watches.filter(watch => watch.name !== name))
    }

    return (
        <>
            <h5>Возможные часовые пояса {builtInTimeZones.join(", ")}</h5>
            <div className='input-group mb-3' style={{width: 500}}>
                <Input className='form-control' type='text' placeholder='Название' value={watch.name}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWatch({...watch, name: e.target.value})}/>
                <Input className='form-control' type='text' placeholder='Временная зона' value={watch.timeZone}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWatch({...watch, timeZone: e.target.value})}/>
                <Button className='btn btn-primary' onClick={handleClick} title='Добавить'/>
            </div >
            <Watches watches={watches} handleDelete={handleDelete}/>
        </>


  );
}

export default App;
