import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import CustomError from '../CustomError/CustomError';
import Cloud from '../../assets/svg/Cloud';
import { customStyles, COLORS } from '../../constant';

type Props = {
  handleChoosePhotoWithoutUpload: () => void;
  error: string;
};

const ChooseFile: FC<Props> = ({ handleChoosePhotoWithoutUpload, error }) => {
  return (
    <View style={styles.upload}>
      <Cloud />
      <View style={[customStyles.group, styles.uploadBottom]}>
        <TouchableOpacity
          style={styles.file}
          onPress={() => handleChoosePhotoWithoutUpload()}
        >
          <Text style={styles.fileText}>Choose a file</Text>
        </TouchableOpacity>
        <Text style={styles.noFileText}>No file chosen</Text>
      </View>
      <View>
        {error ? (
          <CustomError error={error} />
        ) : (
          <Text style={styles.text}>JPEG, PNG, PDF formats, up to 500 KB</Text>
        )}
      </View>
    </View>
  );
};

export default ChooseFile;

const styles = StyleSheet.create({
  upload: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 16,
    borderColor: '#868C98'
  },
  uploadBottom: {
    gap: 4,
    marginTop: 7,
    marginBottom: 4,
    alignSelf: 'center'
  },
  file: {
    backgroundColor: COLORS.primary500,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    gap: 8
  },
  fileText: {
    color: COLORS.white,
    fontFamily: 'UrbanistMedium',
    fontSize: 14
  },
  noFileText: {
    fontFamily: 'UrbanistMedium',
    fontSize: 14,
    color: COLORS.neutral400
  },
  text: {
    color: '#868C98',
    lineHeight: 16,
    fontSize: 12,
    fontFamily: 'Urbanist'
  }
});
