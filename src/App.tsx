import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import AppRoutes from './Routes/AppRoutes'

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
    <MantineProvider theme={theme}>
      <AppRoutes />
    </MantineProvider>
    </>
  )
}

export default App
