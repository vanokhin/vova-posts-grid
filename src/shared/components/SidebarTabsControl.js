import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const noop = () => {};

const classNames = ( ...values ) => values.filter( Boolean ).join( ' ' );

const normalizeTabs = ( tabs ) =>
	Array.isArray( tabs ) ? tabs.slice( 0, 4 ) : [];

const getEnabledTabs = ( tabs ) => tabs.filter( ( tab ) => ! tab.disabled );

export default function SidebarTabsControl( {
	tabs = [],
	activeTab,
	onChange = noop,
	className,
	ariaLabel = __( 'Settings sections', 'vova-post-grids' ),
} ) {
	const normalizedTabs = normalizeTabs( tabs );

	if ( ! normalizedTabs.length ) {
		return null;
	}

	const enabledTabs = getEnabledTabs( normalizedTabs );
	const selectedTab =
		enabledTabs.find( ( tab ) => tab.name === activeTab ) ||
		enabledTabs[ 0 ] ||
		normalizedTabs[ 0 ];
	const selectedTabName = selectedTab?.name;

	const selectTab = ( tab ) => {
		if ( ! tab.disabled && tab.name !== selectedTabName ) {
			onChange( tab.name );
		}
	};

	const selectTabByOffset = ( currentTab, offset ) => {
		if ( ! enabledTabs.length ) {
			return;
		}

		const currentIndex = enabledTabs.findIndex(
			( tab ) => tab.name === currentTab.name
		);
		const nextIndex =
			currentIndex === -1
				? 0
				: ( currentIndex + offset + enabledTabs.length ) %
				  enabledTabs.length;

		selectTab( enabledTabs[ nextIndex ] );
	};

	const onKeyDown = ( event, tab ) => {
		if ( event.key === 'ArrowLeft' || event.key === 'ArrowUp' ) {
			event.preventDefault();
			selectTabByOffset( tab, -1 );
		}

		if ( event.key === 'ArrowRight' || event.key === 'ArrowDown' ) {
			event.preventDefault();
			selectTabByOffset( tab, 1 );
		}

		if ( event.key === 'Home' ) {
			event.preventDefault();
			selectTab( enabledTabs[ 0 ] );
		}

		if ( event.key === 'End' ) {
			event.preventDefault();
			selectTab( enabledTabs[ enabledTabs.length - 1 ] );
		}
	};

	return (
		<div
			className={ classNames( 'vovapg-sidebar-tabs-control', className ) }
			role="tablist"
			aria-label={ ariaLabel }
		>
			{ normalizedTabs.map( ( tab ) => {
				const isSelected = tab.name === selectedTabName;

				return (
					<Button
						key={ tab.name }
						className={ classNames(
							'vovapg-sidebar-tabs-control__tab',
							isSelected && 'is-active',
							tab.className
						) }
						role="tab"
						tabIndex={ isSelected ? 0 : -1 }
						aria-selected={ isSelected }
						aria-controls={ tab.panelId }
						disabled={ tab.disabled }
						onClick={ () => selectTab( tab ) }
						onKeyDown={ ( event ) => onKeyDown( event, tab ) }
					>
						<span className="vovapg-sidebar-tabs-control__label">
							{ tab.title }
						</span>
					</Button>
				);
			} ) }
		</div>
	);
}
