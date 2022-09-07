import React from 'react'
import { Box } from '@mui/system'
import { createTheme,ThemeProvider} from '@mui/material/styles';
import { Button } from '@mui/material'
const frog = require('../mainScrens/ImgFrog/frogimg.png')
const logo = require('../mainScrens/ImgFrog/logo.png')



const styles = {
    containers: {
        display: 'flex',
        justifyContent: 'center',
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#F4EFE9',
        width: '80%',
    },
    fontsTop: {
        fontFamily: 'Inter',
        fontSize: '38px',
        color: '#8BB43C',
    },
    fontsBottom: {
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: '38px',
    },
    
}
export const Main = () => {
    return (<>
        <Box sx={styles.containers}>
            <Box sx={styles.wrapper}>
                <div className='logo'><img src={logo} />
                    <Box sx={styles.fontsTop}><p>Stan Smith,</p></Box>
                    <Box sx={styles.fontsBottom}><p>Forever!</p></Box>
                    <Button variant="contained" >Купить</Button>
                </div>
                <div className='leftSection'>
                    <img src={frog} />

                </div>
            </Box>
        </Box>

    </>)
}