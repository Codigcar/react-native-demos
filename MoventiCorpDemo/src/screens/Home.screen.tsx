import View from '../components/box/View';
import Paragraph from '../components/typhografic';
import MenuHeader from '../containers/MenuHeader';

const HomeScreen = () => {
  return (
    <MenuHeader>
      <View backgroundColor="white">
        <Paragraph>Hola</Paragraph>
      </View>
    </MenuHeader>
  );
};

export default HomeScreen;
