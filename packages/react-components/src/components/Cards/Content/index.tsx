/**
 * @module components/Cards/Content
 */

import Image from 'components/common/Image';
import Text from 'components/Text';
import Truncate from 'components/common/Truncate';
import Icon from 'components/Icon';
import styles from 'components/Cards/Content/styles.css';
import { useCallback } from 'react';

const Title: any = ({ text, theme, ...rest }) => (
  <Text display-if={!!text} className={theme.title} {...rest}>
    {text}
  </Text>
);

const strip = (html) => html.replace(/<(?:.|\n)*?>/gm, '');

const Description: any = ({ text, theme, ...rest }) => (
  <p display-if={!!text} className={theme.description} {...rest}>
    <Truncate>{text}</Truncate>
  </p>
);

export default ({ item, config, theme = styles }) => {
  const onClick = useCallback(
    (e) => {
      e.preventDefault();
      item.analytics.sendEvent('content_click', {
        id: item.get('id'),
        rid: item.meta.get('rid'),
      });
      window.open(item.get('url'), '_blank');
    },
    [item]
  );

  return (
    <a onClick={onClick} className={theme.root} href={item.get('url')}>
      <div className={theme.imageWrap} display-if={item.get('image')}>
        <Image
          className={theme.image}
          aspectRatio={config.getIn(['image', 'aspectRatio'], 1)}
          src={item.getIn(['image', 'src'])}
          alt={item.get('title')}
        />
        <Icon
          name="ExternalLink"
          className={theme.linkIcon}
          title="Open in new window"
        />
      </div>
      <Title theme={theme} text={item.get('title')} />
      <Description
        theme={theme}
        text={strip(item.get('body_html')).slice(
          0,
          config.getIn(['description', 'truncate'], 150)
        )}
      />
    </a>
  );
};
