import { Image, ScrollView, Text, View } from 'react-native';
import React from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import BackButton from '@layouts/Header/components/BackButton/BackButton';
import Header from '@layouts/Header/Header';
import Avatar from '@ui/Avatar/Avatar';
import { colors, pinkImage, sizes } from '@mocks/testImages';
import { typography } from '@styles/typography';
import Spacer from '@components/Spacer/Spacer';
import Picker from '@components/Picker/Picker';
import SizeLabel from '@ui/SizeLabel/SizeLabel';
import { PRIMARY } from '@styles/colors';
import ColorLabel from '@ui/ColorLabel/ColorLabel';
import PrimaryButton from '@ui/PrimaryButton/PrimaryButton';
import { styles } from './styles';

const ProductDetailScreen = () => {
  return (
    <MainContainer>
      <Header>
        <BackButton />
        <Avatar
          size={44}
          uri="https://avatars.mds.yandex.net/i?id=451c2720edb5fdad00d8f320ba5d50980af55381-9065873-images-thumbs&n=13"
        />
      </Header>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Spacer height={10} />
        <Image source={pinkImage} style={styles.image} />

        <Spacer height={14} />
        <View style={styles.row}>
          <Text style={typography.mediumTitle}>{'Winter Coat'}</Text>
          <Text style={[typography.mediumTitle, styles.priceText]}>
            {'$65.9'}
          </Text>
        </View>
        <Spacer height={24} />
        <Text style={typography.mediumTitle}>{'Size'}</Text>
        <Spacer height={10} />
        <Picker
          keyExtractor={item => item.id}
          data={sizes}
          horizontal={true}
          renderItem={(item, selectedValue) => (
            <View style={styles.sizeRow}>
              <SizeLabel sizeDimension={36}>
                <Text
                  style={[
                    typography.smallTitle,
                    item === selectedValue && { color: PRIMARY },
                  ]}
                >
                  {item.label}
                </Text>
              </SizeLabel>
              <Spacer width={12} />
            </View>
          )}
        />
        <Spacer height={35} />
        <Text style={typography.mediumTitle}>{'Colors'}</Text>
        <Spacer height={10} />

        <Picker
          keyExtractor={item => item.id}
          data={colors}
          horizontal={true}
          renderItem={(item, selectedValue) => (
            <View style={styles.colorRow}>
              <View
                style={[
                  styles.colorCircle,
                  item === selectedValue && { borderColor: item.name },
                ]}
              >
                <ColorLabel size={36} color={item.name} />
              </View>

              <Spacer width={12} />
            </View>
          )}
        />
        <Spacer height={31} />
        <PrimaryButton text="Add to Cart" />
        <Spacer height={31} />
      </ScrollView>
    </MainContainer>
  );
};

export default ProductDetailScreen;
