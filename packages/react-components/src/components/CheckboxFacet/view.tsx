/**
 * @module components/CheckboxFacet
 */

import { ChangeEvent } from 'react';
import cx from 'classnames';

import MapArray from 'components/common/MapArray';
import Checkbox from 'components/common/Checkbox';
import Button from 'components/Button';
import Text from 'components/Text';
import Icon from 'components/Icon';
import Loadable from 'react-loadable';
import { IFacetValue, ThemedSFCProps, MJSConfiguration, IFacet } from 'types';
import { List } from 'immutable';
import chunks from 'helpers/chunks';
import content from 'components/CheckboxFacet/content';
import useTranslations from 'helpers/useTranslations';
import { item } from 'components/common/Checkbox/styles.css';

/** Props that CheckboxFacet accepts */
export interface ICheckboxFacetProps extends ThemedSFCProps {
  /** List of facet values available for toggling */
  items: List<IFacetValue>;

  facet: IFacet;

  /** MJS Configuration */
  config: MJSConfiguration;
  /** Search string for filtering facet values */
  search?: string;
  /** Flag shows whether search functionality is enabled */
  isExpanded?: boolean;
  /** Flag to show if facet is opened on mobile */
  isMobile?: boolean;
  /** Callback invoked on search input change */
  onSearch: (evt: ChangeEvent<HTMLInputElement>) => any;
  /** Callback invoked on request to expand list completely */
  onToggle: (evt: Event) => any;

  hidden: boolean;
}

const VirtualizedList = Loadable({
  loader: chunks.components.virtualizedList,
  loading: () => null,
});

const CheckboxFacetView = ({
  theme,
  items,
  config,
  search,
  isExpanded,
  onSearch,
  onToggle,
  isMobile,
  facet,
  hidden,
}: ICheckboxFacetProps) => {
  const t = useTranslations();
  return (
    <div
      className={cx(theme.root, { [theme.mobile]: isMobile })}
      id={`facet-${facet.get('name')}`}
      role="region"
      hidden={hidden}
    >
      <div className={theme.search} display-if={isExpanded}>
        <input
          placeholder={t('search')}
          className={theme.input}
          onChange={onSearch}
          value={search}
        />
        <Icon name="Search" className={theme.icon} title={t('Search')} />
      </div>

      <section role="list">
        <MapArray
          display-if={config.get('pullSelected')}
          array={items.filter((i) => i.get('selected'))}
          factory={Checkbox}
          content={content}
        />

        <VirtualizedList
          display-if={isExpanded}
          factory={(props) => (
            <Checkbox {...props} onItemClick={() => onSearch('')} />
          )}
          config={config}
          content={content}
          limit={config.get('maxItemsCount', 6)}
          className={theme.expandedList}
          array={
            config.get('pullSelected')
              ? items.filter((i) => !i.get('selected'))
              : items
          }
        />

        <MapArray
          display-if={!isExpanded}
          factory={Checkbox}
          limit={config.get('maxItemsCount', 6)}
          content={content}
          keyAccessor={(i) => i.get('value')}
          array={
            config.get('pullSelected')
              ? items.filter((i) => !i.get('selected'))
              : items
          }
        />
      </section>

      <Button
        className={theme.expand}
        onClick={onToggle}
        display-if={items.size > config.get('maxItemsCount', 6)}
      >
        <Text primary uppercase>
          <Icon
            name={isExpanded ? 'Minus' : 'Plus'}
            title={t(isExpanded ? 'Expanded' : 'Collapsed')}
          />
          {isExpanded ? t('less') : t('more')}
        </Text>
      </Button>
    </div>
  );
};

export default CheckboxFacetView;
