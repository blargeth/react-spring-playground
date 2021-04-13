import {useSpring, animated} from 'react-spring';

function RedCircle() {
  const props = useSpring({
    opacity: 1,
    from: {opacity: 0, marginLeft: -100},
    to: {opacity: 1, marginLeft: 0}
  })



  return <animated.div style={props} className="redCircle" ></animated.div>
}

export default RedCircle;