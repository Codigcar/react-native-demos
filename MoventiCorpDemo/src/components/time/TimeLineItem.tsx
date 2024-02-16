import View from '../box/View';
import Paragraph from '../typhografic/Paragraph';
import CardTime from './CardTime';

const TimeLineItem = () => {
  return (
    <View>
      <View flexDirection="row">
        <View position="relative" alignItems="center" justifyContent="center" pr="0.75">
          <View flex={1} width={2} backgroundColor="gray-900" />
          <View
            width={22}
            height={22}
            backgroundColor="black"
            borderRadius="full"
          />
          <View flex={1} width={2} backgroundColor="gray-900" />
        </View>
        <CardTime />
      </View>
    </View>
  );
};
export default TimeLineItem;
