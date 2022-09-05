import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
    
    this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
    componentDidMount() {
        fetch("https://localhost:7047/WeatherForecast/")
          .then(res => res.json())
          .then(
            (json) => {
              this.setState({
                isLoaded: true,
                items: json
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }


    render() { 
            const { error, isLoaded, items } = this.state;
            if (error) {
              return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
              return <div>Loading...</div>;
            } else {
              return (
                <table>
                  {items.map(item => (
                    <tr>
                    <td > {item.date} </td> <td> {item.temperatureC}C </td>  <td>{item.summary}</td>
                    
                    </tr>
                  ))}
                </table>
              );
            }
        }

}
 
export default Weather;