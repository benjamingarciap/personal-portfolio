import styled, { keyframes } from 'styled-components'

const textRevealerKeyFrames = () => {
  return keyframes`
  	0%, 50% {
		transform-origin: 0 50%;
	  }
	  60%, 100% {
	  	transform-origin: 100% 50%;		
	  }
	  60% {
	  	transform: scaleX(1);
	  }
	  100% {
	  	transform: scaleX(0);
	  }
  `;
}

const clipTextKeyFrames = () => {
  return keyframes`
 	  from {
	  	clip-path: inset(0 100% 0 0);
	  }
	  to {
	  	clip-path: inset(0 0 0 0);
	  }
  `;
}

const TextRevealerAnimation = styled.div`
	animation-delay: var(--animation-delay, 2s);
	animation-iteration-count: var(--iterations, 1);
	animation-duration: var(--duration, 1s);
	animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
  ::after {
    animation-delay: var(--animation-delay, 2s);
    animation-iteration-count: var(--iterations, 1);
    animation-duration: var(--duration, 1s);
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
    animation-delay: var(--animation-delay, 2s);

	  animation-iteration-count: var(--iterations, 1);
	  animation-duration: var(--duration, 1s);
	  animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
    
    content: "";
		position: absolute;
		z-index: 999;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #FF3F7F;
		transform: scaleX(0);
		transform-origin: 0 50%;
		pointer-events: none;
    animation-name: ${ textRevealerKeyFrames };
  }
  
  --animation-delay: var(--delay, 0);
	--animation-duration: var(--duration, 800ms);
	--animation-iterations: var(--iterations, 1);
	position: relative;
	animation-name: ${clipTextKeyFrames};
	color: #FFF;
	white-space: nowrap;

`;

// ========================================================================================
const AutoCompleteKeyframes = () => {
	return keyframes`
		0% { content: " Applications"}
		2% { content: " ApplicDoL0r"}
		3% { content: " App$$"}
		4% { content: " $$L-_="}
		5% { content: " Apl"}
		6% { content: " AfdfP@"}
		7% { content: " A"}
		8% { content: " Hic"}
		9% { content: " atque"}
		10%, 30% { content: " Mobile apps"}
		31% { content: " AG#%TEG"}
		32% { content: " S"}
		33% { content: " -@@%$"}
		34% { content: " consecur"}
		35% { content: " adipiing"}
		36% { content: " ¢™£¢"}
		37% { content: " W$#(%"}
		38% { content: " Websa0tes"}
		39%, 50%{ content: " Websites"}
		51% { content: " Webstes"}
		52% { content: " W$#(%"}
		53% { content: " -@@Ws%$"}
		54% { content: " W$#(%"}
		55% { content: " adiping"}
		56% { content: " %#(O"}
		57% { content: " P§tsaic"}
		58% { content: " Pru%#cts"}
		59%, 70% { content: " Products"}
		71% { content: " "}
		72% { content: " S"}
		73% { content: " -@@%$"}
		74% { content: " constur"}
		75% { content: " adipcing"}
		76% { content: " elit"}
		77% { content: " Hic"}
		78% { content: " atque"}
		79%, 90% { content: " WebApps"}
		91% { content: " "}
		92% { content: " S"}
		93% { content: " -@@%$"}
		94% { content: " constur"}
		95% { content: " adipcing"}
		96% { content: " elit"}
		97% { content: " Hic"}
		98% { content: " atque"}
		99% { content: " WebApps"}
		100% { content: " Design"}
		`;
};

const AutoComplete = styled.span`
  color:white;
  content:"";
  
  :after {
		content:"";
		animation: ${ AutoCompleteKeyframes } 10s linear infinite;
  };
`;

// ========================================================================================

const glitchAnimKeyFrames = () => {
	return keyframes`
		0% {
    clip: rect(71px, 9999px, 23px, 0);
  	}
  	4.166666666666666% {
  	  clip: rect(86px, 9999px, 129px, 0);
  	}
  	8.333333333333332% {
  	  clip: rect(25px, 9999px, 90px, 0);
  	}
  	12.5% {
  	  clip: rect(30px, 9999px, 98px, 0);
  	}
  	16.666666666666664% {
  	  clip: rect(45px, 9999px, 55px, 0);
  	}
  	20.833333333333336% {
  	  clip: rect(91px, 9999px, 103px, 0);
  	}
  	25% {
  	  clip: rect(115px, 9999px, 143px, 0);
  	}
  	29.166666666666668% {
  	  clip: rect(35px, 9999px, 135px, 0);
  	}
  	33.33333333333333% {
  	  clip: rect(112px, 9999px, 133px, 0);
  	}
  	37.5% {
  	  clip: rect(4px, 9999px, 41px, 0);
  	}
  	41.66666666666667% {
  	  clip: rect(36px, 9999px, 73px, 0);
  	}
  	45.83333333333333% {
  	  clip: rect(135px, 9999px, 21px, 0);
  	}
  	50% {
  	  clip: rect(57px, 9999px, 95px, 0);
  	}
  	54.166666666666664% {
  	  clip: rect(111px, 9999px, 110px, 0);
  	}
  	58.333333333333336% {
  	  clip: rect(109px, 9999px, 72px, 0);
  	}
  	62.5% {
  	  clip: rect(131px, 9999px, 103px, 0);
  	}
  	66.66666666666666% {
  	  clip: rect(148px, 9999px, 90px, 0);
  	}
  	70.83333333333334% {
  	  clip: rect(149px, 9999px, 47px, 0);
  	}
  	75% {
  	  clip: rect(123px, 9999px, 34px, 0);
  	}
  	79.16666666666666% {
  	  clip: rect(43px, 9999px, 33px, 0);
  	}
  	83.33333333333334% {
  	  clip: rect(115px, 9999px, 148px, 0);
  	}
  	87.5% {
  	  clip: rect(28px, 9999px, 54px, 0);
  	}
  	91.66666666666666% {
  	  clip: rect(21px, 9999px, 107px, 0);
  	}
  	95.83333333333334% {
  	  clip: rect(31px, 9999px, 34px, 0);
  	}
  	100% {
  	  clip: rect(145px, 9999px, 104px, 0);
  	}
	`;
};

