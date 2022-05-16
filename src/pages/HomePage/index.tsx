import './index.scss';
import ExploreMarkets from '../../components/TradeContainer/ExploreMarkets';
import Nordic from '../../components/TradeContainer/Nordic';
import Payment from '../../components/TradeContainer/Payment';
import TakeControl from '../../components/TradeContainer/TakeControl';
import TradeDemo from '../../components/TradeContainer/TradeDemo';
import TraderGuide from '../../components/TradeContainer/TraderGuide';
import TradeWithTrust from '../../components/TradeContainer/TradeWithTrust';
import Trading from '../../components/TradeContainer/Trading';


const HomePage = () => {
    return (
        <main className='main' >
            <TradeDemo />
            <TradeWithTrust />
            <Payment />
            <TakeControl />
            <ExploreMarkets />
            <TraderGuide />
            <Nordic />
            <Trading />
        </main>
    );
}

export default HomePage;