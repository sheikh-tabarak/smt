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

import Button from "@sheikhtabarak/ui/dist/components/button";
  
  function App(){

    return (
        <Button 
        onClick={() => { console.log('Clicked') }}
        label={'My Fancy Button'} 
        disabled={true} 
        icon={ /* your svg*/ }
        type={'submit'} // empty if nothing
        className={'bg-red-500'} // Custom Styling | Default : bg-primary 
        size = {'sm'} // Can be sm | md | lg
        loading={true} // loading button in case of async actions
 />
    );
  }
```

## Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome! Take a look at the contributing guide.

You can also find me on [sheikhtabarak.me](https://sheikhtabarak.me/).