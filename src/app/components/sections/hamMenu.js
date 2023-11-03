import '../../globals.css';

export default function HamMenu({ active }) {
  const hamMenuClasses = active ? 'hamMenu active' : 'hamMenu';

  return (
    <div className={hamMenuClasses}></div>
  );
}
