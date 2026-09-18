export type NavItem = {
  label: string;
  href: string;
};

// Planlagte ruter fra PRD §7. Sidene er ikke bygget ennå.
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
