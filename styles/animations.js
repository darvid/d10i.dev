import { keyframes } from '@emotion/core';

export const blinkVisibility = keyframes`
  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
`;

export const flicker = keyframes`
  0% {
    opacity: 0.27861;
  }
  5% {
    opacity: 0.34769;
  }
  10% {
    opacity: 0.23604;
  }
  15% {
    opacity: 0.90626;
  }
  20% {
    opacity: 0.18128;
  }
  25% {
    opacity: 0.83891;
  }
  30% {
    opacity: 0.65583;
  }
  35% {
    opacity: 0.67807;
  }
  40% {
    opacity: 0.26559;
  }
  45% {
    opacity: 0.84693;
  }
  50% {
    opacity: 0.96019;
  }
  55% {
    opacity: 0.08594;
  }
  60% {
    opacity: 0.20313;
  }
  65% {
    opacity: 0.71988;
  }
  70% {
    opacity: 0.53455;
  }
  75% {
    opacity: 0.37288;
  }
  80% {
    opacity: 0.71428;
  }
  85% {
    opacity: 0.70419;
  }
  90% {
    opacity: 0.7003;
  }
  95% {
    opacity: 0.36108;
  }
  100% {
    opacity: 0.24387;
  }
`;

export const textShadow = ({ tfo1, tfo2, bs1, bs2 }) => keyframes`
  0% {
    text-shadow: 0.4389924193300864px 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -0.4389924193300864px 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  5% {
    text-shadow: 2.7928974010788217px 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -2.7928974010788217px 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  10% {
    text-shadow: 0.02956275843481219px 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -0.02956275843481219px 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  15% {
    text-shadow: 0.40218538552878136px 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -0.40218538552878136px 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  20% {
    text-shadow: 3.4794037899852017px 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -3.4794037899852017px 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  25% {
    text-shadow: 1.6125630401149584px 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -1.6125630401149584px 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  30% {
    text-shadow: 0.7015590085143956px 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -0.7015590085143956px 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  35% {
    text-shadow: 3.89691404765035${bs1} 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -3.89691404765035${bs1} 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  40% {
    text-shadow: 3.870905614848819px 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -3.870905614848819px 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  45% {
    text-shadow: 2.231056963361899px 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -2.231056963361899px 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  50% {
    text-shadow: 0.08084290417898504px 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -0.08084290417898504px 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  55% {
    text-shadow: 2.375846106742754${bs2} 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -2.375846106742754${bs2} 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  60% {
    text-shadow: 2.202193051050636px 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -2.202193051050636px 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  65% {
    text-shadow: 2.8638780614874975px 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -2.8638780614874975px 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  70% {
    text-shadow: 0.48874025155497314px 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -0.48874025155497314px 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  75% {
    text-shadow: 1.8948491305757957px 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -1.8948491305757957px 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  80% {
    text-shadow: 0.0833037308038857px 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -0.0833037308038857px 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  85% {
    text-shadow: 0.09769827255241735px 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -0.09769827255241735px 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  90% {
    text-shadow: 3.443339761481782px 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -3.443339761481782px 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  95% {
    text-shadow: 2.1841838852799786px 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -2.1841838852799786px 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
  100% {
    text-shadow: 2.620876447383251${bs2} 0 ${bs1} rgba(0, 30, 255, ${tfo1}),
      -2.620876447383251${bs2} 0 ${bs1} rgba(255, 0, 80, ${tfo2}), 0 0 ${bs2};
  }
`;
