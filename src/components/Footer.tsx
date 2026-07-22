interface FooterProps {
  name: string;
}

export function Footer({ name }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>
        © {year} {name}. Feito com React + Vite.
      </p>
    </footer>
  );
}
