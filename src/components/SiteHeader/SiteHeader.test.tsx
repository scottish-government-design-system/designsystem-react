import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import SiteHeader from './SiteHeader';
import SiteNavigation from '../SiteNavigation';
import SiteSearch from '../SiteSearch';
import PhaseBanner from '../PhaseBanner';

const NAVIGATION_ITEMS = (
    <>
        <SiteNavigation.Item href="#about">About</SiteNavigation.Item>
        <SiteNavigation.Item href="#get-started">Get started</SiteNavigation.Item>
        <SiteNavigation.Item href="#styles">Styles</SiteNavigation.Item>
        <SiteNavigation.Item href="#components" isCurrent>Components</SiteNavigation.Item>
        <SiteNavigation.Item href="#patterns">Patterns</SiteNavigation.Item>
        <SiteNavigation.Item href="#guidance">Guidance</SiteNavigation.Item>
    </>
);

test('site header renders correctly (maximal, testing markup structure)', () => {
    render(
        <SiteHeader>
            <SiteHeader.Brand homeUrl="/" siteTitle="Design System React">
                <img src="./scottish-government.svg" alt="gov.scot" loading="lazy" width="300" height="58" />
            </SiteHeader.Brand>
            <SiteHeader.Navigation>
                <SiteNavigation>
                    {NAVIGATION_ITEMS}
                </SiteNavigation>
            </SiteHeader.Navigation>
            <SiteHeader.Search>
                <SiteSearch id="site-header-search"/>
            </SiteHeader.Search>
            <SiteHeader.Phase>
                <PhaseBanner phaseName="Beta">
                    This is a new service. Your <a href="#feedback">feedback</a> will help us to improve it.
                </PhaseBanner>
            </SiteHeader.Phase>
        </SiteHeader>
    );

    const siteHeader = screen.getByRole('banner');
    const siteHeaderContent = siteHeader.querySelector('.ds_site-header__content');
    const siteHeaderContentWrapper = siteHeaderContent?.parentElement;
    const siteHeaderBranding = siteHeader.querySelector('.ds_site-branding');
    const siteHeaderControls = siteHeader.querySelector('.ds_site-header__controls');
    const siteHeaderNavToggle = siteHeader.querySelector('.ds_site-navigation__toggle');
    const siteHeaderNavigationMobile = within(siteHeader).getAllByRole('navigation')[0];
    const siteHeaderNavigationDesktop = within(siteHeader).getAllByRole('navigation')[1];
    const siteHeaderPhaseBanner = siteHeader.querySelector('.ds_phase-banner');
    const siteHeaderSearch = within(siteHeader).getByRole('search').parentElement?.parentElement;

    expect(siteHeader).toHaveClass('ds_site-header');
    expect(siteHeaderContentWrapper).toHaveClass('ds_wrapper');

    expect(siteHeaderBranding?.parentElement).toEqual(siteHeaderContent);
    expect(siteHeaderControls?.parentElement).toEqual(siteHeaderContent);
    expect(siteHeaderNavToggle?.parentElement).toEqual(siteHeaderContent);
    expect(siteHeaderNavigationMobile.parentElement).toEqual(siteHeaderContent);
    expect(siteHeaderSearch?.parentElement).toEqual(siteHeaderContent);

    expect(siteHeaderBranding?.previousElementSibling).toBeNull();
    expect(siteHeaderControls?.previousElementSibling).toEqual(siteHeaderBranding);
    expect(siteHeaderNavToggle?.previousElementSibling).toEqual(siteHeaderControls);
    expect(siteHeaderNavigationMobile.previousElementSibling).toEqual(siteHeaderNavToggle);
    expect(siteHeaderSearch?.previousElementSibling).toEqual(siteHeaderNavigationMobile);

    expect(siteHeaderNavigationDesktop.parentElement).toHaveClass('ds_wrapper');
    expect(siteHeaderNavigationDesktop?.parentElement?.parentElement).toHaveClass('ds_site-header__navigation');

    expect(siteHeaderNavigationDesktop?.parentElement?.parentElement?.previousElementSibling).toEqual(siteHeaderPhaseBanner);

    expect(siteHeaderPhaseBanner?.previousElementSibling).toEqual(siteHeaderContentWrapper);

    expect(siteHeaderPhaseBanner?.parentElement).toEqual(siteHeader);
    expect(siteHeaderNavigationDesktop?.parentElement?.parentElement?.parentElement).toEqual(siteHeader);
    expect(siteHeaderContentWrapper?.parentElement).toEqual(siteHeader);
});

