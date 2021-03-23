/**
 * @module components/CategoryFacet
 */

import cx from 'classnames';

import MapArray from 'components/common/MapArray';
import Item from 'components/CategoryFacet/Item';
import Button from 'components/Button';
import Text from 'components/Text';
import { IFacet, ThemedSFCProps, MJSConfiguration } from 'types';
import { List, Map } from 'immutable';
import Icon from 'components/Icon';
import useTranslations from 'helpers/useTranslations';

/** CategoryFacet props */
export interface ICategoryFacetProps extends ThemedSFCProps {
  /** Categories facet */
  facet: IFacet;
  /** Facet items */
  items: List<Map<string, string | boolean | number>>;
  /** Total count of selected facets */
  total: number;
  /** MJS Configuration */
  config: MJSConfiguration;
  /** Flag shows whether search functionality is enabled */
  isExpanded?: boolean;
  /** Callback invoked on request to expand list completely */
  onToggle: (evt: Event) => any;

  hidden: boolean;
}

export default ({
  theme,
  items,
  config,
  facet,
  total,
  isExpanded,
  onToggle,
  hidden,
}: ICategoryFacetProps) => {
  const t = useTranslations();
  return (
    <div
      className={theme.root}
      id={`facet-${facet.get('name')}`}
      role="region"
      hidden={hidden}
    >
      <Button className={theme.item} onClick={facet.resetValues}>
        <Text
          lowercase
          primary
          bold={!items.find((i) => i.get('selected') as boolean)}
          className={theme.content}
        >
          {t('All categories')}
        </Text>
        <Text secondary uppercase>
          ({total})
        </Text>
      </Button>
      <MapArray
        config={config}
        array={items}
        factory={Item}
        limit={!isExpanded && config.get('maxItemsCount', 6)}
        theme={theme}
      />

      <Button
        className={theme.expand}
        onClick={onToggle}
        display-if={items.size > config.get('maxItemsCount', 6)}
      >
        <Text primary uppercase>
          <Icon
            name={isExpanded ? 'Minus' : 'Plus'}
            title={isExpanded ? 'Expanded' : 'Collapsed'}
          />
          {isExpanded ? t('less') : t('more')}
        </Text>
      </Button>
    </div>
  );
};
