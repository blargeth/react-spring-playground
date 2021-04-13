import {useSpring, animated} from 'react-spring';

function Component1() {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  return <animated.div style={props}>I am a faderrr</animated.div>
}

export default Component1;