import React from 'react'

function Day(props) {
    let {day,isCelsius} = props
    day = day.map(item=>({
                        date:item.datetime.split(' ')[0],
                        time:item.datetime.split(' ')[1].slice(0,-3),
                        temp:item.temp,
                        icon:item.icon
                        }))
    const date = day[0].date
    const monthdict = {'01':'Jan','02':'Feb','03':'Mar','04':'Apr','05':'May','06':'Jun','07':'Jul','08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}
    const formatteddate = `${date.slice(-2)} ${monthdict[date.slice(5,7)]}`

    return (
        <>
        <div className='date'> 
        {new Date().getDate().toString() === date.slice(-2)? 'Today': formatteddate} 
        </div>
        
        {isCelsius?
        <ul>
            {day.map((item) => {
            return(
            <li key={day.indexOf(item)}>{item.time} - {Math.round(item.temp-273.15)}°C
            <img src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`} height='40px' alt='Weather Icon'/> </li>
            )})
            }
        </ul> :
        <ul>
            {day.map((item) => {
            return(
            <li key={day.indexOf(item)}>{item.time} - {Math.round((item.temp-273.15)*9/5+32)}°F
            <img src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`} height='40px' alt='Weather Icon'/> </li>
            )})
            }
        </ul>
        }
        </>
    )
}

export default Day
