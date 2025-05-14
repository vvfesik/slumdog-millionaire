export function MenuIcon({ className = '' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={className}>
      <path
        fill="#000"
        d="M4 6c0-.6.4-1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM4 12c0-.6.4-1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM5 17a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"
      />
    </svg>
  );
}
export default MenuIcon;
