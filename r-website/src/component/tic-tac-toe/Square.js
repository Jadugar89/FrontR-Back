import '../../css/square.css';
function Square(props) {

      let styleforsquare ='square empty';
      if(props.value==='X')
      {
            styleforsquare ='square cross';
      }
      if(props.value ==='O')
      {
            styleforsquare ='square circle';
      }
      return (
            <button className={styleforsquare}
            onClick={() => props.onClick()}>
            {props.value}
          </button>
          );   
}
 
export default Square;