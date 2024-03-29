// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Cursor } from '@frontify/cursor';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { AmazingButtonClickAnimation } from '@frontify/amazing-button-click-animation';
import { AwesomeAmieslider } from '@frontify/awesome-amieslider';
import { MacSidebar } from '@frontify/mac-sidebar';
import { TooltipsAnimation } from '@frontify/tooltips-animation';
import { CssMask } from '@frontify/css-mask';

export function App() {
  return (
    // <MacSidebar />
    // <AwesomeAmieslider />
    // <div className="flex space-y-9 justify-center w-full bg-slate-400 p-5 flex-col">
    //   <Cursor />
    //   <AmazingButtonClickAnimation />
    // </div>
    // <TooltipsAnimation />

    <CssMask />
  );
}

export default App;
