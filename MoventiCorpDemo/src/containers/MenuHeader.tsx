import View from '../components/box/View';
import Paragraph from '../components/typhografic';

const MenuItem = () => {
  return (
    <View flexDirection="row" alignItems="center">
      <View
        height={24}
        width={24}
        backgroundColor="yellow"
        borderRadius="full"
      />
      <View>
        <Paragraph>Biología</Paragraph>
        <Paragraph>Cod: 9999999</Paragraph>
      </View>
    </View>
  );
};

const MenuHeader = ({children}: any) => {
  return (
    <View backgroundColor="white" pt="1" pb="1" paddingHorizontal="0.75">
      <View>
        <Paragraph>Visualiza otro curso</Paragraph>
      </View>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      {children}
    </View>
  );
};

export default MenuHeader;
