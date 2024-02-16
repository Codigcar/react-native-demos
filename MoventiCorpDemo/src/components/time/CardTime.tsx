import View from '../box/View';
import Paragraph from '../typhografic/Paragraph';

const CardTime = () => {
  return (
    <View
      backgroundColor="coolGray-200"
      flex={1}
      borderRadius="xl"
      padding="0.75"
      shadowColor="black"
      shadowOffset={{width: 0, height: 4}}
      shadowOpacity={0.32}
      shadowRadius={5.46}
      elevation={9}>
      <View flexDirection="row" justifyContent="space-between">
        <Paragraph>10:00 - 11:00</Paragraph>
        <View flexDirection="row">
          <Paragraph>Aula 122</Paragraph>
          <Paragraph> | </Paragraph>
          <Paragraph>Sección 0001</Paragraph>
        </View>
      </View>
      <View height={10} />
      <Paragraph>Biología</Paragraph>
      <View height={5} />
      <Paragraph>Título de evento</Paragraph>
    </View>
  );
};

export default CardTime;
