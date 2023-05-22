import styles from './MacSidebar.module.css';

/* eslint-disable-next-line */
export interface MacSidebarProps {}

export function MacSidebar(props: MacSidebarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MacSidebar!</h1>
    </div>
  );
}

export default MacSidebar;
