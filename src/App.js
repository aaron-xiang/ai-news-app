import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = 'c1014e7b0b16c7ed556b1ce11a5908d32e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === 'testCommand') {
          alert('This code was executed')
        }
      }
    })
  }, [])

  return (
    <div>Alan AI New Application</div>
  )
}

export default App;