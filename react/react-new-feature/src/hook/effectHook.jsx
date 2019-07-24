import React, { useEffect,useState } from 'react';
function EffectHook (){
const [count,setCount] = useState(0)
const [size,setSize] = useState({
    width:document.documentElement.clientWidth,
    height:document.documentElement.clientHeight
});
useEffect(()=>{
    document.title = count;
})
return (
    <button
      onClick={() => {
        setCount({
          count: count + 1
        })
      }}
      >
        click: {count},
        size: {size.width} X {size.height}
      </button>
)

}
export default EffectHook;
