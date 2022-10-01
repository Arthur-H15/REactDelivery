

import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import { Mapping } from './component/mapping';
import theme from './thema';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
    <CssBaseline/>
     <Mapping/>
     </SnackbarProvider>
    </MuiThemeProvider>
  );
}

export default App;
