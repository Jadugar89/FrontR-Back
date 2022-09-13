import Greeting from '../component/Gretting';
import ReadUser from '../component/readUsers';


function Home() {
    return (
        <div className="home">
            <Greeting name="Somebody"/>
            <ReadUser></ReadUser>
        </div>
);
}
export default Home;