import { LinkComponent } from "../../shared-types";
import { PhaseBannerProps } from "../PhaseBanner/types";
import { SiteNavigationItemProps } from "../SiteNavigation/types";
import { SiteSearchProps } from "../SiteSearch/types";

export interface SiteHeaderBrandProps extends React.AllHTMLAttributes<HTMLElement> {
    homeUrl: string;
    linkComponent?: LinkComponent;
    siteTitle?: string;
}

export interface SiteHeaderProps extends React.AllHTMLAttributes<HTMLHeadingElement> {
    logo?: {
        alt?: string;
        href?: string;
        src?: string;
    };
    navigationItems?: SiteNavigationItemProps[];
    phaseBanner?: PhaseBannerProps;
    siteSearch?: SiteSearchProps;
    siteTitle?: string;
}
