import React from 'react';
import ExploreMarkets from './ExploreMarkets';
import Nordic from './Nordic';
import Payment from './Payment';
import TakeControl from './TakeControl';
import TradeDemo from './TradeDemo';
import TraderGuide from './TraderGuide';
import TradeWithTrust from './TradeWithTrust';
import Trading from './Trading';
import './index.scss'

const TradeContainer = () => {
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

export default TradeContainer;