const glitchAnimKeyFrames2 = () => {
	return keyframes`
		6.666666666666667% {
    	clip: rect(97px, 9999px, 116px, 0);
  	}
  	10% {
  	  clip: rect(47px, 9999px, 37px, 0);
  	}
  	13.333333333333334% {
  	  clip: rect(12px, 9999px, 100px, 0);
  	}
  	16.666666666666664% {
  	  clip: rect(125px, 9999px, 18px, 0);
  	}
  	20% {
  	  clip: rect(37px, 9999px, 46px, 0);
  	}
  	23.333333333333332% {
  	  clip: rect(117px, 9999px, 125px, 0);
  	}
  	26.666666666666668% {
  	  clip: rect(37px, 9999px, 3px, 0);
  	}
  	30% {
  	  clip: rect(50px, 9999px, 6px, 0);
  	}
  	33.33333333333333% {
  	  clip: rect(140px, 9999px, 32px, 0);
  	}
  	36.666666666666664% {
  	  clip: rect(12px, 9999px, 0px, 0);
  	}
  	40% {
  	  clip: rect(128px, 9999px, 45px, 0);
  	}
  	43.333333333333336% {
  	  clip: rect(105px, 9999px, 118px, 0);
  	}
  	46.666666666666664% {
  	  clip: rect(143px, 9999px, 13px, 0);
  	}
  	50% {
  	  clip: rect(38px, 9999px, 27px, 0);
  	}
  	53.333333333333336% {
  	  clip: rect(98px, 9999px, 148px, 0);
  	}
  	56.666666666666664% {
  	  clip: rect(77px, 9999px, 19px, 0);
  	}
  	60% {
  	  clip: rect(95px, 9999px, 56px, 0);
  	}
  	63.33333333333333% {
  	  clip: rect(123px, 9999px, 17px, 0);
  	}
  	66.66666666666666% {
  	  clip: rect(90px, 9999px, 144px, 0);
  	}
  	70% {
  	  clip: rect(75px, 9999px, 1px, 0);
  	}
  	73.33333333333333% {
  	  clip: rect(52px, 9999px, 119px, 0);
  	}
  	76.66666666666667% {
  	  clip: rect(4px, 9999px, 6px, 0);
  	}
  	80% {
  	  clip: rect(105px, 9999px, 147px, 0);
  	}
  	83.33333333333334% {
  	  clip: rect(115px, 9999px, 25px, 0);
  	}
  	86.66666666666667% {
  	  clip: rect(20px, 9999px, 54px, 0);
  	}
  	90% {
  	  clip: rect(43px, 9999px, 89px, 0);
  	}
  	93.33333333333333% {
  	  clip: rect(117px, 9999px, 11px, 0);
  	}
  	96.66666666666667% {
  	  clip: rect(101px, 9999px, 90px, 0);
  	}
  	100% {
  	  clip: rect(55px, 9999px, 128px, 0);
  	}
`;
};

const Glitch = styled.span`
	color: white;
  font-size: 1em;
  position: relative;
	display: inline-block;

	::before, ::after {
		content: attr(data-text);
  	position: absolute;
  	top: 0;
  	left: 0;
  	width: 100%;
  	height: 100%;
  	background: #23163b;
	};

	::before {
		left: 2px;
		text-shadow: -2px 0 #49fc00;
		clip: rect(24px, 550px, 90px, 0);
		animation: ${ glitchAnimKeyFrames2 } 3s infinite linear alternate-reverse;
		content:"";
	};

	::after {
	 	left: -2px;
	 	text-shadow: -2px 0 #b300fc;
	 	clip: rect(85px, 550px, 140px, 0);
	 	animation: ${ glitchAnimKeyFrames } 2.5s infinite linear alternate-reverse;
	};
`;

// ========================================================================================

const FlickerKeyFrames = () => {
	return keyframes`
		0%{
    	opacity: 0.8;
    	transform: translateY(10px);
    	transform: translateX(-10px)
  	}
  	10%{
  	  opacity: 0;
  	}
  	20%{
  	  opacity: 1;
  	  transform: translateY(-10px);
  	  transform: translateX(10px)
  	}
  	25%{
  	  opacity: 0;
  	}
  	40%{
  	  opacity: 1;
  	  transform: translateY(0px);
  	  transform: translateX(0px)
  	}
  	45%{
  	  opacity: 0.3;
  	  transform: translateY(50px);
  	  transform: translateX(20px)
  	}
	
  	50%{
  	  opacity: 1;
  	  transform: translateY(0px);
  	  transform: translateX(0px)
  	}
  	60%{
  	  opacity: 0.5;
  	  transform: translateY(10px);
  	  transform: translateX(4px)
  	}
  	80%{
  	  opacity: 0.2;
  	  transform: translateY(5px);
  	  transform: translateX(-4px)
  	}
  	100%{
  	  opacity:1;
  	}
	`;
};

const Flicker = styled.p`
	animation-delay: 2.3s;
	animation-name: ${ FlickerKeyFrames };
	animation-duration: 0.4s;
	animation-timing-function: steps(1);
	animation-fill-mode: forwards;
`;

const animations = {
	textRevealer: TextRevealerAnimation, 
	AutoComplete: AutoComplete, 
	Glitch: Glitch,
	Flicker: Flicker
};

export default animations ;