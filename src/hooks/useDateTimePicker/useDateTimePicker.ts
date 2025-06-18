import { useState } from 'react';

export const useDateTimePicker = () => {
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [pickerMode, setPickerMode] = useState<'date' | 'time'>('date');
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

  const showPicker = (mode: 'date' | 'time') => {
    setPickerMode(mode);
    setIsPickerVisible(true);
  };

  const hidePicker = () => {
    setIsPickerVisible(false);
  };

  const handleConfirm = (pickedDate: Date) => {
    setSelectedDateTime((prevDateTime) => {
      if (pickerMode === 'date') {
        // Preserve the time when updating the date
        const time = prevDateTime || new Date();
        return new Date(
          pickedDate.getFullYear(),
          pickedDate.getMonth(),
          pickedDate.getDate(),
          time.getHours(),
          time.getMinutes(),
          time.getSeconds()
        );
      } else {
        // Preserve the date when updating the time
        const date = prevDateTime || new Date();
        return new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          pickedDate.getHours(),
          pickedDate.getMinutes(),
          pickedDate.getSeconds()
        );
      }
    });
    hidePicker();
  };

  return {
    isPickerVisible,
    pickerMode,
    selectedDateTime,
    showPicker,
    hidePicker,
    handleConfirm
  };
};
