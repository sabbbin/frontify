// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Cursor } from '@frontify/cursor';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { AmazingButtonClickAnimation } from '@frontify/amazing-button-click-animation';
import { AwesomeAmieslider } from '@frontify/awesome-amieslider';

export function App() {
  return (
    <AwesomeAmieslider />
    // <div className="flex space-y-9 justify-center w-full bg-slate-400 p-5 flex-col">
    //   <Cursor />
    //   <AmazingButtonClickAnimation />
    // </div>
  );
}

export default App;
