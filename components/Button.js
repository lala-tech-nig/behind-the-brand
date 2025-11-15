import Link from 'next/link';

export default function Button({ href, children, className = '' }) {
  const styles = `
    inline-block bg-primary text-background font-bold 
    py-3 px-6 rounded-md text-center
    transition-colors duration-300 hover:bg-primary-hover
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={styles}>
      {children}
    </button>
  );
}