declare module 'components/autocomplete/ProductMatches' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/autocomplete/ProductMatches/view' {
import React from 'react';
import { List } from 'immutable';
import { ThemedSFCProps, IProduct, MJSConfiguration, WidgetAwareProps, SuggestionsConnectedProps } from 'types';
export interface IProductMatchesProps extends ThemedSFCProps, WidgetAwareProps, SuggestionsConnectedProps {
    items: List<IProduct>;
    className?: string;
    columnClass?: string;
    config: MJSConfiguration;
    columns: number;
    limit: number;
}
const ProductMatchesView: React.SFC<IProductMatchesProps>;
export default ProductMatchesView;

}
declare module 'components/autocomplete/SearchSuggestions' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/autocomplete/SearchSuggestions/test' {
export {};

}
declare module 'components/autocomplete/SearchSuggestions/view' {
import React from 'react';
import { ThemedSFCProps, WidgetAwareProps, SuggestionsConnectedProps, IQuery } from 'types';
export interface ISearchSuggestionsProps extends ThemedSFCProps, WidgetAwareProps, SuggestionsConnectedProps {
    query: IQuery;
    [x: string]: any;
}
const SearchSuggestionsView: React.SFC<ISearchSuggestionsProps>;
export default SearchSuggestionsView;

}
declare module 'components/autocomplete/SuggestionItem' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/autocomplete/SuggestionItem/test' {
export {};

}
declare module 'components/autocomplete/SuggestionItem/view' {
import React from 'react';
import { ISuggestion, ISuggestionProps, IQuery, ThemedSFCProps } from 'types';
export interface ISuggestionItemProps extends ThemedSFCProps, ISuggestionProps {
    item: ISuggestion;
    query: IQuery;
    highlighted: boolean;
    icon: string;
    isTrendingSearches: boolean;
    [x: string]: any;
}
const SuggestionItemView: React.SFC<ISuggestionItemProps>;
export default SuggestionItemView;

}
declare module 'components/autocomplete/Tip' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/autocomplete/Tip/test' {
export {};

}
declare module 'components/autocomplete/Tip/view' {
import React from 'react';
import { ThemedSFCProps, ClassnamedProps, WidgetAwareProps, SuggestionsConnectedProps } from 'types';
export interface ITipProps extends ThemedSFCProps, ClassnamedProps, WidgetAwareProps, SuggestionsConnectedProps {
    title: string;
    zeroResultsTitle: string;
}
const TipView: React.SFC<ITipProps>;
export default TipView;

}
declare module 'components/Banner' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/Banner/view' {
import React from 'react';
import { ThemedSFCProps, IBanner } from 'types';
export interface IBannerProps extends ThemedSFCProps {
    banner: IBanner;
    [x: string]: any;
}
const BannerView: React.SFC<IBannerProps>;
export default BannerView;

}
declare module 'components/Breadcrumbs/createBreadcrumb' {
import React from 'react';
import { FilterType, ThemedSFCProps, IFacet, MJSConfiguration } from 'types';
export type FilterMapping = {
    [x in FilterType]: React.SFC<any>;
};
export interface IFilterProps {
    item: any;
    mapping: FilterMapping;
    type: FilterType;
    name: string;
}
export interface IFilterListProps extends ThemedSFCProps {
    item: IFacet;
    config: MJSConfiguration;
}
const _default: (mapping: FilterMapping) => ({ item, children, theme, config }: IFilterListProps) => JSX.Element;
export default _default;

}
declare module 'components/Breadcrumbs' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/Breadcrumbs/view' {
import React from 'react';
import { IFacet, MJSConfiguration, ThemedSFCProps } from 'types';
import { List } from 'immutable';
export interface IBreadcrumbProps extends ThemedSFCProps {
    filters: List<IFacet>;
    config: MJSConfiguration;
}
const BreadcrumbsView: React.SFC<IBreadcrumbProps>;
export default BreadcrumbsView;

}
declare module 'components/Button' {
const _default: import("react").ComponentClass<any, any>;
export default _default;

}
declare module 'components/Button/view' {
import React from 'react';
import { ClassnamedProps, ThemedSFCProps } from 'types';
export interface IButtonProps extends ThemedSFCProps, ClassnamedProps {
    onClick?: (evt: Event) => any;
    active?: boolean;
    raw?: boolean;
    disabled?: boolean;
    [x: string]: any;
}
const ButtonView: React.SFC<IButtonProps>;
export default ButtonView;

}
declare module 'components/Cards/Content' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/Cards/Content/view' {
const _default: import("react").ComponentClass<Pick<{
    onClick: (e: any) => void;
}, never>, any>;
export default _default;

}
declare module 'components/Cards/Product/BundleAction' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/Cards/Product/BundleAction/view' {
const _default: ({ theme, onClick, selected }: any) => JSX.Element;
export default _default;

}
declare module 'components/Cards/Product' {
const ProductCard: any;
export default ProductCard;

}
declare module 'components/Cards/Product/Price' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/Cards/Product/Price/view' {
import React from 'react';
import { List } from 'immutable';
import { ClassnamedProps, ThemedSFCProps } from 'types';
export interface IPriceProps extends ThemedSFCProps, ClassnamedProps {
    price: List<number>;
    oldPrice?: number;
    currency: string;
    discount: List<number>;
    hasDiscount: boolean;
    hasCompare: boolean;
}
const PriceView: React.SFC<IPriceProps>;
export default PriceView;

}
declare module 'components/Cards/Product/Rating' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/Cards/Product/Rating/test' {
export {};

}
declare module 'components/Cards/Product/Rating/view' {
import 'core-js/features/array/from';
import React from 'react';
import { ThemedSFCProps } from 'types';
export interface IRatingProps extends ThemedSFCProps {
    value: number;
    count: number;
}
const RatingView: React.SFC<IRatingProps>;
export default RatingView;

}
declare module 'components/Cards/Product/Stickers' {
import React from 'react';
export const DiscountSticker: {
    new (props: any): {
        componentWillReceiveProps(nextProps: any): void;
        render(): React.ComponentElement<{
            theme: any;
            children?: React.ReactNode;
        }, React.Component<{
            theme: any;
            children?: React.ReactNode;
        }, any, any>>;
        context: any;
        setState<K extends never>(state: {} | Pick<{}, K> | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    contextType?: React.Context<any> | undefined;
};
export const OutOfStockSticker: {
    new (props: any): {
        componentWillReceiveProps(nextProps: any): void;
        render(): React.ComponentElement<{
            theme: any;
            children?: React.ReactNode;
        }, React.Component<{
            theme: any;
            children?: React.ReactNode;
        }, any, any>>;
        context: any;
        setState<K extends never>(state: {} | Pick<{}, K> | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    contextType?: React.Context<any> | undefined;
};

}
declare module 'components/Cards/Product/test' {
export {};

}
declare module 'components/Cards/Product/view' {
import React from 'react';
import { IProduct, MJSConfiguration, ThemedSFCProps } from 'types/index';
export interface IProductCardProps extends ThemedSFCProps {
    item: IProduct;
    config: MJSConfiguration;
}
const ProductCardView: React.SFC<IProductCardProps>;
export default ProductCardView;

}
declare module 'components/CategoryFacet/content' {
const extractContent: ({ item }: {
    item: any;
}) => any;
export default extractContent;

}
declare module 'components/CategoryFacet' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/CategoryFacet/Item' {
import { ThemedSFCProps, MJSConfiguration } from 'types';
export interface ICategoryFacetCategoryProps extends ThemedSFCProps {
    item: any;
    style: {
        [x: string]: string | number;
    };
    config: MJSConfiguration;
}
const Item: ({ item, theme, style, config }: ICategoryFacetCategoryProps) => JSX.Element;
export default Item;

}
declare module 'components/CategoryFacet/view' {
import { IFacet, ThemedSFCProps, MJSConfiguration } from 'types';
import { List, Map } from 'immutable';
export interface ICategoryFacetProps extends ThemedSFCProps {
    facet: IFacet;
    items: List<Map<string, string | boolean | number>>;
    total: number;
    config: MJSConfiguration;
    isExpanded?: boolean;
    onToggle: (evt: Event) => any;
    hidden: boolean;
}
const CategoryFacetView: ({ theme, items, config, facet, total, isExpanded, onToggle, hidden }: ICategoryFacetProps) => JSX.Element;
export default CategoryFacetView;

}
declare module 'components/CheckboxFacet/content' {
const extractContent: ({ item }: {
    item: any;
}) => any;
export default extractContent;

}
declare module 'components/CheckboxFacet' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/CheckboxFacet/Item' {
import { IFacetValue, ThemedSFCProps } from 'types';
export interface ICheckboxFacetItemProps extends ThemedSFCProps {
    item: IFacetValue;
    onItemClick?: (evt: Event) => any;
    style: {
        [x: string]: string | number;
    };
}
const Item: ({ item, theme, style, onItemClick }: ICheckboxFacetItemProps) => JSX.Element;
export default Item;

}
declare module 'components/CheckboxFacet/view' {
import { ChangeEvent } from 'react';
import { IFacetValue, ThemedSFCProps, MJSConfiguration, IFacet } from 'types';
import { List } from 'immutable';
export interface ICheckboxFacetProps extends ThemedSFCProps {
    items: List<IFacetValue>;
    facet: IFacet;
    config: MJSConfiguration;
    search?: string;
    isExpanded?: boolean;
    isMobile?: boolean;
    onSearch: (evt: ChangeEvent<HTMLInputElement>) => any;
    onToggle: (evt: Event) => any;
    hidden: boolean;
}
const CheckboxFacetView: ({ theme, items, config, search, isExpanded, onSearch, onToggle, isMobile, facet, hidden, }: ICheckboxFacetProps) => JSX.Element;
export default CheckboxFacetView;

}
declare module 'components/ColorFacet/content' {
import React from 'react';
const _default: React.NamedExoticComponent<object>;
export default _default;

}
declare module 'components/ColorFacet' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/ColorFacet/Item' {
import { IFacetValue, MJSConfiguration, ThemedSFCProps } from 'types';
export interface IColorFacetItemProps extends ThemedSFCProps {
    item: IFacetValue;
    config: MJSConfiguration;
}
const Item: ({ item, theme, config }: IColorFacetItemProps) => JSX.Element;
export default Item;

}
declare module 'components/ColorFacet/view' {
import { ThemedSFCProps, MJSConfiguration, IFacetValue, IFacet } from 'types';
import { List } from 'immutable';
export interface IColorFacetProps extends ThemedSFCProps {
    config: MJSConfiguration;
    items: List<IFacetValue>;
    facet: IFacet;
    hidden: boolean;
}
const ColorFacetView: ({ theme, items, config, facet, hidden }: IColorFacetProps) => JSX.Element;
export default ColorFacetView;

}
declare module 'components/common/Announcement' {
export const Component: ({ text }: {
    text: any;
}) => JSX.Element;
export const useAnnouncement: () => [JSX.Element, (text: any) => void];
export default Component;

}
declare module 'components/common/Branch' {
import React from 'react';
export interface IBranchProps {
    'display-if'?: boolean;
    left?: React.ComponentType;
    right?: React.ComponentType;
    condition?: boolean;
    [x: string]: any;
}
const Branch: ({ left, right, children, condition, ...props }: IBranchProps) => JSX.Element;
export default Branch;

}
declare module 'components/common/Drawer' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/common/Drawer/view' {
import { ThemedSFCProps } from 'types';
export interface IDrawerViewState {
    open: boolean;
}
export interface IDrawerViewProps extends ThemedSFCProps {
    options: {
        from: {
            [x: string]: string | number;
        };
        to: {
            [x: string]: string | number;
        };
        easing?: string;
        className?: string;
    };
    [x: string]: any;
}
const Drawer: ({ hideModal, name, theme, options, children, ...rest }: IDrawerViewProps) => JSX.Element;
export default Drawer;

}
declare module 'components/common/Grid/Column' {
import React from 'react';
export interface IGridColumnProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactChild;
    gutter?: string | number;
    size: string;
    order?: number;
    component: React.ComponentType<any> | string;
}
export const Column: ({ className, style, children, gutter, order: _order, size: _size, component: Component }: IGridColumnProps) => JSX.Element;
export const Placeholder: ({ size }: {
    size: any;
}) => JSX.Element;

}
declare module 'components/common/Grid' {
import React from 'react';
import { ThemedSFCProps } from 'types';
export interface IGridProps extends ThemedSFCProps {
    columns: string | {
        [x: number]: string | number;
    };
    className?: string;
    style?: React.CSSProperties;
    gutter?: number | string;
    columnClass?: string;
    columnStyle?: React.CSSProperties;
    wrapperComponent: React.ComponentType<any> | string;
    columnComponent: React.ComponentType<any> | string;
}
const _default: ({ children: _children, theme: _theme, columns: _columns, gutter: _gutter, className, style, columnStyle, wrapperComponent: WrapperComponent, columnComponent, ...rest }: IGridProps) => JSX.Element;
export default _default;

}
declare module 'components/common/Image' {
import 'core-js/features/array/includes';
export interface ImageProps {
    className?: string;
    src: string;
    thumbnail?: string;
    aspectRatio?: number;
    lazy?: boolean;
    offset?: number;
    size: {
        width: number;
    };
    isFixedRatio: boolean;
}
const _default: import("react").ComponentClass<ImageProps, any>;
export default _default;

}
declare module 'components/common/Image/test' {
export {};

}
declare module 'components/common/MapArray' {
import React from 'react';
export type MapCallback = (item: any, index: number, arrayLike: ArrayLike) => any;
export type KeyAccessor = (item: any, index: number) => string;
export type ArrayLike = {
    map: (callback: MapCallback) => any;
    length?: number;
    size?: number;
    slice: (from: number, to?: number) => ArrayLike;
};
export type ReactFactory = (props: object) => React.Component;
export type MapArrayProps = {
    array: ArrayLike;
    keyAccessor?: KeyAccessor;
    factory: ReactFactory;
    limit?: number;
    [key: string]: any;
};
const _default: ({ array, keyAccessor, factory, limit, ...rest }: MapArrayProps) => any;
export default _default;

}
declare module 'components/common/MapArray/test' {
export {};

}
declare module 'components/common/Picture' {
const _default: ({ aspectRatio, lazy, offset, getSrc, getThumbnail, src, alt, thumbnail }: {
    aspectRatio: any;
    lazy: any;
    offset?: number | undefined;
    getSrc: any;
    getThumbnail: any;
    src: any;
    alt: any;
    thumbnail: any;
}) => JSX.Element;
export default _default;

}
declare module 'components/common/Picture/test' {
export {};

}
declare module 'components/common/Sticky' {
import React from 'react';
export interface IStickyProps {
    offset?: number;
    minHeight?: number;
    stickToTop?: boolean;
}
const _default: {
    new (props: any): {
        componentWillReceiveProps(nextProps: any): void;
        render(): React.ComponentElement<{
            theme: any;
            children?: React.ReactNode;
        }, React.Component<{
            theme: any;
            children?: React.ReactNode;
        }, any, any>>;
        context: any;
        setState<K extends never>(state: {} | Pick<{}, K> | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    contextType?: React.Context<any> | undefined;
};
export default _default;

}
declare module 'components/common/Sticky/view' {
const _default: ({ theme, registerRoot, registerContainer, registerSizer, children, state, title }: {
    theme: any;
    registerRoot: any;
    registerContainer: any;
    registerSizer: any;
    children: any;
    state: any;
    title: any;
}) => JSX.Element;
export default _default;

}
declare module 'components/common/Truncate' {
const _default: ({ children }: {
    children: any;
}) => JSX.Element;
export default _default;

}
declare module 'components/common/VirtualizedList' {
import { Component } from 'react';
import { CellMeasurerCache } from 'react-virtualized/dist/commonjs/CellMeasurer';
class List extends Component<any, any> {
    autoSizer: any;
    list: any;
    cache: CellMeasurerCache;
    static displayName: string;
    constructor(props: any);
    initAutoSizer: (ref: any) => void;
    initList: (ref: any) => void;
    handleScroll: ({ target }: {
        target: any;
    }) => void;
    rowRenderer: ({ index, key, parent, style }: {
        index: any;
        key: any;
        parent: any;
        style: any;
    }) => import("react").DetailedReactHTMLElement<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    render(): any;
}
export default List;

}
declare module 'components/common/VirtualizedList/view' {
const _default: ({ initAutoSizer, initList, array, cache, handleScroll, rowRenderer, className, theme, }: {
    initAutoSizer: any;
    initList: any;
    array: any;
    cache: any;
    handleScroll: any;
    rowRenderer: any;
    className: any;
    theme: any;
}) => JSX.Element;
export default _default;

}
declare module 'components/Dropdown' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/Dropdown/view' {
import { MJSValue, ThemedSFCProps, ClassnamedProps } from 'types';
import { List, Map } from 'immutable';
export interface IDropdownItemProps extends ThemedSFCProps {
    item: Map<string, MJSValue>;
    index: number;
    highlighted: number;
    getItemProps: (item: {
        item: Map<string, MJSValue>;
    }) => {
        [x: string]: any;
    };
}
export interface IDropdownProps extends ClassnamedProps, ThemedSFCProps {
    onChange: (x: any) => any;
    items: List<Map<string, MJSValue>>;
    selectedItem: Map<string, MJSValue>;
}
const DropdownView: ({ onChange, items, selectedItem, theme, className }: IDropdownProps) => JSX.Element;
export default DropdownView;

}
declare module 'components/Facet/Component' {
import React from 'react';
import { FilterType } from 'types';
export const getComponent: (type: FilterType) => React.ComponentClass<unknown, any>;
const _default: import("react").ComponentClass<any, any>;
export default _default;

}
declare module 'components/Facet' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/Facet/view' {
import React from 'react';
import { ThemedSFCProps, IFacet, MJSConfiguration } from 'types';
export interface IFacetProps extends ThemedSFCProps {
    FacetComponent: React.Component<any>;
    isOpen?: boolean;
    isMobile?: boolean;
    title: string;
    item: IFacet;
    config: MJSConfiguration;
    filtersSelected: number;
    toggleFacet: () => any;
}
const FacetView: ({ FacetComponent, isOpen, theme, title, item, config, filtersSelected, toggleFacet }: IFacetProps) => JSX.Element;
export default FacetView;

}
declare module 'components/Icon' {
import React from 'react';
export const icons: {
    Filters: any;
    Fire: any;
    Minus: any;
    Plus: any;
    Search: any;
    Sorting: any;
    CheckmarkDark: any;
    Star: any;
    XDark: any;
    XMobile: any;
    RadioEmpty: any;
    RadioFilled: any;
    ArrowBack: any;
    ArrowDown: any;
    ArrowUp: any;
    ArrowLeft: any;
    ArrowRight: any;
    ArrowLeftBig: any;
    ArrowRightBig: any;
    CheckboxFilled: any;
    CheckboxEmpty: any;
    ExternalLink: any;
};
export type IIconProps = {
    name: keyof typeof icons;
    width?: number;
    height?: number;
    className?: string;
    [x: string]: any;
};
const Icon: ({ name, width, height, className, ...rest }: IIconProps) => React.CElement<{
    width: number | undefined;
    height: number | undefined;
    className: any;
}, React.Component<{
    width: number | undefined;
    height: number | undefined;
    className: any;
}, any, any>>;
export default Icon;

}
declare module 'components/ItemsList' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/ItemsList/view' {
import React from 'react';
import { MapArrayProps } from 'components/common/MapArray';
export interface IItemsListProps extends MapArrayProps {
    wrapper: React.ComponentType;
    [x: string]: any;
}
const _default: ({ items, wrapper: Wrapper, ...rest }: IItemsListProps) => JSX.Element;
export default _default;

}
declare module 'components/Pagination' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/Pagination/view' {
import { ThemedSFCProps, MJSConfiguration } from 'types';
export interface IPaginationProps extends ThemedSFCProps {
    config: MJSConfiguration;
    current: number;
    total: number;
    showPrev: boolean;
    showFirst: boolean;
    showFirstDots: boolean;
    showLastDots: boolean;
    showLast: boolean;
    showNext: boolean;
    visiblePages: number[];
    getPageProps: (pageNumber: number) => {
        [x: string]: any;
    };
}
const _default: ({ theme, config, current, getPageProps, total, meta, showPrev, showFirst, showFirstDots, showLastDots, showLast, showNext, visiblePages, }: IPaginationProps) => JSX.Element;
export default _default;

}
declare module 'components/PoweredBy' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/PoweredBy/view' {
const _default: ({ config, theme }: {
    config: any;
    theme: any;
}) => JSX.Element;
export default _default;

}
declare module 'components/RangeFacet/content' {
const _default: ({ item, config }: {
    item: any;
    config: any;
}) => any;
export default _default;

}
declare module 'components/RangeFacet' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/RangeFacet/Item' {
import React from 'react';
import { ThemedSFCProps, IFacetValue, MJSConfiguration } from 'types';
export interface IRangeFacetItemProps extends ThemedSFCProps {
    item: IFacetValue;
    style: React.CSSProperties;
    config: MJSConfiguration;
}
const _default: ({ item, theme, style, config }: IRangeFacetItemProps) => JSX.Element;
export default _default;

}
declare module 'components/RangeFacet/view' {
import React from 'react';
import { ThemedSFCProps, IFacet, IFacetValue, MJSConfiguration } from 'types';
import { List } from 'immutable';
export interface IRangeFacetProps extends ThemedSFCProps {
    facet: IFacet;
    items: List<IFacetValue>;
    config: MJSConfiguration;
    currencySymbol: string;
    from: number;
    to: number;
    onChangeMax: (evt?: React.ChangeEvent<any>) => any;
    onChangeMin: (evt?: React.ChangeEvent<any>) => any;
    onKeypressMin: (evt: any) => any;
    onKeypressMax: (evt: any) => any;
    onPressButton: () => any;
    hidden: boolean;
}
const _default: ({ theme, facet, items, config, currencySymbol, from, to, onChangeMax, onChangeMin, onKeypressMin, onKeypressMax, onPressButton, hidden }: IRangeFacetProps) => JSX.Element;
export default _default;

}
declare module 'components/RatingFacet/content' {
const _default: ({ item, theme, config }: {
    item: any;
    theme: any;
    config: any;
}) => JSX.Element;
export default _default;

}
declare module 'components/RatingFacet' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/RatingFacet/Item' {
import React from 'react';
import { IFacetValue, ThemedSFCProps, MJSConfiguration } from 'types';
export interface IRatingFacetItemProps extends ThemedSFCProps {
    item: IFacetValue;
    style: React.CSSProperties;
    config: MJSConfiguration;
}
const RatingFacetItem: React.SFC<IRatingFacetItemProps>;
export default RatingFacetItem;

}
declare module 'components/RatingFacet/view' {
import React from 'react';
import { IFacet, IFacetValue, MJSConfiguration, ThemedSFCProps } from 'types';
import { List } from 'immutable';
export interface IRatingFacetProps extends ThemedSFCProps {
    facet: IFacet;
    items: List<IFacetValue>;
    config: MJSConfiguration;
    hidden: boolean;
}
const RatingFacet: React.SFC<IRatingFacetProps>;
export default RatingFacet;

}
declare module 'components/search/DesktopActions' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/search/DesktopActions/view' {
import React from 'react';
import { ThemedSFCProps, MJSConfiguration } from 'types';
export interface IDesktopActionsProps extends ThemedSFCProps {
    showFacets: () => any;
    facetsVisible: boolean;
    isCollection: boolean;
    config: MJSConfiguration;
}
const DesktopActionsView: React.FunctionComponent<IDesktopActionsProps>;
export default DesktopActionsView;

}
declare module 'components/search/DesktopFacets' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/search/DesktopFacets/Title' {
import React from 'react';
import { ThemedSFCProps, MJSConfiguration, MJSValue } from 'types';
import { Map } from 'immutable';
export interface IHidableProps extends ITitlesProps {
    onHide: () => any;
}
export interface ITitlesProps extends ThemedSFCProps {
    config: MJSConfiguration;
    meta: Map<string, MJSValue>;
    onReset: () => any;
}
const defaultTitles: React.SFC<ITitlesProps>;
export default defaultTitles;
export const hidable: React.SFC<IHidableProps>;

}
declare module 'components/search/DesktopFacets/view' {
import React from 'react';
import { MJSConfiguration, ThemedSFCProps, IFacet, MJSValue } from 'types';
import { List, Map } from 'immutable';
export interface IDesktopFacetsProps extends ThemedSFCProps {
    config: MJSConfiguration;
    facets: List<IFacet>;
    onReset: () => any;
    meta: Map<string, MJSValue>;
    hideFacets: () => any;
    visible: boolean;
}
const DesktopFacetsView: React.SFC<IDesktopFacetsProps>;
export default DesktopFacetsView;

}
declare module 'components/search/LazyResults' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/search/LazyResults/view' {
import { ThemedSFCProps, IProduct, MJSConfiguration } from 'types';
import { List } from 'immutable';
export interface ILazyResultsProps extends ThemedSFCProps {
    items: List<IProduct>;
    config: MJSConfiguration;
    columns: string;
    onLoadNext: () => any;
    onLoadPrev: () => any;
    displayNextButton: boolean;
    displayPrevButton: boolean;
    [x: string]: any;
}
const LazyResultsView: ({ items, config, theme, card, columns, onLoadNext, onLoadPrev, displayNextButton, displayPrevButton, ...rest }: ILazyResultsProps) => JSX.Element;
export default LazyResultsView;

}
declare module 'components/search/MobileActions' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/search/MobileActions/view' {
import React from 'react';
import { MJSConfiguration, ThemedSFCProps } from 'types';
export interface IMobileActionsProps extends ThemedSFCProps {
    isCollection?: boolean;
    total: number;
    showFacets?: boolean;
    showSort?: boolean;
    config: MJSConfiguration;
    sorting: string;
}
const MobileActionsView: React.SFC<IMobileActionsProps>;
export default MobileActionsView;

}
declare module 'components/search/MobileFacets' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/search/MobileFacets/Titles' {
import React from 'react';
import { ThemedSFCProps, IFacet, MJSConfiguration } from 'types';
import { List } from 'immutable';
export interface IMobileFacetsLabelProps extends ThemedSFCProps {
    item: IFacet;
    filterCount?: number;
    config: MJSConfiguration;
    onClick: (evt?: React.MouseEvent<any>) => any;
}
export interface IMobileFacetsTitlesProps extends ThemedSFCProps {
    facets: List<IFacet>;
    selectFacet: (name: string) => any;
    config: MJSConfiguration;
}
const MobileFacetsTitlesView: ({ theme, facets, selectFacet, config }: IMobileFacetsTitlesProps) => JSX.Element;
export default MobileFacetsTitlesView;

}
declare module 'components/search/MobileFacets/view' {
import { ThemedSFCProps, IFacet, MJSConfiguration, MJSValue } from 'types';
import { List } from 'immutable';
export interface IFacetContentProps extends ThemedSFCProps {
    active: IFacet;
    config: MJSConfiguration;
}
export interface IMobileFacetsProps extends ThemedSFCProps {
    facets: List<IFacet>;
    activeFacet?: IFacet;
    selectFacet: (name?: string) => any;
    onReset: () => any;
    config: MJSConfiguration;
    meta: Map<string, MJSValue>;
    hideModal: (name: string) => any;
    total: number;
    filtersSelected: number;
}
const _default: ({ theme, facets, activeFacet, selectFacet, onReset, config, meta, hideModal, total, filtersSelected, }: IMobileFacetsProps) => JSX.Element;
export default _default;

}
declare module 'components/search/MobileSorting' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/search/MobileSorting/view' {
import React from 'react';
import { ThemedSFCProps, ISortingItem, MJSConfiguration } from 'types';
import { List } from 'immutable';
export interface IMobileSortingItemProps extends ThemedSFCProps {
    item: ISortingItem;
    index: number;
    onClick: (evt?: React.MouseEvent<any>) => any;
}
export interface IMobileSortingProps extends ThemedSFCProps {
    style: React.CSSProperties;
    hideModal: (name: string) => any;
    config: MJSConfiguration;
    items: List<ISortingItem>;
    setSorting: (index: number) => any;
}
const MobileSortingView: ({ theme, style, hideModal, config, items, setSorting }: IMobileSortingProps) => JSX.Element;
export default MobileSortingView;

}
declare module 'components/search/Query' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/search/Query/view' {
import { IQuery, MJSConfiguration, MJSValue, ThemedSFCProps } from 'types';
import { Map } from 'immutable';
export interface IGetContentProps {
    query: IQuery;
    config: MJSConfiguration;
    meta: Map<string, MJSValue>;
}
const QueryView: ({ theme, ...props }: ThemedSFCProps & IGetContentProps) => JSX.Element;
export default QueryView;

}
declare module 'components/search/StaticResults' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/search/StaticResults/view' {
import { ThemedSFCProps, MJSConfiguration } from 'types';
export interface IStaticResultsProps extends ThemedSFCProps {
    config: MJSConfiguration;
    columns: number;
}
const StaticResultsView: ({ theme }: IStaticResultsProps) => JSX.Element;
export default StaticResultsView;

}
declare module 'components/Sorting' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'components/Sorting/view' {
import { MJSConfiguration, ISortingItem, ThemedSFCProps } from 'types';
import { List } from 'immutable';
export interface ISortingProps extends ThemedSFCProps {
    onChangeSort?: (value: any) => void;
    config: MJSConfiguration;
    items: List<ISortingItem>;
    selectedItem: ISortingItem;
}
const Sorting: ({ onChangeSort, config, theme, items, selectedItem }: ISortingProps) => JSX.Element;
export default Sorting;

}
declare module 'components/Tabs' {
export const Tabs: import("react").ComponentClass<unknown, any>;
export const Tab: () => null;

}
declare module 'components/Tabs/test' {
export {};

}
declare module 'components/Tabs/view' {
import React from 'react';
import { ThemedSFCProps } from 'types';
export interface ITabsProps extends ThemedSFCProps {
    selectedIndex?: number;
    isMobile?: boolean;
    onTabClick: (evt: Event) => any;
    body: React.ReactChildren;
}
const TabsView: ({ theme, children, onTabClick, body, selectedIndex, isMobile }: ITabsProps) => JSX.Element;
export default TabsView;

}
declare module 'components/Text' {
const _default: import("react").ComponentClass<any, any>;
export default _default;

}
declare module 'components/Text/view' {
import { Component } from 'react';
import { ThemedSFCProps, ClassnamedProps } from 'types';
export interface ITextProps extends ThemedSFCProps, ClassnamedProps {
    component?: string | Component;
    mode?: string;
    bold?: boolean;
    style?: {
        [x: string]: string;
    };
    inlineBlock?: boolean;
    size?: string;
    html?: string;
}
const TextView: ({ component, className, children, mode, theme, bold, style, inlineBlock, size, html: __html, }: ITextProps) => import("react").DetailedReactHTMLElement<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export default TextView;

}
declare module 'helpers/bundle' {
/// <reference types="recompose" />
import React from 'react';
import { List } from 'immutable';
export const provideBundle: (getInitialItems?: (i: any) => any) => (BaseComponent: any) => {
    new (props: {} | Readonly<{}>): {
        state: {
            inBundle: List<any>;
        };
        getChildContext(): {
            inBundle: List<any>;
            updateBundle: (inBundle: any) => void;
        };
        updateBundle: (inBundle: any) => void;
        componentWillReceiveProps(next: any): void;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: {}, context: any): {
        state: {
            inBundle: List<any>;
        };
        getChildContext(): {
            inBundle: List<any>;
            updateBundle: (inBundle: any) => void;
        };
        updateBundle: (inBundle: any) => void;
        componentWillReceiveProps(next: any): void;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
    };
    childContextTypes: {
        inBundle: import("prop-types").Validator<object>;
        updateBundle: import("prop-types").Validator<(...args: any[]) => any>;
    };
    contextType?: React.Context<any> | undefined;
};
export const connectBundle: import("recompose").InferableComponentEnhancer<{
    inBundle: object;
    updateBundle: (...args: any[]) => any;
}>;

}
declare module 'helpers/chunks' {
/// <reference path="../../index.d.ts" />
const _default: {
    views: {
        search: () => Promise<typeof import("../layouts/Search")>;
        autocomplete: () => Promise<typeof import("../layouts/Autocomplete")>;
        recommendation: () => Promise<typeof import("../layouts/Recommendation")>;
        zeroResults: () => Promise<typeof import("../layouts/ZeroResults")>;
        custom: () => Promise<typeof import("../layouts/Custom")>;
        content: () => Promise<typeof import("../layouts/Content")>;
        tabs: () => Promise<typeof import("../layouts/Tabs")>;
    };
    autocomplete: {
        sidebar: () => Promise<typeof import("layouts/Autocomplete/Sidebar")>;
        dropdown: () => Promise<typeof import("layouts/Autocomplete/Dropdown")>;
        fullscreen: () => Promise<typeof import("layouts/Autocomplete/Fullscreen")>;
    };
    components: {
        virtualizedList: () => Promise<typeof import("components/common/VirtualizedList")>;
        drawer: () => Promise<typeof import("components/common/Drawer")>;
    };
};
export default _default;

}
declare module 'helpers/createPortal' {
import React, { Component } from 'react';
export class Portal extends Component<any> {
    element: any;
    static displayName: string;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): any;
}
export const portal: (children: any, extraProps?: {}) => React.CElement<any, Portal>;

}
declare module 'helpers/debounce' {
export const debounce: (fn: any, wait?: any) => () => void;

}
declare module 'helpers/deprecated' {
import React from 'react';
const _default: (name: any) => (base: any) => (props: any) => React.CElement<any, React.Component<any, any, any>>;
export default _default;

}
declare module 'helpers/emmiter' {
export const emit: (...args: any[]) => any;
export const listen: (...args: any[]) => any;

}
declare module 'helpers/escapeRegExp' {
export const escapeRegExp: (s: any) => any;

}
declare module 'helpers/formatCurrency' {
export interface ICurrencyData {
    symbol?: string;
    thousand?: string;
    decimal?: string;
    precision?: number;
    symbolOnLeft?: boolean;
    spaceBetweenAmountAndSymbol?: boolean;
    format?: {
        pos: string;
        neg: string;
        zero: string;
    };
}
const _default: (currency?: ICurrencyData) => (value: string) => any;
export default _default;

}
declare module 'helpers/getBreakpoint' {
const _default: (breakpoints: any, width?: number) => any;
export default _default;

}
declare module 'helpers/getPrice' {
export const priceIsSampleArray: (price: any) => boolean;
export const getPrice: (maybeImmutablePrice: any, currency: any) => any;

}
declare module 'helpers/omit' {
const _default: (keys: any) => (obj: any) => any;
export default _default;

}
declare module 'helpers/pure' {
import { ComponentEnhancer } from 'recompose';
const _default: ComponentEnhancer<unknown, unknown>;
export default _default;

}
declare module 'helpers/template' {
const _default: (template?: string, selector?: RegExp) => (...args: any[]) => any;
export default _default;

}
declare module 'helpers/useColumns' {
type MediaObject = {
    [x: number]: number | string;
};
const _default: (media: MediaObject) => string;
export default _default;

}
declare module 'helpers/useMedia' {
const _default: (..._breakpoints: number[]) => boolean[];
export default _default;

}
declare module 'helpers/useTheme' {
const _default: (theme?: {}, styles?: {}) => {
    [className: string]: string;
};
export default _default;

}
declare module 'helpers/withColumns' {
import sizeMe from 'react-sizeme';
const _default: (columnsMapper?: (width: any, props?: any) => 3 | 4 | 6 | 12) => (baseComponent: any) => import("react").ComponentType<Pick<{}, never> & sizeMe.WithSizeProps>;
export default _default;

}
declare module 'helpers/withDrawer' {
export const withDrawer: (modalName: any, modalComponent: any, { renderTo, ...options }?: any) => (BaseComponent: any) => any;

}
declare module 'helpers/withErrorHandler' {
import React from 'react';
const _default: (BaseComponent: any) => {
    new (props: {} | Readonly<{}>): {
        state: {
            error: boolean;
        };
        componentDidCatch(error: any, info: any): void;
        render(): React.CElement<unknown, React.Component<unknown, any, any>> | null;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: {}, context: any): {
        state: {
            error: boolean;
        };
        componentDidCatch(error: any, info: any): void;
        render(): React.CElement<unknown, React.Component<unknown, any, any>> | null;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType?: React.Context<any> | undefined;
};
export default _default;

}
declare module 'helpers/withEvents' {
import React from 'react';
const _default: (events?: any) => (BaseComponent: any) => (props: any) => React.CElement<any, React.Component<any, any, any>>;
export default _default;

}
declare module 'helpers/withLazy' {
import React from 'react';
const _default: () => (BaseComponent: any) => {
    new (props: any): {
        container: any;
        autoLoadCount: number;
        registerContainer: (ref: any) => void;
        onLoadNext: () => any;
        onLoadPrev: () => any;
        readonly lessAllowed: any;
        readonly moreAllowed: any;
        trackPosition: () => number | false;
        componentDidMount(): void;
        componentWillUnmount(): void;
        UNSAFE_componentWillReceiveProps({ items, meta, config }: {
            items: any;
            meta: any;
            config: any;
        }): void;
        shouldComponentUpdate(props: any, state: any): boolean;
        render(): JSX.Element;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<any> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>): any;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default _default;

}
declare module 'helpers/withMinResultsToShow' {
const _default: () => (BaseComponent: any) => (props: any) => any;
export default _default;

}
declare module 'helpers/withMobile' {
/// <reference types="react" />
export const useMobile: () => boolean;
const _default: (BaseComponent: any) => (props: any) => import("react").CElement<any, import("react").Component<any, any, any>>;
export default _default;

}
declare module 'helpers/withScrollOnItemsChange' {
/// <reference types="recompose" />
const _default: import("recompose").ComponentEnhancer<unknown, unknown>;
export default _default;

}
declare module 'helpers/withTheme' {
import React from 'react';
const _default: (defaultTheme: any) => (Component: any) => ({ theme, ...props }: {
    [x: string]: any;
    theme: any;
}) => React.CElement<{
    theme: any;
}, React.Component<{
    theme: any;
}, any, any>>;
export default _default;

}
declare module 'helpers/withTheme.test' {
export {};

}
declare module 'layouts/Autocomplete/Dropdown' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'layouts/Autocomplete/Dropdown/trackPosition' {
export const usePosition: () => any[];
const _default: (BaseComponent: any) => (props: any) => any;
export default _default;

}
declare module 'layouts/Autocomplete/Dropdown/view' {
import React from 'react';
import { ThemedSFCProps, MJSConfiguration, ISuggestion, MJSValue } from 'types';
import { List } from 'immutable';
export interface IAutocompletePanel extends ThemedSFCProps {
    config: MJSConfiguration;
    isTrendingSearches?: boolean;
    [x: string]: any;
}
export interface ISearchOrZeroProps {
    suggestions: List<ISuggestion>;
    config: MJSConfiguration;
    meta: Map<string, MJSValue>;
    selectedSuggestion: number;
    isTrendingSearches: boolean;
    [x: string]: any;
}
export interface IAutocompleteDropdownProps {
    suggestions: List<ISuggestion>;
    config: MJSConfiguration;
    meta: Map<string, MJSValue>;
    selectedSuggestion: number;
    isTrendingSearches: boolean;
    [x: string]: any;
}
const AutocompleteDropdownView: React.SFC<IAutocompleteDropdownProps>;
export default AutocompleteDropdownView;

}
declare module 'layouts/Autocomplete/Fullscreen' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'layouts/Autocomplete/Fullscreen/view' {
const _default: ({ config, theme, meta, suggestions, innerRef, position, ...rest }: {
    [x: string]: any;
    config: any;
    theme: any;
    meta: any;
    suggestions: any;
    innerRef: any;
    position: any;
}) => JSX.Element;
export default _default;

}
declare module 'layouts/Autocomplete' {
const _default: any;
export default _default;

}
declare module 'layouts/Autocomplete/Sidebar' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'layouts/Autocomplete/Sidebar/view' {
import React from 'react';
class Sidebar extends React.Component {
    state: {
        isOpen: boolean;
    };
    suggestionsContainer: any;
    input: any;
    isFocused: any;
    mounted: boolean;
    componentWillUnmount(): void;
    componentDidMount(): void;
    handleFocusOut: (e: any) => void;
    handleInputChange: ({ target: { value } }: {
        target: {
            value: any;
        };
    }) => void;
    componentDidUpdate(): void;
    handleExited: () => void;
    getInputRef: (el: any) => void;
    handleSubmit: () => void;
    render(): JSX.Element;
}
export default Sidebar;

}
declare module 'layouts/Autocomplete/withAutocompleteLogic' {
import React from 'react';
export const useAutocompleteLogic: () => {
    selectedSuggestion: any;
    closeAutocomplete: () => any;
};
const _default: (BaseComponent: any) => (props: any) => React.CElement<unknown, React.Component<unknown, any, any>>;
export default _default;

}
declare module 'layouts/Content' {
const _default: any;
export default _default;

}
declare module 'layouts/Content/view' {
import { MJSConfiguration, MJSValue, ThemedSFCProps } from 'types';
export interface IContentSearchProps extends ThemedSFCProps {
    config: MJSConfiguration;
    meta: Map<string, MJSValue>;
    isMobile?: boolean;
    filtersOnRight?: boolean;
}
const _default: ({ config, theme, }: IContentSearchProps) => JSX.Element;
export default _default;

}
declare module 'layouts/Custom' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'layouts/Custom/view' {
const _default: ({ theme }: {
    theme: any;
}) => JSX.Element;
export default _default;

}
declare module 'layouts/Recommendation/Grid' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'layouts/Recommendation/Grid/view' {
import { IProduct, MJSConfiguration, ThemedSFCProps } from 'types/index';
import { List } from 'immutable';
export interface IGridProps extends ThemedSFCProps {
    items: List<IProduct>;
    config: MJSConfiguration;
    columns: string;
}
const GridRecommendationLayout: ({ items, config, theme, columns }: IGridProps) => JSX.Element;
export default GridRecommendationLayout;

}
declare module 'layouts/Recommendation' {
const _default: any;
export default _default;

}
declare module 'layouts/Recommendation/Slider' {
import 'layouts/Recommendation/Slider/styles.global.css';
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'layouts/Recommendation/Slider/Swiper' {
const _default: ({ children, ...props }: {
    [x: string]: any;
    children: any;
}) => JSX.Element;
export default _default;

}
declare module 'layouts/Recommendation/Slider/view' {
const _default: ({ items, config, theme, sliderOptions }: {
    items: any;
    config: any;
    theme: any;
    sliderOptions: any;
}) => JSX.Element;
export default _default;

}
declare module 'layouts/Search' {
const _default: any;
export default _default;

}
declare module 'layouts/Search/view' {
import { List } from 'immutable';
import { MJSConfiguration, ThemedSFCProps, IProduct } from 'types';
export interface ISearchProps extends ThemedSFCProps {
    config: MJSConfiguration;
    isMobile?: boolean;
    isCollection?: boolean;
    mobileFacetsOpened?: boolean;
    filtersOnRight?: boolean;
    items: List<IProduct>;
}
const SearchLayout: ({ config, isCollection, theme, items }: {
    config: any;
    isCollection: any;
    theme: any;
    items: any;
}) => JSX.Element;
export default SearchLayout;

}
declare module 'layouts/Tabs' {
const _default: any;
export default _default;

}
declare module 'layouts/Tabs/view' {
const _default: ({ onClick, widgets, theme }: {
    onClick: any;
    widgets: any;
    theme: any;
}) => JSX.Element;
export default _default;

}
declare module 'layouts/ZeroResults' {
const _default: import("react").ComponentClass<unknown, any>;
export default _default;

}
declare module 'layouts/ZeroResults/view' {
import { List } from 'immutable';
import { IProduct, ThemedSFCProps, MJSConfiguration } from 'types';
export interface IZeroResultsProps extends ThemedSFCProps {
    items: List<IProduct>;
    title: string;
    config: MJSConfiguration;
    columns: number;
}
const ZeroResultsLayout: ({ items, title, theme, columns, config }: IZeroResultsProps) => JSX.Element;
export default ZeroResultsLayout;

}