test('site header branding: logo only, default URL', () => {
    render(
        <SiteHeader>
            <SiteHeader.Brand>
                <img src="./scottish-government.svg" alt="gov.scot" loading="lazy" width="300" height="58" />
            </SiteHeader.Brand>
        </SiteHeader>
    );

    const siteHeader = screen.getByRole('banner');
    const siteHeaderBranding = siteHeader.querySelector('.ds_site-branding');
    const siteHeaderLogoLink = within(siteHeader).getByRole('link');
    const siteHeaderLogoImg = within(siteHeader).getByRole('img');

    expect(siteHeaderLogoLink).toHaveClass('ds_site-branding__logo', 'ds_site-branding__link');
    expect(siteHeaderLogoLink).toHaveAttribute('href', '/');

    expect(siteHeaderLogoImg).toHaveClass('ds_site-branding__logo-image');

    expect(siteHeaderLogoImg.parentElement).toEqual(siteHeaderLogoLink);
    expect(siteHeaderLogoLink.parentElement).toEqual(siteHeaderBranding);

    expect(siteHeaderLogoImg).toHaveClass('ds_site-branding__logo-image');
});

test('site header branding: logo and site title', () => {
    const SITE_TITLE_CONTENT = 'Design System React';

    render(
        <SiteHeader>
            <SiteHeader.Brand homeUrl="/" siteTitle={SITE_TITLE_CONTENT}>
                <img src="./scottish-government.svg" alt="gov.scot" loading="lazy" width="300" height="58" />
            </SiteHeader.Brand>
        </SiteHeader>
    );

    const siteHeader = screen.getByRole('banner');
    const siteHeaderBranding = siteHeader.querySelector('.ds_site-branding');
    const siteHeaderLogoLink = within(siteHeader).getByRole('link');
    const siteTitle = siteHeader.querySelector('.ds_site-branding__title');

    expect(siteTitle?.tagName).toEqual('DIV');
    expect(siteTitle?.textContent).toEqual(SITE_TITLE_CONTENT);
    expect(siteTitle?.parentElement).toEqual(siteHeaderBranding);
    expect(siteTitle?.previousElementSibling).toEqual(siteHeaderLogoLink);
});

test('site header branding: custom link URL', () => {
    const HOME_URL = '/home.aspx';

    render(
        <SiteHeader>
            <SiteHeader.Brand homeUrl={HOME_URL}>
                <img src="./scottish-government.svg" alt="gov.scot" loading="lazy" width="300" height="58" />
            </SiteHeader.Brand>
        </SiteHeader>
    );

    const siteHeader = screen.getByRole('banner');
    const siteHeaderLogoLink = within(siteHeader).getByRole('link');

    expect(siteHeaderLogoLink).toHaveAttribute('href', HOME_URL);
});

test('site header logo link link with custom element', () => {
    const LINK_CONTENT = <img src="./scottish-government.svg" alt="gov.scot" loading="lazy" width="300" height="58" />

    render(
        <SiteHeader>
            <SiteHeader.Brand linkComponent={
                ({ className, ...props }) => (
                    <strong role="link" className={className} {...props}/>
                )}>
                {LINK_CONTENT}
            </SiteHeader.Brand>
        </SiteHeader>
    );

    const item = screen.getByRole('banner');
    const link = within(item).getByRole('link');

    expect(link?.tagName).toEqual('STRONG');
});

