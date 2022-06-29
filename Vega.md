# Lesson on quick data visualization in Vega-Lite-Api

- [vega-lite-api tutorial]("https://www.youtube.com/watch?v=RKJPMfKsAsQ")

- [npm install problem for vega-lite-api]("https://vizhub.com/forum/t/attempted-import-error-vl-is-not-exported-from-vega-lite-api/107/3")

- [VegaLite component from "react-vega"]("https://github.com/vega/react-vega/tree/master/packages/react-vega")

"import React from 'react'
import ReactDOM from 'react-dom'
import { VegaLite } from 'react-vega'

const spec = {
width: 400,
height: 200,
mark: 'bar',
encoding: {
x: { field: 'a', type: 'ordinal' },
y: { field: 'b', type: 'quantitative' },
},
data: { name: 'table' }, // note: vega-lite data attribute is a plain object instead of an array
}

const barData = {
table: [
{ a: 'A', b: 28 },
{ a: 'B', b: 55 },
{ a: 'C', b: 43 },
{ a: 'D', b: 91 },
{ a: 'E', b: 81 },
{ a: 'F', b: 53 },
{ a: 'G', b: 19 },
{ a: 'H', b: 87 },
{ a: 'I', b: 52 },
],
}

ReactDOM.render(
<VegaLite spec={spec} data={barData} />,
document.getElementById('bar-container')
);"

- [react-vega types]("https://www.npmjs.com/package/@types/react-vega")
