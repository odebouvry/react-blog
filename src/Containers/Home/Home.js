import './Home.css';
import Card from '../../Components/Card/Card';
export default function Home() {
  return (
    <div className="home">
      <h1 className="home-title">All articles</h1>
      <div className="container-cards">
        <Card>
          <h2>Hello card</h2>
        </Card>
      </div>
    </div>
  );
}
