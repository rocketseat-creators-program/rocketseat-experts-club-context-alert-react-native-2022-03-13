import React, {createContext, useCallback, useContext, useState} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';

type AlertContextValues = {
  alert: (payload: AlertContent) => void;
};

type AlertContent = {
  title: string;
  message: string;
  cb?: () => void;
};

const AlertContext = createContext({} as AlertContextValues);

export const AlertContextProvider: React.FC = ({children}) => {
  const [content, setContent] = useState<AlertContent>();

  const [isVisible, setIsVisibile] = useState<boolean>(false);

  const closeModal = useCallback(() => {
    if (typeof content?.cb === 'function') {
      content.cb();
    }
    setIsVisibile(false);
  }, [content]);

  const alert = useCallback((payload: AlertContent) => {
    setContent(payload);
    setIsVisibile(true);
  }, []);

  return (
    <AlertContext.Provider value={{alert}}>
      {children}

      <Modal isVisible={Boolean(isVisible && content)}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            paddingVertical: 64,
            paddingHorizontal: 16,
            marginVertical: 128,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              marginBottom: 12,
            }}>
            {content?.title}
          </Text>

          <Text>{content?.message}</Text>

          <Button title="fechar" onPress={closeModal} />
        </View>
      </Modal>
    </AlertContext.Provider>
  );
};

export function useAlert() {
  const context = useContext(AlertContext);
  return context;
}
