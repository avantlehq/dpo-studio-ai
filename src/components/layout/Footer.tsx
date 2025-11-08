export function Footer() {
  return (
    <footer className="h-8 px-6 flex items-center justify-between bg-muted/30 text-xs text-muted-foreground flex-shrink-0" style={{ borderTop: '1px solid hsl(var(--border))' }}>
      <div className="flex items-center gap-4">
        <span>© 2024 Avantle.ai</span>
        <span>•</span>
        <span>GDPR Compliance Platform</span>
      </div>
      <div className="flex items-center gap-4">
        <span>Status: Operational</span>
        <span>•</span>
        <span>EU Data Residency</span>
      </div>
    </footer>
  );
}