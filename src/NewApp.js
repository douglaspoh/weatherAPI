import {React,useEffect,useState,useRef} from 'react';
import './App.css';
import Day from './components/Day';
import Form from './components/Form';
import ToggleButton from './components/ToggleButton';

function NewApp() {
    const [input,setInput] = useState('');
    const [submittedInput,setSubmittedInput] = useState('');
    const [loaded,setLoaded] = useState(false);
    const [isCelsius,setIsCelsius] = useState(true);
    const [day1,setDay1] = useState([]);
    const [day2,setDay2] = useState([]);
    const [day3,setDay3] = useState([]);
    const [day4,setDay4] = useState([]);
    const [day5,setDay5] = useState([]);
    const [day6,setDay6] = useState([]);

    const getweather = (country) => {
        setLoaded(false)
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=49f902e57229b75a06f79750093b6526`, {method:'GET',mode:'cors'})
        .then(response=>{
            if(!response){
                throw new Error('Error, could not fetch data')
            }
            return response.json()
        })
        .then(data=>{
            const firstday = data.list.slice(0,4)
            setDay1( firstday.map(item=>({datetime:item.dt_txt,temp:item.main.temp,icon:item.weather[0].icon})) )
            const secondday = data.list.slice(5,12)
            setDay2( secondday.map(item=>({datetime:item.dt_txt,temp:item.main.temp,icon:item.weather[0].icon})) )
            const thirdday = data.list.slice(13,20)
            setDay3( thirdday.map(item=>({datetime:item.dt_txt,temp:item.main.temp,icon:item.weather[0].icon})) )
            const fourthday = data.list.slice(21,28)
            setDay4( fourthday.map(item=>({datetime:item.dt_txt,temp:item.main.temp,icon:item.weather[0].icon})) )
            const fifthday = data.list.slice(29,36)
            setDay5( fifthday.map(item=>({datetime:item.dt_txt,temp:item.main.temp,icon:item.weather[0].icon})) )
            const sixthday = data.list.slice(37,40)
            setDay6( sixthday.map(item=>({datetime:item.dt_txt,temp:item.main.temp,icon:item.weather[0].icon})) )
            setLoaded(true)
            console.log(firstday)
        })
        .catch(err=>{
            alert('Error: Enter a valid country name')
            console.log(err)
        });
    }

    const initialRender = useRef(true)
    useEffect(()=>{
        if(initialRender.current){
            initialRender.current=false
        } else{
          getweather(submittedInput)
        }
        
    },[submittedInput])
    
    const handleinput = (e) => {
        setInput(e.target.value)
    }

    const submitform = (e) => {
        e.preventDefault();
        setSubmittedInput(input)
        setInput('')
    }

    return (
    <div>
        <div className='header'>
            <div>
            <div className='title'>5-Day Weather Forecast</div> 
            <div className='country'>{loaded? `${submittedInput}`:null}</div>
            </div>

            <div className='header-right'>
            <div className='searchbar'><Form submitform={submitform} handleform={handleinput} input={input}/></div>
            <div className='togglebutton'><ToggleButton isCelsius={isCelsius} setIsCelsius={setIsCelsius}/></div>
            </div>
        </div>
        
        <div className = 'main'>
            {loaded? 
            <>
            <div className='day1'> <Day day={day1} isCelsius={isCelsius}/> </div>
            <div className='day2'> <Day day={day2} isCelsius={isCelsius}/> </div>
            <div className='day3'> <Day day={day3} isCelsius={isCelsius}/> </div>
            <div className='day4'> <Day day={day4} isCelsius={isCelsius}/> </div>
            <div className='day5'> <Day day={day5} isCelsius={isCelsius}/> </div>
            <div className='day6'> <Day day={day6} isCelsius={isCelsius}/> </div>
            </> : 
            null}
        </div>

    </div>
    )
}


export default NewApp

