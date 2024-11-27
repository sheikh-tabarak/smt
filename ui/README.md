# Sheikh Tabarak UI

🎉 Sheikh Tabarak UI Allows you to use the Core elements designed with easy modifications

## Installation

```
$ npm install --save @sheikhtabarak/ui
$ yarn add @sheikhtabarak/ui
```

## Documentation
For full documentation, visit [smt.sheikhtabarak.me/ui](https://smt.sheikhtabarak.me/ui) .


## Features
- Minimalist Components
- Customizable Design
- Accessible by Default
- Lightweight Package
- Easy to Use


## Example

```jsx
import React from 'react';
import { FaIcons } from 'react-icons/fa';
import { Button } from "@sheikhtabarak/ui";

function App(){
  const [loading, setLoading] = useState(false)
 return (
  <Button
     loading={loading}
     color={'primary'}
     size={'medium'}
     onClick={() => {
     setLoading(true)
     setTimeout(() => {
       toast.success('Task Completed')
       setLoading(false)
     }, 3000);
     }}
     children={<div className='flex gap-2 items-center'><FaIcons />My Fancy Button</div>}
   />
 );
}
```

## Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome! Take a look at the contributing guide.

You can also find me on [sheikhtabarak.me](https://sheikhtabarak.me/).