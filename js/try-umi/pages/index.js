import Link from '.umi/link';
import styles from './index.css';

export default function() {
  return (
    <div>
      <h1>Routes</h1>
      <ul>
        <li>
          <Link to="/list"></Link>
        </li>
      </ul>
    </div>
  );
}
