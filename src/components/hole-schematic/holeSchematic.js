import React from "react";
import Pipe from "./pipe/pipe";


const HoleSchematic = () => {
    const offsetY = 100;
    const totalZoneWidth = 3000;
    const middleOfShapeX = totalZoneWidth/2;
    const totalDepth = 2000;
    const holesData = [
        { depth: 300, inch: 36 },
        { depth: 200, inch: 24 },
        { depth: 300, inch: 17 },
        { depth: 600, inch: 12 }
    ];


    return (
//         <svg width="927" height="1929" viewBox="0 0 927 1929" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g filter="url(#filter0_ii_2097_17734)">
// <path d="M60.0703 231.922C60.0703 176.693 104.842 131.922 160.07 131.922H752.42C807.648 131.922 852.42 176.693 852.42 231.922V330.765C852.42 385.993 807.648 430.765 752.42 430.765H160.07C104.842 430.765 60.0703 385.993 60.0703 330.765V231.922Z" fill="url(#paint0_linear_2097_17734)"/>
// </g>
// <g filter="url(#filter1_ii_2097_17734)">
// <rect x="147.078" y="371.219" width="611.093" height="419.042" fill="url(#paint1_linear_2097_17734)"/>
// </g>
// <rect x="232.008" y="606.105" width="437.087" height="773.022" fill="url(#paint2_linear_2097_17734)"/>
// <g filter="url(#filter2_ii_2097_17734)">
// <path fill-rule="evenodd" clip-rule="evenodd" d="M621.973 989.064H286.773V1907.45H286.994C289.764 1919.02 363.791 1928.29 454.706 1928.29C547.374 1928.29 622.497 1918.66 622.497 1906.78C622.497 1906.21 622.32 1905.64 621.973 1905.07V989.064Z" fill="url(#paint3_linear_2097_17734)"/>
// </g>
// <g filter="url(#filter3_ii_2097_17734)">
// <path d="M832.621 203.458C611.817 138.734 334.063 142.344 78.9958 203.601L59.9609 180.485C410.963 56.5847 734.112 128.86 851.81 180.485L832.621 203.458Z" fill="url(#paint4_linear_2097_17734)"/>
// </g>
// <g filter="url(#filter4_i_2097_17734)">
// <path d="M742.64 418.087C507.524 385.508 385.306 385.508 161.584 418.087L131.547 385.508C390.485 342.55 597.635 337.036 774.748 385.508L742.64 418.087Z" fill="url(#paint5_linear_2097_17734)"/>
// <path d="M663.413 652.281C526.56 633.352 469.766 624.792 250.048 652.281L204.391 617.24C379.844 580.371 574.684 586.041 694.694 627.643L663.413 652.281Z" fill="url(#paint6_linear_2097_17734)"/>
// <path d="M603.105 1017.3C506.466 1007.99 461.173 1002.27 306.019 1015.78L278.656 996.596C402.552 978.474 544.048 981.203 628.793 1001.65L603.105 1017.3Z" fill="url(#paint7_linear_2097_17734)"/>
// </g>
// <path d="M0 431.87V100.894C269.295 -42.309 700.168 -24.6649 926.997 100.894V431.87H852.956V179.877C612.922 100.894 308.365 100.894 59.233 179.877V431.87H0Z" fill="url(#paint8_radial_2097_17734)"/>
// <path d="M81.9688 790.95V306.933C394.607 243.485 491.299 235.972 832.944 306.933V790.95H772.962V385.88C510.637 355.805 413.945 359.564 129.954 385.88V790.95H81.9688Z" fill="url(#paint9_radial_2097_17734)"/>
// <path d="M237.889 1379.13L162.609 1379.13V789.159L190.432 789.159V503.527C386.864 468.279 457.708 471.23 718.543 503.527V788.632H740.558V1379.13H676.362V643.479C480.249 614.771 439.217 618.359 237.889 643.479V1379.13Z" fill="url(#paint10_radial_2097_17734)"/>
// <path d="M297.22 1769.3H244.438V1376.92H273.742V816.162C410.408 779.753 486.465 786.113 641.172 816.162V1378.77H663.418V1769.3H611.825V1009.43C467.967 991.546 431.111 993.566 297.22 1009.43L297.22 1769.3Z" fill="url(#paint11_radial_2097_17734)"/>
// <path d="M79.9475 201.395L59.9609 179.34V428.559H79.9475V201.395Z" fill="#D9D9D9"/>
// <path d="M832.771 203.603L852.758 181.548V430.767H832.771V203.603Z" fill="#D9D9D9"/>
// <path d="M162.613 417.449L129.469 385.714V791.366H162.613V417.449Z" fill="#C3BBBB"/>
// <path d="M741.598 417.447L774.742 386.722V791.364H741.598V417.447Z" fill="#C3BBBB"/>
// <path d="M663.418 652.785L676.82 642.688V1379.28H663.418V652.785Z" fill="#C4BBBB"/>
// <path d="M251.293 652.279L237.891 643.696V1378.77H251.293V652.279Z" fill="#C4BBBB"/>
// <path d="M663.418 652.785L676.82 642.688V1379.28H663.418V652.785Z" fill="#C4BBBB"/>
// <path d="M306.021 1016.51L297.086 1009.72V1769.03H306.021V1016.51Z" fill="#C4BBBB"/>
// <path d="M603.104 1016.51L612.039 1009.72V1769.03H603.104V1016.51Z" fill="#C4BBBB"/>
// <defs>
// <filter id="filter0_ii_2097_17734" x="55.0703" y="126.922" width="802.352" height="328.843" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dx="5" dy="25"/>
// <feGaussianBlur stdDeviation="25"/>
// <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
// <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2097_17734"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dx="-5" dy="-5"/>
// <feGaussianBlur stdDeviation="25"/>
// <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
// <feBlend mode="normal" in2="effect1_innerShadow_2097_17734" result="effect2_innerShadow_2097_17734"/>
// </filter>
// <filter id="filter1_ii_2097_17734" x="142.078" y="366.219" width="621.094" height="449.042" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dx="5" dy="25"/>
// <feGaussianBlur stdDeviation="25"/>
// <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
// <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2097_17734"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dx="-5" dy="-5"/>
// <feGaussianBlur stdDeviation="25"/>
// <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
// <feBlend mode="normal" in2="effect1_innerShadow_2097_17734" result="effect2_innerShadow_2097_17734"/>
// </filter>
// <filter id="filter2_ii_2097_17734" x="281.773" y="984.064" width="345.727" height="969.222" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dx="5" dy="25"/>
// <feGaussianBlur stdDeviation="25"/>
// <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
// <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2097_17734"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dx="-5" dy="-5"/>
// <feGaussianBlur stdDeviation="25"/>
// <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
// <feBlend mode="normal" in2="effect1_innerShadow_2097_17734" result="effect2_innerShadow_2097_17734"/>
// </filter>
// <filter id="filter3_ii_2097_17734" x="54.9609" y="107.073" width="801.852" height="101.527" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dx="5" dy="5"/>
// <feGaussianBlur stdDeviation="25"/>
// <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
// <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2097_17734"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dx="-5" dy="-5"/>
// <feGaussianBlur stdDeviation="25"/>
// <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
// <feBlend mode="normal" in2="effect1_innerShadow_2097_17734" result="effect2_innerShadow_2097_17734"/>
// </filter>
// <filter id="filter4_i_2097_17734" x="131.547" y="351.19" width="648.203" height="671.104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dx="5" dy="5"/>
// <feGaussianBlur stdDeviation="25"/>
// <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
// <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2097_17734"/>
// </filter>
// <linearGradient id="paint0_linear_2097_17734" x1="60.0703" y1="211.369" x2="849.657" y2="258.693" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6F85A6"/>
// <stop offset="0.2" stop-color="#97AFD4"/>
// <stop offset="0.286863" stop-color="#BACDEA"/>
// <stop offset="0.461" stop-color="#AABFE0"/>
// <stop offset="0.526" stop-color="#7D93B6"/>
// <stop offset="0.700287" stop-color="#BACDEA"/>
// <stop offset="0.841" stop-color="#97AFD4"/>
// <stop offset="1" stop-color="#6F85A6"/>
// </linearGradient>
// <linearGradient id="paint1_linear_2097_17734" x1="147.078" y1="482.62" x2="757.564" y2="502.746" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6F85A6"/>
// <stop offset="0.2" stop-color="#97AFD4"/>
// <stop offset="0.286863" stop-color="#BACDEA"/>
// <stop offset="0.505" stop-color="#AABFE0"/>
// <stop offset="0.700287" stop-color="#BACDEA"/>
// <stop offset="0.841" stop-color="#97AFD4"/>
// <stop offset="1" stop-color="#6F85A6"/>
// </linearGradient>
// <linearGradient id="paint2_linear_2097_17734" x1="232.008" y1="811.612" x2="669.064" y2="817.199" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6F85A6"/>
// <stop offset="0.131" stop-color="#97AFD4"/>
// <stop offset="0.286863" stop-color="#BACDEA"/>
// <stop offset="0.431" stop-color="#AABFE0"/>
// <stop offset="0.541" stop-color="#798FB2"/>
// <stop offset="0.700287" stop-color="#BACDEA"/>
// <stop offset="0.841" stop-color="#97AFD4"/>
// <stop offset="1" stop-color="#6F85A6"/>
// </linearGradient>
// <linearGradient id="paint3_linear_2097_17734" x1="289.861" y1="1233.1" x2="625.075" y2="1235.86" gradientUnits="userSpaceOnUse">
// <stop stop-color="#6F85A6"/>
// <stop offset="0.2" stop-color="#97AFD4"/>
// <stop offset="0.286863" stop-color="#BACDEA"/>
// <stop offset="0.396" stop-color="#AABFE0"/>
// <stop offset="0.561514" stop-color="#7A91B3"/>
// <stop offset="0.700287" stop-color="#BACDEA"/>
// <stop offset="0.841" stop-color="#97AFD4"/>
// <stop offset="1" stop-color="#6F85A6"/>
// </linearGradient>
// <linearGradient id="paint4_linear_2097_17734" x1="120.872" y1="173.55" x2="786.156" y2="168.847" gradientUnits="userSpaceOnUse">
// <stop stop-color="#656565"/>
// <stop offset="0.489729" stop-color="#D9D9D9"/>
// <stop offset="1" stop-color="#656565"/>
// </linearGradient>
// <linearGradient id="paint5_linear_2097_17734" x1="181.024" y1="375.896" x2="721.436" y2="373.657" gradientUnits="userSpaceOnUse">
// <stop stop-color="#656565"/>
// <stop offset="0.489729" stop-color="#D9D9D9"/>
// <stop offset="1" stop-color="#656565"/>
// </linearGradient>
// <linearGradient id="paint6_linear_2097_17734" x1="271.64" y1="616.544" x2="637.819" y2="615.346" gradientUnits="userSpaceOnUse">
// <stop stop-color="#656565"/>
// <stop offset="0.489729" stop-color="#D9D9D9"/>
// <stop offset="1" stop-color="#656565"/>
// </linearGradient>
// <linearGradient id="paint7_linear_2097_17734" x1="330.054" y1="996.196" x2="588.628" y2="994.98" gradientUnits="userSpaceOnUse">
// <stop stop-color="#656565"/>
// <stop offset="0.489729" stop-color="#D9D9D9"/>
// <stop offset="1" stop-color="#656565"/>
// </linearGradient>
// <radialGradient id="paint8_radial_2097_17734" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(29.6165 161.073) rotate(0.704104) scale(918.181 3249.89)">
// <stop stop-color="#707070"/>
// <stop offset="0.476719" stop-color="#D9D9D9"/>
// <stop offset="0.98" stop-color="#707070"/>
// </radialGradient>
// <radialGradient id="paint9_radial_2097_17734" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(105.962 439.033) rotate(1.1294) scale(743.922 4222.89)">
// <stop stop-color="#707070"/>
// <stop offset="0.476719" stop-color="#D9D9D9"/>
// <stop offset="0.98" stop-color="#707070"/>
// </radialGradient>
// <radialGradient id="paint10_radial_2097_17734" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(207.305 757.692) rotate(2.83405) scale(523.689 7449.36)">
// <stop stop-color="#707070"/>
// <stop offset="0.476719" stop-color="#D9D9D9"/>
// <stop offset="0.98" stop-color="#707070"/>
// </radialGradient>
// <radialGradient id="paint11_radial_2097_17734" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(285.481 1127.41) rotate(4.20337) scale(364.89 7683.29)">
// <stop stop-color="#707070"/>
// <stop offset="0.476719" stop-color="#D9D9D9"/>
// <stop offset="0.98" stop-color="#707070"/>
// </radialGradient>
// </defs>
// </svg>


        <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${totalZoneWidth} ${offsetY + totalDepth}`}
        >
            <Pipe startOf ={offsetY} size={holesData[0].depth} index ={0} middleOfShapeX={middleOfShapeX} />
        </svg>

    );
}

export default HoleSchematic;