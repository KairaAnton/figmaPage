import React from 'react';
import './index.scss'
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
        </main>
    );
}

export default TradeContainer;