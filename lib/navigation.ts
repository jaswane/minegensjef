export type NavItem = {
  label: string;
  href: string;
};

// Hovedruter fra PRD §7. Alle finnes som sider.
export const mainNav: NavItem[] = [
  { label: "Start her", href: "/start/" },
  { label: "Guider", href: "/guider/" },
  { label: "Artikler", href: "/artikler/" },
  { label: "Om", href: "/om/" },
];

export const footerNav: NavItem[] = [
  { label: "Start her", href: "/start/" },
  { label: "Guider", href: "/guider/" },
  { label: "Artikler", href: "/artikler/" },
  { label: "Wealthy Affiliate", href: "/wealthy-affiliate/" },
  { label: "Om", href: "/om/" },
  { label: "Kontakt", href: "/kontakt/" },
];

export const legalNav: NavItem[] = [
  { label: "Personvern", href: "/personvern/" },
  { label: "Ansvarsfraskrivelse", href: "/ansvarsfraskrivelse/" },
];
