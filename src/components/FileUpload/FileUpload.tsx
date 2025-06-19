import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React, { FC } from 'react';

import { COLORS, customStyles } from '../../constant/Colors';
import FileIcon from '../../assets/svg/FileIcon';
import FileJPGIcon from '../../assets/svg/FileJPGIcon';
import FilePNGIcon from '../../assets/svg/FilePNGIcon';
import DeleteFile from '../../assets/svg/DeleteFile';
import Complete from '../../assets/svg/Complete';

type Props = {
  fileSize: string;
  fileType: string;
  fileName: string;
  fileLabel: string;
  removeImage: () => void;
};

const FileUpload: FC<Props> = ({
  fileSize,
  fileType,
  fileName,
  fileLabel,
  removeImage
}) => {
  return (
    <View style={styles.container}>
      <View style={[customStyles.group, { gap: 12 }]}>
        {fileType === 'PDF' ? (
          <FileIcon />
        ) : fileType === 'PNG' ? (
          <FilePNGIcon />
        ) : (
          <FileJPGIcon />
        )}
        <View>
          <Text style={styles.text}>{fileName}</Text>
          <View style={[customStyles.group, { gap: 10, marginTop: 6 }]}>
            <Text style={[styles.text, { color: COLORS.neutral200 }]}>
              {fileSize}
            </Text>
            {fileLabel === 'Uploading...' ? (
              <ActivityIndicator size="small" />
            ) : (
              <Complete />
            )}
            <Text style={[styles.text, { color: COLORS.neutral200 }]}>
              {fileLabel}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{ alignItems: 'flex-end' }}
        onPress={removeImage}
      >
        <DeleteFile />
      </TouchableOpacity>
    </View>
  );
};

export default FileUpload;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E4E9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12
  },
  text: {
    fontSize: 14,
    fontFamily: 'UrbanistMedium',
    color: '#0A0D14'
  }
});