test('site header with site navigation', () => {


    render(
        <>
            <SiteHeader>
                <SiteHeader.Navigation>
                    <SiteNavigation>
                        {NAVIGATION_ITEMS}
                    </SiteNavigation>
                </SiteHeader.Navigation>
            </SiteHeader>
            <SiteNavigation data-testid="sitenavigation">
                {NAVIGATION_ITEMS}
            </SiteNavigation>
        </>
    );

    const siteHeader = screen.getByRole('banner');
    const siteHeaderNavigationMobile = within(siteHeader).getAllByRole('navigation')[0];
    const siteHeaderNavigationDesktop = within(siteHeader).getAllByRole('navigation')[1];
    const siteNavigationReference = screen.getByTestId('sitenavigation');
    const siteNavControl = within(siteHeader).getByRole('checkbox');
    const siteNavControlLabel = document.querySelector(`[for="${siteNavControl.id}"]`);
    const siteNavControls = siteNavControlLabel?.parentElement;

    expect(siteHeaderNavigationMobile).toHaveClass('ds_site-navigation', 'ds_site-navigation--mobile');
    expect(siteHeaderNavigationMobile).toHaveAttribute('id', 'mobile-navigation');

    expect(siteHeaderNavigationDesktop).toHaveClass('ds_site-navigation');
    expect(siteHeaderNavigationDesktop).not.toHaveAttribute('id', 'mobile-navigation');

    expect(siteHeaderNavigationMobile.innerHTML).toEqual(siteNavigationReference.innerHTML);
    expect(siteHeaderNavigationDesktop.innerHTML).toEqual(siteNavigationReference.innerHTML);

    expect(siteNavControl).toHaveClass('ds_site-navigation__toggle');
    expect(siteNavControl).toHaveAttribute('id', 'menu');

    expect(siteNavControlLabel).toHaveClass('ds_site-header__control');
    expect(siteNavControlLabel).toHaveAttribute('aria-controls', siteHeaderNavigationMobile.id);
    expect(siteNavControlLabel?.textContent).toEqual('Menu');
    expect(siteNavControlLabel?.tagName).toEqual('LABEL');
    // todo: check for icons and structure

    expect(siteNavControls).toHaveClass('ds_site-header__controls');
    expect(siteNavControls?.tagName).toEqual('DIV');
});

test('site header with phase banner', () => {
    const PHASE_BANNER = {
        content: 'My content',
        phaseName: 'Beta'
    };

    render(
        <>
            <SiteHeader>
                <SiteHeader.Phase>
                    <PhaseBanner phaseName={PHASE_BANNER.phaseName}>
                        {PHASE_BANNER.content}
                    </PhaseBanner>
                </SiteHeader.Phase>
            </SiteHeader>
            <PhaseBanner data-testid="phasebanner" phaseName={PHASE_BANNER.phaseName}>
                {PHASE_BANNER.content}
            </PhaseBanner>
        </>
    );

    const siteHeader = screen.getByRole('banner');
    const siteHeaderPhaseBanner = siteHeader.querySelector('.ds_phase-banner');
    const phaseBannerReference = screen.getByTestId('phasebanner');

    expect(siteHeaderPhaseBanner?.tagName).toEqual('DIV');
    expect(siteHeaderPhaseBanner?.innerHTML).toEqual(phaseBannerReference.innerHTML);
});

test('instantiating/initialising DS component script', () => {
    render(
        <SiteHeader>
            <SiteHeader.Navigation>
                <SiteNavigation>
                    {NAVIGATION_ITEMS}
                </SiteNavigation>
            </SiteHeader.Navigation>
        </SiteHeader>
    );

    const mobileNav = screen.getAllByRole('navigation')[0];
    expect(mobileNav).toHaveClass('js-initialised');
    expect(mobileNav).toHaveClass('js-instantiated');
});

test('passing additional props', () => {
    render(
        <SiteHeader data-test="foo" />
    );

    const siteHeader = screen.getByRole('banner');
    expect(siteHeader?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <SiteHeader className="foo" />
    );

    const siteHeader = screen.getByRole('banner');
    expect(siteHeader).toHaveClass('foo');
});
