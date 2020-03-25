import React from 'react';
import { ClassNameInterface } from '../Layout';

interface WaveInterface extends ClassNameInterface {
    color: string;
}

interface CommonWaveInterface extends WaveInterface {
    data: string;
}

const CommonWave: React.FC<CommonWaveInterface> = ({className, data, color}) => (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} viewBox='0 0 1440 320'>
        <path
            className={`fill-${color}`}
            fillOpacity='1'
            d={data}/>
    </svg>
)

const Wave: React.FC<WaveInterface> = props => (
    <CommonWave
        data='M0,192L48,192C96,192,192,192,288,213.3C384,235,480,277,576,261.3C672,245,768,171,864,144C960,117,1056,139,1152,128C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        {...props}
    />
);

export const ReverseWave: React.FC<WaveInterface> = props => (
    <CommonWave
        data='M0,192L48,192C96,192,192,192,288,213.3C384,235,480,277,576,261.3C672,245,768,171,864,144C960,117,1056,139,1152,128C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
        {...props}
    />
);

export const WavyHeader: React.FC = ({children}) => (
    <div className='position-relative'>
        <div className='row m-0 pt-5'>
            {children}
        </div>
        <Wave color='light' className='bg-transparent bottom-0'/>
    </div>
);
