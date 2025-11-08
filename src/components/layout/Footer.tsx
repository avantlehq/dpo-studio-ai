export function Footer() {
  return (
    <footer className="h-8 px-6 flex items-center justify-center bg-muted/30 text-xs text-muted-foreground flex-shrink-0" style={{ borderTop: '1px solid hsl(var(--border))' }}>
      <div className="flex items-center gap-2">
        <span>© 2024 Avantle.ai</span>
        <span>•</span>
        <span>GDPR Platform</span>
        <span>•</span>
        <span>EU Data Residency</span>
      </div>
    </footer>
  );
}