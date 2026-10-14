interface FooterProps {
  name: string;
}

export function Footer({ name }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>
        © {year} {name}. Java, Python e engenharia de software.
      </p>
    </footer>
  );
}
