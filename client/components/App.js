import { RoundedBox } from 'drei'
import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import Header from './Header'
import Lights from './Lights'
import Dog from './Dog'

import ReactDOM from 'react-dom'


ReactDOM.render(<App />, document.getElementById("app"))

const App = () => {
    return (
        <>
        <Header />
       <Canvas colorManagement camera={{position: [0,0, 5], fov: 75}}>
        {/* <Suspense fullback={<div>Loading</div>}>   <Lights /> */}
           
           
           {/* <RoundedBox //get rid of later
  args={[1, 1, 1]} // Width, Height and Depth of the box
  radius={0.05} // Border-Radius of the box
  smoothness={4} // Optional, number of subdivisions
//   {...meshProps} // All THREE.Mesh props are valid
>
  <meshPhongMaterial attach="material" color="#f3f3f3" wireframe />
</RoundedBox> */}
    {/* <mesh position={[0,0,0]}>
       <Dog /> 
    </mesh> */}
<Dog />

{/* </Suspense> */}
       </Canvas>
        </>
    )
}

export default App