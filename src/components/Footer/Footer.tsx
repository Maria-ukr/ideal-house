import Link from 'next/link';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-1 border-accent">
      <div className="container flex justify-between items-center py-8">
        <p className="uppercase font-heading">© {currentYear} Ideal House</p>
        <p className="uppercase font-heading">Site by <Link href="https://github.com/Maria-ukr">Maria-ukr</Link></p>
      </div>
    </footer>
  )
}

export default Footer;