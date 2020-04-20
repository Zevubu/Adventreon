import {createGlobalStyle} from 'styled-components';

import GlacialIndiffrenceE from './GlacialIndifference-Regular.eot';
import GlacialIndiffrence from './GlacialIndifference-Regular.woff';
import GlacialIndiffrence2 from './GlacialIndifference-Regular.woff2';

import GlacialIndiffrenceBoldE from './GlacialIndifference-Bold.eot';
import GlacialIndiffrenceBold from './GlacialIndifference-Bold.woff';
import GlacialIndiffrenceBold2 from './GlacialIndifference-Bold.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'glacial indiffrence';
        src: local('glacial indiffrence'), local('GlacialIndiffrence'),
        url(${GlacialIndiffrence2}) format('woff2'),
        url(${GlacialIndiffrence}) format('woff'),
        url(${GlacialIndiffrenceBold2}) format('woff2'),
        url(${GlacialIndiffrenceBold}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;