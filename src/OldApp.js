// import React, {Component} from 'react';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       city:'',
//       weather:''
//     }
//   }

//   componentDidMount() {
//     this.fetchdata();
//   }

//   fetchdata = () => {
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=49f902e57229b75a06f79750093b6526', {mode:'cors'})
//     .then(response => {
//       if(!response.ok){
//         throw new Error('Error. Could not fetch data')     
//       } 
//       return response.json()
//     })
//     .then(weatherdata => {
//       this.setState({
//         city: weatherdata.name,
//         weather: weatherdata.main.temp
//       })
//     })
//     .catch(err=>{
//       console.log(err)
//     })
//   }

//   render() {
//     return (
//       <div> City: {this.state.city} <br></br> Temperature: {this.state.weather} </div>
//     )
//   }

// };


// export default App;

