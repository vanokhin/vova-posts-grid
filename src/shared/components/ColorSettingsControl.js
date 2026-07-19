/* eslint-disable @wordpress/no-unsafe-wp-apis */
import {
	__experimentalColorGradientControl as ColorGradientControl,
	__experimentalUseMultipleOriginColorsAndGradients as useColorsAndGradientsPalettes,
} from '@wordpress/block-editor';
import {
	Button,
	ColorIndicator,
	Dropdown,
	__experimentalDropdownContentWrapper as DropdownContentWrapper,
	__experimentalHStack as HStack,
	__experimentalSpacer as Spacer,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import { useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const noop = () => {};

const GRADIENT_PATTERN = /^(repeating-)?(linear|radial|conic)-gradient\(/i;
const PALETTE_PROP_KEYS = [
	'colors',
	'disableCustomColors',
	'gradients',
	'disableCustomGradients',
];

const DEFAULT_POPOVER_PROPS = {
	placement: 'left-start',
	offset: 36,
	shift: true,
};

let panelId = 0;

const isGradientValue = ( value ) =>
	typeof value === 'string' && GRADIENT_PATTERN.test( value.trim() );

const classNames = ( ...values ) => values.filter( Boolean ).join( ' ' );

const getResetValue = ( control ) =>
	control.resetValue === undefined ? '' : control.resetValue;

const getControlValue = ( attributes, control ) =>
	attributes?.[ control.attribute ] ?? '';

const getDefinedProps = ( source, keys ) => {
	const props = {};

	keys.forEach( ( key ) => {
		if ( source[ key ] !== undefined ) {
			props[ key ] = source[ key ];
		}
	} );

	return props;
};

const hasPaletteProps = ( props ) =>
	PALETTE_PROP_KEYS.every( ( key ) =>
		Object.prototype.hasOwnProperty.call( props, key )
	);

const getNextPanelId = () => {
	panelId += 1;

	return `vovapg-color-settings-control-${ panelId }`;
};

const resetSetting = ( setting ) => {
	const resetValue = setting.resetValue ?? '';

	if ( isGradientValue( resetValue ) ) {
		setting.onGradientChange?.( resetValue );
		setting.onColorChange?.();

		return;
	}

	setting.onColorChange?.( resetValue );
	setting.onGradientChange?.();
};

const hasSettingValue = ( setting ) =>
	Boolean( setting.colorValue || setting.gradientValue );

const ColorLabel = ( { colorValue, label } ) => (
	<HStack justify="flex-start">
		<ColorIndicator
			className="block-editor-panel-color-gradient-settings__color-indicator"
			colorValue={ colorValue }
		/>
		<span
			className="block-editor-panel-color-gradient-settings__color-name"
			title={ label }
		>
			{ label }
		</span>
	</HStack>
);

const renderToggle =
	( { colorValue, label } ) =>
	( { isOpen, onToggle } ) => (
		<Button
			className={ classNames(
				'block-editor-panel-color-gradient-settings__dropdown',
				isOpen && 'is-open'
			) }
			onClick={ onToggle }
			aria-expanded={ isOpen }
		>
			<ColorLabel colorValue={ colorValue } label={ label } />
		</Button>
	);

const ColorSettingsPanelItem = ( {
	setting,
	children,
	panelId: itemPanelId,
} ) => (
	<ToolsPanelItem
		hasValue={ () => hasSettingValue( setting ) }
		label={ setting.label }
		onDeselect={ () => resetSetting( setting ) }
		isShownByDefault={
			setting.isShownByDefault !== undefined
				? setting.isShownByDefault
				: true
		}
		className="block-editor-tools-panel-color-gradient-settings__item"
		panelId={ itemPanelId }
		resetAllFilter={ setting.resetAllFilter }
	>
		{ children }
	</ToolsPanelItem>
);

const ColorSettingsDropdown = ( {
	colors,
	disableCustomColors,
	disableCustomGradients,
	enableAlpha,
	gradients,
	settings,
	__experimentalIsRenderedInSidebar,
	panelId: dropdownPanelId,
} ) => {
	const popoverProps = __experimentalIsRenderedInSidebar
		? DEFAULT_POPOVER_PROPS
		: undefined;

	return (
		<>
			{ settings.map( ( setting, index ) => {
				if ( ! setting ) {
					return null;
				}

				const controlProps = {
					clearable: false,
					colorValue: setting.colorValue,
					colors,
					disableCustomColors,
					disableCustomGradients,
					enableAlpha,
					gradientValue: setting.gradientValue,
					gradients,
					label: setting.label,
					onColorChange: setting.onColorChange,
					onGradientChange: setting.onGradientChange,
					showTitle: false,
					__experimentalIsRenderedInSidebar,
					...setting,
				};
				const toggleSettings = {
					colorValue: setting.gradientValue ?? setting.colorValue,
					label: setting.label,
				};

				return (
					<ColorSettingsPanelItem
						key={ setting.attribute || index }
						setting={ setting }
						panelId={ dropdownPanelId }
					>
						<Dropdown
							popoverProps={ popoverProps }
							className="block-editor-tools-panel-color-gradient-settings__dropdown"
							renderToggle={ renderToggle( toggleSettings ) }
							renderContent={ () => (
								<DropdownContentWrapper paddingSize="none">
									<div className="block-editor-panel-color-gradient-settings__dropdown-content">
										<ColorGradientControl
											{ ...controlProps }
										/>
										<div className="vovapg-color-settings-control__reset">
											<Button
												variant="secondary"
												onClick={ () =>
													resetSetting( setting )
												}
											>
												{ __(
													'Reset',
													'vova-posts-grid'
												) }
											</Button>
										</div>
									</div>
								</DropdownContentWrapper>
							) }
						/>
					</ColorSettingsPanelItem>
				);
			} ) }
		</>
	);
};

const hasAvailableColorControls = ( {
	colors,
	gradients,
	disableCustomColors,
	disableCustomGradients,
	settings,
} ) =>
	( colors && colors.length > 0 ) ||
	( gradients && gradients.length > 0 ) ||
	! disableCustomColors ||
	! disableCustomGradients ||
	settings?.some(
		( setting ) =>
			( setting.colors && setting.colors.length > 0 ) ||
			( setting.gradients && setting.gradients.length > 0 ) ||
			setting.disableCustomColors === false ||
			setting.disableCustomGradients === false
	);

const PanelColorGradientSettings = ( props ) => {
	const colorGradientSettings = useColorsAndGradientsPalettes();
	const hasProps = hasPaletteProps( props );
	const paletteProps = hasProps
		? getDefinedProps( props, PALETTE_PROP_KEYS )
		: {
				...colorGradientSettings,
				...getDefinedProps( props, PALETTE_PROP_KEYS ),
		  };
	const {
		children,
		className,
		enableAlpha,
		settings,
		showTitle = true,
		title,
		__experimentalIsRenderedInSidebar,
	} = props;
	const currentPanelId = useMemo( getNextPanelId, [] );

	if ( ! hasAvailableColorControls( { ...paletteProps, settings } ) ) {
		return null;
	}

	return (
		<ToolsPanel
			className={ classNames(
				'block-editor-panel-color-gradient-settings',
				className
			) }
			label={ showTitle ? title : undefined }
			resetAll={ () => settings.forEach( resetSetting ) }
			panelId={ currentPanelId }
			__experimentalFirstVisibleItemClass="first"
			__experimentalLastVisibleItemClass="last"
		>
			<ColorSettingsDropdown
				settings={ settings }
				panelId={ currentPanelId }
				enableAlpha={ enableAlpha }
				__experimentalIsRenderedInSidebar={
					__experimentalIsRenderedInSidebar
				}
				{ ...paletteProps }
			/>
			{ !! children && (
				<>
					<Spacer marginY={ 4 } /> { children }
				</>
			) }
		</ToolsPanel>
	);
};

export default function ColorSettingsControl( {
	attributes = {},
	setAttributes = noop,
	controls = [],
	title = __( 'Color settings', 'vova-posts-grid' ),
	className,
	colors,
	disableCustomColors,
	gradients,
	disableCustomGradients,
	enableAlpha,
	showTitle = true,
	__experimentalIsRenderedInSidebar = true,
} ) {
	const settings = controls
		.filter( ( control ) => control?.attribute && control?.label )
		.map( ( control ) => {
			const value = getControlValue( attributes, control );
			const isGradient =
				control.enableGradient && isGradientValue( value );
			const resetValue = getResetValue( control );
			const updateAttribute = ( nextValue ) => {
				setAttributes( {
					[ control.attribute ]: nextValue || resetValue,
				} );
			};
			const setting = {
				...getDefinedProps( control, PALETTE_PROP_KEYS ),
				attribute: control.attribute,
				label: control.label,
				colorValue: isGradient ? undefined : value,
				onColorChange: updateAttribute,
				isShownByDefault: control.isShownByDefault !== false,
				resetValue,
			};

			if ( control.enableGradient ) {
				setting.gradientValue = isGradient ? value : undefined;
				setting.onGradientChange = updateAttribute;
			} else {
				setting.gradients = [];
				setting.disableCustomGradients = true;
			}

			return setting;
		} );

	if ( settings.length === 0 ) {
		return null;
	}

	const panelProps = {
		className: classNames( 'vovapg-color-settings-control', className ),
		title,
		showTitle,
		settings,
		__experimentalIsRenderedInSidebar,
		...getDefinedProps(
			{
				colors,
				disableCustomColors,
				gradients,
				disableCustomGradients,
			},
			PALETTE_PROP_KEYS
		),
	};

	if ( enableAlpha !== undefined ) {
		panelProps.enableAlpha = enableAlpha;
	}

	return <PanelColorGradientSettings { ...panelProps } />;
}
