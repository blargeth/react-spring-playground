import {useSpring, animated} from 'react-spring';

function RedCircle() {
  const props = useSpring({
    config: {duration: 3000},
    from: {opacity: 0, marginLeft: -100, backgroundColor: "blue", number: 0},
    to: {opacity: 1, marginLeft: 0, backgroundColor: "red", number: 3}
  })

  return <animated.div style={props} className="redCircle" ></animated.div>
}

export default RedCircle;