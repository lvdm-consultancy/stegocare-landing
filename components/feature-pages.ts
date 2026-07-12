import type { LucideIcon } from "lucide-react";
import {
  CalendarRange,
  FileText,
  FolderOpen,
  Landmark,
  Receipt,
  Route,
  Smartphone,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import planningDetailShot from "@/public/screenshots/planning-detail.png";
import clientsDetailShot from "@/public/screenshots/clients-detail.png";
import clientsTimelineShot from "@/public/screenshots/clients-timeline.png";
import documentsViewerShot from "@/public/screenshots/documents-viewer.png";
import invoicingBatchShot from "@/public/screenshots/invoicing-batch.png";
import vestaDossierShot from "@/public/screenshots/vesta-dossier.png";
import phoneHomeShot from "@/public/screenshots/phone-home.png";
import phoneAgendaShot from "@/public/screenshots/phone-agenda.png";
import phoneAfrondenShot from "@/public/screenshots/phone-afronden.png";
import phoneVerlofShot from "@/public/screenshots/phone-verlof.png";

export type Locale = "en" | "fr" | "nl";

/** Localized URL segment the feature pages live under. */
export const FEATURE_SEGMENT: Record<Locale, string> = {
  en: "features",
  nl: "functies",
  fr: "fonctionnalites",
};

export interface FeatureShot {
  image: StaticImageData;
  /** Render inside the phone bezel instead of a full-width browser shot. */
  phone?: boolean;
}

export interface FeaturePage {
  /** Key into the `features` and `featurePages` message namespaces. */
  key: string;
  icon: LucideIcon;
  shots: FeatureShot[];
  slugs: Record<Locale, string>;
}

export const FEATURE_PAGES: FeaturePage[] = [
  {
    key: "planning",
    icon: CalendarRange,
    shots: [{ image: planningDetailShot }],
    slugs: {
      nl: "zorgplanning",
      en: "care-planning",
      fr: "planification",
    },
  },
  {
    key: "mobile",
    icon: Smartphone,
    shots: [
      { image: phoneHomeShot, phone: true },
      { image: phoneAgendaShot, phone: true },
      { image: phoneVerlofShot, phone: true },
    ],
    slugs: {
      nl: "mobiele-app",
      en: "mobile-app",
      fr: "application-mobile",
    },
  },
  {
    key: "clients",
    icon: FolderOpen,
    shots: [{ image: clientsDetailShot }, { image: clientsTimelineShot }],
    slugs: {
      nl: "clientbeheer",
      en: "client-management",
      fr: "gestion-clients",
    },
  },
  {
    key: "documents",
    icon: FileText,
    shots: [{ image: documentsViewerShot }],
    slugs: {
      nl: "documenten-en-formulieren",
      en: "documents-and-forms",
      fr: "documents-et-formulaires",
    },
  },
  {
    key: "timeAndTravel",
    icon: Route,
    shots: [{ image: phoneAfrondenShot, phone: true }],
    slugs: {
      nl: "tijdsregistratie-en-verplaatsingen",
      en: "time-and-travel-registration",
      fr: "temps-et-deplacements",
    },
  },
  {
    key: "vesta",
    icon: Landmark,
    shots: [{ image: vestaDossierShot }],
    slugs: {
      nl: "vesta-rapportering",
      en: "vesta-reporting",
      fr: "vesta-rapports",
    },
  },
  {
    key: "invoicing",
    icon: Receipt,
    shots: [{ image: invoicingBatchShot }],
    slugs: {
      nl: "facturatie",
      en: "invoicing",
      fr: "facturation",
    },
  },
];

export function findFeatureBySlug(
  locale: Locale,
  slug: string
): FeaturePage | undefined {
  return FEATURE_PAGES.find((f) => f.slugs[locale] === slug);
}

/** Public, localized path of a feature page, e.g. /nl/functies/zorgplanning */
export function featurePath(locale: Locale, key: string): string {
  const feature = FEATURE_PAGES.find((f) => f.key === key);
  if (!feature) return `/${locale}`;
  return `/${locale}/${FEATURE_SEGMENT[locale]}/${feature.slugs[locale]}`;
}
