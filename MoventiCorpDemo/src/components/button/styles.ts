import type {AllProps} from '../../theme';
import type {StylesMain} from './types';

const button: StylesMain['button'] = {
  size: {
    small: {height: 42},
    default: {height: 48},
    large: {height: 56},
  },
  type: {
    default: {backgroundColor: 'black'},
    primary: {backgroundColor: 'link'},
    secondary: {backgroundColor: 'coolGray-200'},
  },
};

const text: StylesMain['text'] = {
  size: {
    // small: {fontSize: 'base'},
    // default: {fontSize: 'lg'},
    // large: {fontSize: 'xl'},
    small: {fontSize: 16},
    default: {fontSize: 18},
    large: {fontSize: 20},
  },
  type: {
    default: {color: 'white'},
    primary: {color: 'white'},
    secondary: {color: 'text'},
  },
};

const shadow: AllProps = {
  elevation: 3,
  shadowColor: 'black',
  shadowOffset: {width: 0, height: 3},
  shadowOpacity: 0.32,
  shadowRadius: 6,
};

export const styles: StylesMain = {
  button: {
    size: button.size,
    type: {
      default: {
        backgroundColor: 'black',
        borderRadius: 'full',
        ...shadow,
      },
      primary: {
        backgroundColor: 'primary',
        borderRadius: 'full',
        ...shadow,
      },
      secondary: {
        backgroundColor: 'secondary',
        borderRadius: 'full',
        ...shadow,
      },
    },
  },
  text: {
    size: text.size,
    type: {
      default: {color: 'white'},
      primary: {color: 'white'},
      secondary: {color: 'white'},
    },
  },
};
