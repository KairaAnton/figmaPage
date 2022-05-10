import React from 'react';
import ExploreMarkets from './ExploreMarkets';
import './index.scss'
import Payment from './Payment';
import TakeControl from './TakeControl';
import TradeDemo from './TradeDemo';
import TradeWithTrust from './TradeWithTrust';

const TradeContainer = () => {
    return (
        // <div>
        //     <TradeDemo />
        //     <TradeWithTrust />
        //
        // </div>

        <main className='main' >
            <TradeDemo />
            <TradeWithTrust />
            <Payment />
            <TakeControl />
            <ExploreMarkets />
        </main>
    );
}

export default TradeContainer;