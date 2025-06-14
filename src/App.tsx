import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import AppRoutes from './Routes/AppRoutes'
import { Notifications } from '@mantine/notifications';
import { Provider } from 'react-redux';
import Store from './Store';

function App() {

  const theme = createTheme({

    colors:{
        dark:[
          '#C9C9C9',
          '#b8b8b8',
          '#828282',
          '#696969',
          '#424242',
          '#3b3b3b',
          '#2e2e2e',
          '#242424',
          '#1f1f1f',
          '#141414',
        ]
    }
  /** Put your mantine theme override here */
});

  return (
    <>
    <Provider store={Store}>
    <MantineProvider theme={theme}>
      <Notifications position='top-center'/>
      <AppRoutes />
    </MantineProvider>
    </Provider>
    </>
  )
}

export default App
